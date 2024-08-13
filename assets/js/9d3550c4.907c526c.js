"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[68682],{

/***/ 74337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ install_agent_contentTitle),
  "default": () => (/* binding */ install_agent_MDXContent),
  frontMatter: () => (/* binding */ install_agent_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ install_agent_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./src/components/TR.js
var TR = __webpack_require__(21024);
// EXTERNAL MODULE: ./docs/getting-started/_create-project-intro-v2.mdx
var _create_project_intro_v2 = __webpack_require__(60387);
// EXTERNAL MODULE: ./docs/getting-started/_accesskey.mdx
var _accesskey = __webpack_require__(1698);
;// CONCATENATED MODULE: ./docs/getting-started/_create-project-accesskey-item.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));



/*프로젝트 진입-생성 1월 11일 서비스 배포 전 업데이트 예정 10일 수정*/




const toc = [{
  "value": "프로젝트 생성",
  "id": "프로젝트-생성",
  "level": 2
}, ..._create_project_intro_v2/* toc */.RM, ..._accesskey/* toc */.RM];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    em: "em",
    h2: "h2",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    section: "section",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["와탭 모니터링 서비스를 사용하기 위해서는 먼저 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.whatap.io/ko/signup/",
        children: "회원 가입"
      }), " 후 프로젝트를 생성해야 합니다. 회원 가입에 관한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../account/account-manage",
        children: "다음 문서"
      }), "를 참조하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "권한"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "설치를 위해서 수정 권한이 필요합니다."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "프로젝트-생성",
        children: "프로젝트 생성"
      }), (0,jsx_runtime.jsx)(_create_project_intro_v2/* default */.Ay, {}), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["프로젝트를 생성한 후 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "관리"
          })
        }), " > ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "에이전트 설치"
          })
        }), " 메뉴에서 아이템 설치가 가능합니다. 다음의 설치 안내를 참조해 진행하세요."]
      }), (0,jsx_runtime.jsx)(_accesskey/* default */.Ay, {}), (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "프로젝트 액세스 키"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["이미 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "프로젝트 액세스 키"
          }), "를 발급받았다면 버튼 대신 발급받은 키가 표시됩니다."]
        })]
      })]
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


;// CONCATENATED MODULE: ./docs/amazon-ecs/install-agent.mdx


const install_agent_frontMatter = {
	id: 'install-agent',
	title: '설치하기',
	description: 'Amazon ECS 아이템 설치를 안내합니다.',
	keywords: [
		'설치하기',
		'Amazon ECS'
	]
};
const install_agent_contentTitle = undefined;
const metadata = {
  "id": "amazon-ecs/install-agent",
  "title": "설치하기",
  "description": "Amazon ECS 아이템 설치를 안내합니다.",
  "source": "@site/docs/amazon-ecs/install-agent.mdx",
  "sourceDirName": "amazon-ecs",
  "slug": "/amazon-ecs/install-agent",
  "permalink": "/whatap-docs/amazon-ecs/install-agent",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/amazon-ecs/install-agent.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "install-agent",
    "title": "설치하기",
    "description": "Amazon ECS 아이템 설치를 안내합니다.",
    "keywords": [
      "설치하기",
      "Amazon ECS"
    ]
  },
  "sidebar": "awsecsSidebar",
  "previous": {
    "title": "Amazon ECS",
    "permalink": "/whatap-docs/amazon-ecs/introduction"
  },
  "next": {
    "title": "주요 메뉴 알아보기",
    "permalink": "/whatap-docs/amazon-ecs/learn-main-menu"
  }
};
const assets = {

};





const install_agent_toc = [...toc, {
  "value": "사전 점검 사항",
  "id": "사전-점검-사항",
  "level": 2
}, {
  "value": "모니터링 대상",
  "id": "모니터링-대상",
  "level": 2
}, {
  "value": "모니터링 절차",
  "id": "모니터링-절차",
  "level": 2
}, {
  "value": "EC2 Launch Type",
  "id": "ec2-launch-type",
  "level": 3
}, {
  "value": "Fargate Launch Type",
  "id": "fargate-launch-type",
  "level": 3
}, {
  "value": "모니터링 서비스 활성화",
  "id": "모니터링-서비스-활성화",
  "level": 3
}, {
  "value": "제거 시 주의 사항",
  "id": "제거-시-주의-사항",
  "level": 2
}];
function install_agent_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {ImgLang} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "와탭 Amazon ECS 모니터링은 META API 및 Cgroup 디렉터리를 통해 도커 컨테이너별 자원 사용량을 실시간으로 수집합니다. Amazon ECS API 연동 와탭 Task를 통해 Amazon ECS Service, Deployment, Container Instance의 상태를 조회 및 수집합니다."
    }), "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {}), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "사전-점검-사항",
        children: "사전 점검 사항"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AWS CLI"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["설치 방법은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/cli-chap-configure.html",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Amazon ECS CLI"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["설치 방법은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://docs.aws.amazon.com/ko_kr/AmazonECS/latest/developerguide/Welcome.html",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Python 2.x / 3.x"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "스크립트의 json 문서 분석을 위해 설치가 필요합니다."
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["설치에 쓰이는 와탭 이미지(", (0,jsx_runtime.jsx)(_components.em, {
              children: "whatap/ecs_mon"
            }), ")는 다운로드 후 사용자 레지스트리에 등록하고 사용하는 것을 권장합니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["와탭 서버로 데이터 전송하기 위해 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "6600"
            }), " 포트가 열려 있어야 합니다."]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "모니터링-대상",
        children: "모니터링 대상"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Amazon ECS의 Launch Type에 따라 아이템이 구분됩니다. 모니터링 대상은 Task, Service, Deployment, Container Instance입니다."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "EC2 Launch Type"
              })
            }), ": Task, Service, Deployment, Container Instance"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              alt: "EC2 DAEMON",
              src: (__webpack_require__(45526)/* ["default"] */ .A) + "",
              width: "963",
              height: "687"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Fargate Launch Type"
              })
            }), ": Task, Service, Deployment"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              alt: "ECS Fargate Sidecar",
              src: (__webpack_require__(19266)/* ["default"] */ .A) + "",
              width: "963",
              height: "815"
            })
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["다음의 모니터링 절차도 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "EC2 Launch Type"
          })
        }), " 모니터링을 위한 절차와 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Fargate Launch Type"
          })
        }), " 모니터링을 위한 절차로 구분되어 진행됩니다."]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Amazon ECS launch types에 대한 자세한 설명은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html",
            children: "다음 문서"
          }), "를 참조하세요."]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "모니터링-절차",
        children: "모니터링 절차"
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "amazon-ecs-install.png",
        desc: "ecs install"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["설치 안내 섹션 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "number-s",
              src: (__webpack_require__(15856)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " 탭의 안내를 참조해 와탭 Amazon ECS 에이전트를 전용 Task 혹은 Sidecar로 배포하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["설치 안내 섹션 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "number-s",
              src: (__webpack_require__(29675)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " 탭의 안내를 참조해 모니터링 서비스를 활성화해 모니터링 서비스를 시작하세요."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "ec2-launch-type",
        children: "EC2 Launch Type"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["프로젝트를 생성하고 ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "사전 점검 사항"
              })
            }), "을 확인했다면 ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "관리"
              })
            }), " > ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "에이전트 설치"
              })
            }), "의 설치 안내 섹션으로 이동하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.img, {
              alt: "number-s",
              src: (__webpack_require__(15856)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Task 생성하기"
              })
            }), " 탭에서 ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "EC2 Launch Type"
              })
            }), "을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["다음 스크립트를 실행해 DAEMON 타입 Task를 생성하세요. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CLUSTER"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "REGION"
            }), "을 추가하고 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ACCESSKEY"
            }), " 및 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "WHATAP_HOST"
            }), "를 설정해 수집서버와 통신할 수 있게 합니다."]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title='Linux'",
              children: "#!/usr/bin/env bash\nexport ACCESSKEY=x4u5j20mdbj98-x3btmtjfhffmrc-z6ogidu7vm3shg\nexport WHATAP_HOST=127.0.0.1\nexport CLUSTER=xxxx\nexport REGION=xxxx\nexport LAUNCH_TYPE=EC2\n\ncat >whatap_ecs.json <<EOL\n{ \"containerDefinitions\": [ {\n\"name\": \"whatap-node-agent\",\n\"image\": \"whatap/ecs_mon\",\n\"cpu\": 100,\n\"memory\": 50,\n\"essential\": true,\n\"mountPoints\": [{\n    \"containerPath\": \"/var/run/docker.sock\",\n    \"sourceVolume\": \"docker_sock\",\n    \"readOnly\": true},{\n    \"containerPath\": \"/rootfs\",\n    \"sourceVolume\": \"rootfs\",\n    \"readOnly\": true}],\n\"environment\": [{\n    \"name\": \"ACCESSKEY\",\n    \"value\": \"$ACCESSKEY\"\n},{\n    \"name\": \"WHATAP_HOST\",\n    \"value\": \"$WHATAP_HOST\"}\n],\n\"linuxParameters\": {\n    \"capabilities\": {\n        \"add\": [\n        \"SYS_ADMIN\",\n        \"SYS_RESOURCE\",\n        \"SYS_PTRACE\",\n        \"NET_ADMIN\",\n        \"NET_BROADCAST\",\n        \"NET_RAW\",\n        \"IPC_LOCK\",\n        \"CHOWN\"]\n    }}}],\n\"requiresCompatibilities\": [\"EC2\"],\n\"volumes\": [{\n\"host\": {\"sourcePath\": \"/var/run/docker.sock\"},\n\"name\": \"docker_sock\"},{\n\"host\": {\"sourcePath\": \"/\"},\n\"name\": \"rootfs\"}],\n\"family\": \"whatap-agent-task\"}\n\nEOL\n\naws ecs register-task-definition \\\n--cli-input-json file://$(pwd)/whatap_ecs.json \\\n--region $REGION\naws ecs create-service --cluster $CLUSTER \\\n--service-name whatap-node-agent \\\n--task-definition whatap-agent-task \\\n--scheduling-strategy DAEMON \\\n--launch-type $LAUNCH_TYPE \\\n--region $REGION\n"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "실행에 필요한 항목은 다음과 같습니다."
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.code, {
                      children: "ACCESSKEY"
                    }), " (와탭 프로젝트 Access Key)"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.code, {
                      children: "WHATAP_HOST"
                    }), " (와탭 수집 리전 IP)"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.code, {
                      children: "REGION"
                    }), " (AWS Region)"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.code, {
                      children: "CLUSTER"
                    }), " (ECS Cluster)"]
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "fargate-launch-type",
        children: "Fargate Launch Type"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["프로젝트를 생성하고 ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "사전 점검 사항"
              })
            }), "을 확인했다면 ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "관리"
              })
            }), " > ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "에이전트 설치"
              })
            }), "의 설치 안내 섹션으로 이동하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.img, {
              alt: "number-s",
              src: (__webpack_require__(15856)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Task 생성하기"
              })
            }), " 탭에서 ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Fargate Launch Type"
              })
            }), "을 선택하세요."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "스크립트를 실행하여 AWS ECS API READONLY IAM ROLE을 만듭니다."
              }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
                type: "note",
                children: (0,jsx_runtime.jsx)(_components.p, {
                  children: "와탭 Task가 ECS Service를 조회하여 서비스 상태를 실시간 수집하는데 필요합니다."
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "실행에 필요한 항목은 다음과 같습니다."
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "ACCESSKEY"
                  }), " (와탭 프로젝트 Access Key)"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "WHATAP_HOST"
                  }), " (와탭 수집 리전 IP, 복수 IP는 ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "/"
                  }), " 로 연결)"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "REGION"
                  }), " (AWS Region)"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "PROFILE"
                  }), " (ECS Profile)"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "CLUSTER"
                  }), " (ECS Cluster)"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "CLUSTER_CONFIG"
                  }), " (ECS Cluster Config)"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "TASK_EXECUTION_ROLE"
                  }), " (와탭 에이전트 Task ECS Task 실행 역할)"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "SUBNET_1"
                  }), " (와탭 에이전트 Task SUBNET#1)"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "SUBNET_2"
                  }), " (와탭 에이전트 Task SUBNET#2)"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "SGGRP"
                  }), " (와탭 에이전트 Task Security Group)"]
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "다음 예시를 참조하세요."
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-bash",
                  metastring: "title='Linux'",
                  children: "#!/usr/bin/env bash\nexport REGION=xxxxx\nexport WHATAP_ECS_ROLE_READONLY=WhatapEcsReadonly\nexport WHATAP_ECS_POLICY_READONLY=WhatapEcsReadonly\ncat >ecs_trust.json <<EOL\n{\n    \"Version\": \"2012-10-17\",\n    \"Statement\": [\n        {\n            \"Sid\": \"\",\n            \"Effect\": \"Allow\",\n            \"Principal\": {\n                \"Service\": \"ecs-tasks.amazonaws.com\"\n            },\n            \"Action\": \"sts:AssumeRole\"\n        }\n    ]\n}\nEOL\naws iam create-role --role-name $WHATAP_ECS_ROLE_READONLY --assume-role-policy-document file://ecs_trust.json | python -c 'import json,sys;print(json.load(sys.stdin)[\"Role\"][\"Arn\"])' > role_arn.txt\ncat >ecs_readonly.json <<EOL\n{\n    \"Version\": \"2012-10-17\",\n    \"Statement\": [\n        {\n            \"Effect\": \"Allow\",\n            \"Action\": [\n                \"ecs:Describe*\",\n                \"ecs:List*\"\n            ],\n            \"Resource\": [\n                \"*\"\n            ]\n        }\n    ]\n}\nEOL\naws iam --region $REGION create-policy --policy-name $WHATAP_ECS_POLICY_READONLY \\\n    --policy-document file://ecs_readonly.json | python -c 'import json,sys;print(json.load(sys.stdin)[\"Policy\"][\"Arn\"])' > policy_arn.txt\nexport POLICY_ARN=$(cat policy_arn.txt)\naws iam --region $REGION attach-role-policy --role-name $WHATAP_ECS_ROLE_READONLY \\\n  --policy-arn $POLICY_ARN\n"
                })
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "생성한 IAM ROLE을 탑재한 Whatap-Single 에이전트를 시작하세요. ECS API를 사용하여 Service 상태를 실시간 수집합니다."
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title='Linux'",
              children: "#!/usr/bin/env bash\nexport ACCESSKEY=xxxx-xxxx-xxxx\nexport WHATAP_HOST=xxx.xxx.xxx\nexport PROFILE=xxxxx\t\nexport REGION=xxxxx\nexport CLUSTER=xxxxx\nexport CLUSTER_CONFIG=xxxx\nexport TASK_EXECUTION_ROLE=xxxx\nexport SUBNET_1=xxxx\nexport SUBNET_2=xxxx\nexport SGGRP=xxxx\nexport WHATAP_ECS_ROLE_READONLY=WhatapEcsReadonly\nexport PROJNAME=whatap-monitoring\nexport LAUNCH_TYPE=FARGATE\nexport WHATAP_ROLE_ARN=$(cat role_arn.txt)\n\ncat >docker-compose.yml <<EOL\nversion: '3'\nservices:\nwhatap-ecs-agent:\n    image: whatap/ecs_mon\n    environment:\n    - ACCESSKEY=$ACCESSKEY\n    - WHATAP_HOST=$WHATAP_HOST\n    - FARGATE_HELPER=true\nEOL\n\ncat >ecs-params.yml <<EOL\nversion: 1\ntask_definition:\ntask_execution_role: $TASK_EXECUTION_ROLE\ntask_role_arn: \"$WHATAP_ROLE_ARN\"\necs_network_mode: awsvpc\ntask_size:\n    mem_limit: 0.5GB\n    cpu_limit: 256\nrun_params:\nnetwork_configuration:\n    awsvpc_configuration:\n    subnets:\n        - \"$SUBNET_1\"\n        - \"$SUBNET_2\"\n    security_groups:\n        - \"$SGGRP\"\n    assign_public_ip: ENABLED\nEOL\n\necs-cli compose --project-name $PROJNAME service up \\\n    --cluster-config $CLUSTER_CONFIG \\\n    --ecs-profile $PROFILE --region $REGION\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["다음과 같이 최종 사용자 Task에 와탭 Sidecar 에이전트를 배포하세요. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ACCESSKEY"
            }), " 및 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "WHATAP_HOST"
            }), "를 환경 변수로 추가해 수집 서버와 통신할 수 있도록 합니다."]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title='Linux'",
              children: "version: '3'\nservices:\nxxxxx:\n    image: xxxx\n    ports:\n    - \"xx:xx\"\n    ...\nwhatap-ecs-agent:\n    image: whatap/ecs_mon\n    environment:\n    - ACCESSKEY=\n    - WHATAP_HOST=\n"
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "모니터링-서비스-활성화",
        children: "모니터링 서비스 활성화"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.img, {
          alt: "number-s",
          src: (__webpack_require__(29675)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "모니터링 시작하기"
          })
        }), " 탭에서 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "모니터링 서비스 활성화"
          })
        }), " 버튼을 선택해 모니터링 서비스를 시작하세요."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "모니터링 서비스 활성화 가능"
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "amazon-ecs-monitoring-on.png",
            desc: "모니터링 활성화"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "모니터링 서비스 활성화 불가"
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "amazon-ecs-monitoring-off.png",
            desc: "모니터링 활성화 불가"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "제거-시-주의-사항",
        children: "제거 시 주의 사항"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "완전한 비용 발생 방지를 위해서는 다음 항목을 삭제하세요."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ECS Service: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "whatap-ecs-agent"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Task Sidecar: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "whatap-ecs-agent"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Role: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "WhatapEcsReadonly"
            })]
          }), "\n"]
        }), "\n"]
      })]
    })]
  });
}
function install_agent_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(install_agent_createMdxContent, {
      ...props
    })
  }) : install_agent_createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 1698:
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





const toc = [{
  "value": "프로젝트 액세스 키 확인",
  "id": "check-accesskey",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    p: "p",
    section: "section",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, Xclude} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!Xclude) _missingMdxReference("Xclude", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "check-accesskey",
      children: "프로젝트 액세스 키 확인"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "프로젝트 액세스 키"
      }), "는 와탭 서비스 활성화를 위한 고유 ID입니다."]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["설치 안내 섹션에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "issue_project_access_key",
        className: "uitext"
      }), " 버튼을 선택하세요. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "프로젝트 액세스 키"
      }), "를 자동으로 발급 받은 후 다음 단계를 진행합니다."]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xclude, {
      product: "server",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "tip",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["프로젝트를 생성한 다음에는 자동으로 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "agent_installation",
            className: "uitext"
          }), " 페이지로 이동합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "agent_installation",
            className: "uitext"
          }), " 페이지로 이동하지 않는다면 왼쪽 메뉴에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "all_projects",
            className: "uitext"
          }), "를 선택한 다음 새로 생성한 프로젝트를 선택하세요."]
        })
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 60387:
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
    a: "a",
    admonition: "admonition",
    em: "em",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang, InDoc, Xclude} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  if (!Xclude) _missingMdxReference("Xclude", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "에이전트를 설치하기 전에 먼저 프로젝트를 생성하세요."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://service.whatap.io",
            children: "와탭 모니터링 서비스"
          }), "로 이동한 다음 로그인하세요."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["프로젝트를 생성하려면 화면 왼쪽 사이드 메뉴에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "BTN07332",
            className: "uitext"
          }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "+"
            })
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "BTN06696",
            className: "uitext"
          }), " 버튼을 선택하세요."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "TTL07073",
            className: "uitext"
          }), " 화면에서 프로젝트에 설치할 상품을 선택하세요."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "project_name",
            className: "uitext"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "data_server_region",
            className: "uitext"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "project_time_zone",
            className: "uitext"
          }), " 등의 항목을 차례로 설정하세요."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "create-project-v3.png",
          desc: ""
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "TTL07727",
            className: "uitext"
          }), "에서 경고 알림 메시지의 언어를 선택하세요."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["모든 설정을 완료한 다음에는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "creating_a_project",
            className: "uitext"
          }), " 버튼을 선택하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "data_server_region",
              className: "uitext"
            }), "은 리전(클라우드 서비스를 제공하기 위해 설치한 데이터 센터의 묶음)을 의미합니다. 특정 리전을 선택하면 해당 리전에 속한 데이터 센터에 사용자의 데이터를 저장합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "project_time_zone",
              className: "uitext"
            }), "은 알림, 보고서를 생성하는 기준 시간입니다."]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        product: "quick-guide",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["여러 개의 프로젝트를 그룹으로 묶어 관리하려면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "project_groups",
              className: "uitext"
            }), "에서 그룹을 선택하거나 그룹을 추가하세요. 그룹에 대한 자세한 설명은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "project/group",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xclude, {
        product: "quick-guide",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["여러 개의 프로젝트를 그룹으로 묶어 관리하려면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "project_groups",
              className: "uitext"
            }), "에서 그룹을 선택하거나 그룹을 추가하세요. 그룹에 대한 자세한 설명은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../project/group",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["조직을 선택한 상태에서 프로젝트를 추가할 경우 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "group_of_organization",
            className: "uitext"
          }), "을 필수로 설정해야 합니다."]
        }), "\n"]
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

/***/ 21024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ TR)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15418);



function TR({ sid  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        id: sid
    });
};


/***/ }),

/***/ 45526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ecs_ec2_whatap_monitoring-b30027ec6f5d5cb5277a3f1b1f7cba4b.png");

/***/ }),

/***/ 19266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ecs_fargate_whatap_monitoring-317b706d23d6032434df9779a2985397.png");

/***/ }),

/***/ 15856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Yzg0YmZlYjgtYTgzZS00NTU3LWFiNGYtODQ3ZTFjMGQ5MjNlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTJEQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTJDQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTZlMmZhMDktMjhmZS00ZGUxLTg3NGQtNDQwYjgxNTBmMzI4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmM4NGJmZWI4LWE4M2UtNDU1Ny1hYjRmLTg0N2UxYzBkOTIzZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppgo9sAAAAJPSURBVHjazJhNSBtBGIYnNiejFDwIzUEbKh5U0FsPWqOFSlTw5EFEpbeSgxdRUZFSi4rgMZS0p2KrICKiWIN6kPgH7cnfgAcl6EEhCErbQKGV9v3MDG6XxMwmu5t94cGom+Fhdubbb9YWXWZa4gQNoBqUgQKQB/6CK3AKQmAdBMCFlsFtkjK1oBe8AA8kx74BNPo4l0uarCT/LwIrYA14NIgwfm0jCIIl8CQdmZdgF9Sx9EO3dg+0a5WxgWHwETiYfqGxPoHXiS6wx/nbKOhjxmWI/3ybbGY6DBZRCrXeJ0OL1c/My3vgSiTzDmSbKJMLfPFknmvZNdFfjM2hcpRjvzk8MVIMbf1n6gXcLfPNr6it/nnGZjd1naEesClmxik7K+eXuotQ6kG+mJlG2cpajCfR5/7Y5619xj4s6SJj50IT9MEt+60yVwwRnWQoNSRDt6mUZT4lYs0UWkDGJWQeWkAmV6aFMDUkc20Bjx9C5swCMmEhc2ABmZCQ2bCATFDIUOn6k0GR37xxvy3FdJxY5X1q4puKq3yzd78fqVZal6IZ6GxG4XgkLUOTEVEeVdxiqhLlEEvsqVdu9G/+/x8bSVIFtpV1Zl1MlclZFCLqQxy1nTsgxySR76BCbGt1BT4GXpNE6Dj8SikS73EwqThKGJkBMC1ziHtjoBDNyCAY03K8JaE28FPnNdICRlI5a0/xBRbQadfQWDPpvIU44T0yvY/5orFSU2VdAJWgSb1Y03k/I5LPK7Wbt6uPRWPE24Awf+gFed2KGPGyyJT8E2AAc7l5zWfLLegAAAAASUVORK5CYII=");

/***/ }),

/***/ 29675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NjVlMjMwYmYtMTI4OS00ODUyLWE3NjYtZDU2NzhlZjdkZWE5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTI5QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTI4QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWUyNmRlM2EtZTU1MS00YTNhLTg5ODUtNTliOTQzOTNkMTg0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY1ZTIzMGJmLTEyODktNDg1Mi1hNzY2LWQ1Njc4ZWY3ZGVhOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plwn9wAAAALTSURBVHjaxJhLSFRRGMe/sYLADDdJUlST7YapaNXTsVWa0QujqMCIoCg0CKPsaQ8rGpIwIiIX0TtyIT00KQiNaKJNaLbSLFoU2cKygWAW9f+653OuecVz7r1z+8NvHtx7zvznnO9853w3lHxMJpoESkAMREAYZKtrSdALOkE7aAHfTDoPaZpZCPaCUjBOs+8UeAjOgoROg6xRrs8ED8ALsNrACKl714CXoAlM92JmI3gDVpB3rQIdYJ0bM0fATZBD/mkiuAsOmpg5Co5RZhQCJ8F+HTObQQ1lXqecpsxuZha4RMGIR6hBpQZHM/Vggk5Pff1EV5FFymuRZIot9lwgevLaOIbOO+WZQtCm0wP/YNVFou4vztdPbyOqLDMytViljsGR2afTKtGFZHM4bSQWJdpear2LqhuMR6jKPk35YJlOq2gBUdkS6/P1aqLmOFFdhfXOIyJqSRiZ4ayeJ9PE3VzRbZn8hc2nh2h+ZHgczdhgu89szysH17JUvGgre/xwI3930FxPq6tIpinqx1rlkRHJVBooImam+WHm9tP056XzjJuHxUyuVyO9n61VNBiRC4y7yNE5QmgF9K669HdeZW7jh81892Jm5zlky850rKyNuepmQMx8dGukvpGo8bna2CZjh93qfqbFzFu3RuxxchmH0nC+azPvxEybVyNNJ5xzj4GeSQbm//MJjNEJVo4RmRqJk4IpRP0DQ++djQPJlhLtg/tU8HUsXrAwqRUsH61V66uhRlj/fhfxBqqpZjZiX9px+n+KO9VNXHQVB2yEy6CVTie9ClUVBqUfYPdIx85usCMgI785rCS/jFQd3MhgmWLXAXBHp26qUbVTpkbkEDhjUlEeB5vAT59jZD2odVNr3wJzwSMfjNwHc8A9L08helThX6g6TBkYSKmnD4tU4f/Br+czojyVi4psD4uk8OMpfQ+61H7HeasvEw+LAtEfAQYAv2+q6mxeFyYAAAAASUVORK5CYII=");

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