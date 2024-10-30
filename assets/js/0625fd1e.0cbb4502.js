"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[82550],{

/***/ 74370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ log_contentTitle),
  "default": () => (/* binding */ log_MDXContent),
  frontMatter: () => (/* binding */ log_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ log_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/common-items/_import_k8s-log-filter.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));



/*

### 쿠버네티스 에이전트 로그 필터

#### 로그 네이밍 규칙

쿠버네티스 로그는 컨테이너 기준으로 수집됩니다. 노드의 /var/log/containers/ 경로 하위에 다음과 같은 네이밍 규칙에 따라 생성됩니다.

```bash
<podName>_<namespace>_<containerName>-<containerId>.log
```


#### 로그 필터 옵션

* **log_filter_enabled** <span class='type'>bool</span>

기본값 `false`

로그 필터 사용 여부를 설정합니다.

* **log_fillter_allow_list** <span class='type'>list</span>

허용할 로그의 리스트를 설정합니다. 필터링 적용 시 포함할 항목을 의미합니다.

* **log_fillter_deny_list** <span class='type'>list</span>

제외할 로그의 리스트를 설정합니다. 필터링 적용 시 제외할 항목을 의미합니다.


#### 로그 필터 동작

#### 로그 필터 예시

### 컨테이너 표준 출력 로그 필터

컨테이너 표준 출력(containerStdOut) 로그에서 필요한 정보를 선별하기 위한 필터링 옵션을 안내합니다. 필터링을 통해 허용하거나 제외할 로그를 설정할 수 있습니다.

#### 에이전트 설정

<Cmdname sid="side_agentSetting" className="uitext" />

#### 컨테이너 표준 출력 로그 필터 옵션

* **log_filter_enabled** <span class='type'>bool</span>

기본값 `false`

로그 필터 사용 여부를 설정합니다.

* **log_fillter_allow_list** <span class='type'>list</span>

허용할 로그의 리스트를 설정합니다. 필터링 적용 시 포함할 항목을 의미합니다.

* **log_fillter_deny_list** <span class='type'>list</span>

제외할 로그의 리스트를 설정합니다. 필터링 적용 시 제외할 항목을 의미합니다.

*/


const toc = [{
  "value": "쿠버네티스 로그 필터 설정",
  "id": "쿠버네티스-로그-필터-설정",
  "level": 2
}, {
  "value": "로그 네이밍 규칙",
  "id": "로그-네이밍-규칙",
  "level": 3
}, {
  "value": "로그 필터 옵션",
  "id": "로그-필터-옵션",
  "level": 3
}, {
  "value": "로그 필터 동작",
  "id": "로그-필터-동작",
  "level": 3
}, {
  "value": "로그 필터 예시",
  "id": "로그-필터-예시",
  "level": 3
}, {
  "value": "단일 네임스페이스 로그 수집",
  "id": "단일-네임스페이스-로그-수집",
  "level": 4
}, {
  "value": "다중 네임스페이스 로그 수집",
  "id": "다중-네임스페이스-로그-수집",
  "level": 4
}, {
  "value": "특정 단어를 포함하는 Pod 제외",
  "id": "특정-단어를-포함하는-pod-제외",
  "level": 4
}, {
  "value": "특정 단어를 포함하는 Pod 로그 수집",
  "id": "특정-단어를-포함하는-pod-로그-수집",
  "level": 4
}, {
  "value": "다중 네임스페이스 로그 수집 및 특정 단어 포함하는 Pod 제외",
  "id": "다중-네임스페이스-로그-수집-및-특정-단어-포함하는-pod-제외",
  "level": 4
}, {
  "value": "컨테이너 이름 내 특정 단어로 시작하는 컨테이너 로그 제외",
  "id": "컨테이너-이름-내-특정-단어로-시작하는-컨테이너-로그-제외",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
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
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "쿠버네티스-로그-필터-설정",
        children: "쿠버네티스 로그 필터 설정"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["홈 화면 > 프로젝트 선택 > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_management",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_agentSetting",
          className: "uitext"
        })]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["쿠버네티스 로그에서 필요한 정보를 선별하기 위한 필터링 옵션을 안내합니다. 필터링을 통해 허용하거나 제외할 로그를 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_agentSetting",
          className: "uitext"
        }), " 메뉴에서 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "write_options",
          className: "uitext"
        }), " 방식으로 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "direct_input",
          className: "uitext"
        }), "을 선택하세요."]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "k8s-log-filter-settings.png",
        desc: "쿠버네티스 로그 필터 설정"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "로그-네이밍-규칙",
        children: "로그 네이밍 규칙"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["쿠버네티스 로그는 컨테이너 기준으로 수집됩니다. 노드의 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "/var/log/containers/"
        }), " 경로 하위에 다음과 같은 네이밍 규칙에 따라 생성됩니다."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "<podName>_<namespace>_<containerName>-<containerId>.log\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "로그-필터-옵션",
        children: "로그 필터 옵션"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "log_filter_enabled"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "type",
              children: "bool"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "로그 필터 사용 여부를 설정합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "log_fillter_allow_list"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "type",
              children: "list"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "허용할 로그의 리스트를 설정합니다. 필터링 적용 시 포함할 항목을 의미합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "log_fillter_deny_list"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "type",
              children: "list"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "제외할 로그의 리스트를 설정합니다. 필터링 적용 시 제외할 항목을 의미합니다."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "로그-필터-동작",
        children: "로그 필터 동작"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "log_filter_enabled"
        }), " 옵션이 활성화 된 경우에만 로그 필터가 동작합니다. 해당 옵션의 값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "로 설정된 상태에서 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "log_fillter_allow_list"
        }), " 및 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "log_fillter_deny_list"
        }), "를 통해 로그를 선택적으로 수집할 수 있습니다."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["로그 필터는 블랙리스트 기반으로 작동합니다. 예를 들어 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "log_filter_enabled"
        }), " 활성화 후 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "log_fillter_allow_list"
        }), " 옵션에 추가할 항목을 설정하지 않을 경우 기본적으로 모든 컨테이너의 로그 수집이 차단됩니다."]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "또한 로그 필터는 allow 규칙 보다 deny 규칙의 우선 순위가 높습니다. 동일한 항목이 allow와 deny에 모두 설정된 경우, deny 규칙이 우선 적용되어 해당 로그는 수집되지 않습니다."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,jsx_runtime.jsx)(_components.h3, {
        id: "로그-필터-예시",
        children: "로그 필터 예시"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "단일-네임스페이스-로그-수집",
        children: "단일 네임스페이스 로그 수집"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "허용"
          }), " ", (0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "log_filter_allow_list"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "*_infra_*"
          })]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "infra"
        }), " 네임스페이스에 존재하는 모든 컨테이너가 수집 대상으로 특정됩니다."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "다중-네임스페이스-로그-수집",
        children: "다중 네임스페이스 로그 수집"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "허용"
          }), " ", (0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "log_filter_allow_list"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "*_infra_*, *_monitoring_*"
          })]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "infra"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "monitoring"
        }), " 네임스페이스에 존재하는 모든 컨테이너가 수집 대상으로 특정됩니다."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "특정-단어를-포함하는-pod-제외",
        children: "특정 단어를 포함하는 Pod 제외"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "허용"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "log_filter_allow_list"
              })
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*_*_*"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "제외"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "log_filter_deny_list"
              })
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*prod*_*_*"
            })]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["모든 컨테이너가 수집 대상으로 특정되지만, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "podName"
        }), "에 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "prod"
        }), "가 포함된 로그는 제외됩니다."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "특정-단어를-포함하는-pod-로그-수집",
        children: "특정 단어를 포함하는 Pod 로그 수집"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "허용"
          }), " ", (0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "log_filter_allow_list"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "*prod*_*_*"
          })]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "podName"
        }), "에 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "prod"
        }), " 가 포함된 파드의 로그만 수집됩니다."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "다중-네임스페이스-로그-수집-및-특정-단어-포함하는-pod-제외",
        children: "다중 네임스페이스 로그 수집 및 특정 단어 포함하는 Pod 제외"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "허용"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "log_filter_allow_list"
              })
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*_infra_*, *_monitoring_*"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "제외"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "log_filter_deny_list"
              })
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*prod*_*_*"
            })]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "infra"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "monitoring"
        }), " 네임스페이스의 로그가 수집되고, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "podName"
        }), "에 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "prod"
        }), "가 포함된 로그는 제외됩니다."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "컨테이너-이름-내-특정-단어로-시작하는-컨테이너-로그-제외",
        children: "컨테이너 이름 내 특정 단어로 시작하는 컨테이너 로그 제외"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "허용"
          }), " ", (0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "log_filter_allow_list"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "*_*_db-*"
          })]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["모든 네임스페이스에서 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "containerName"
        }), "이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "db"
        }), "로 시작하는 컨테이너의 로그는 제외됩니다."]
      }), (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["컨테이너 표준 출력(", (0,jsx_runtime.jsx)(_components.strong, {
            children: "containerStdOut"
          }), ") 로그 필터링 역시 동일하게 동작합니다."]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./docs/kubernetes/log.mdx


const log_frontMatter = {
	id: 'log',
	title: '로그',
	description: '쿠버네티스 관련 다양한 로그를 확인할 수 있습니다.',
	keywords: [
		'쿠버네티스',
		'쿠버네티스 모니터링',
		'로그'
	],
	isTranslationMissing: false
};
const log_contentTitle = undefined;
const metadata = {
  "id": "kubernetes/log",
  "title": "로그",
  "description": "쿠버네티스 관련 다양한 로그를 확인할 수 있습니다.",
  "source": "@site/docs/kubernetes/log.mdx",
  "sourceDirName": "kubernetes",
  "slug": "/kubernetes/log",
  "permalink": "/whatap-docs/kubernetes/log",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/kubernetes/log.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "log",
    "title": "로그",
    "description": "쿠버네티스 관련 다양한 로그를 확인할 수 있습니다.",
    "keywords": [
      "쿠버네티스",
      "쿠버네티스 모니터링",
      "로그"
    ],
    "isTranslationMissing": false
  },
  "sidebar": "kubeSidebar",
  "previous": {
    "title": "메트릭스 이상 탐지",
    "permalink": "/whatap-docs/kubernetes/metrics-detect-anormal"
  },
  "next": {
    "title": "보고서",
    "permalink": "/whatap-docs/kubernetes/report-intro"
  }
};
const assets = {

};




const log_toc = [...toc, {
  "value": "라이브 테일",
  "id": "라이브-테일",
  "level": 2
}, {
  "value": "로그 트렌드",
  "id": "로그-트렌드",
  "level": 2
}, {
  "value": "로그 검색",
  "id": "로그-검색",
  "level": 2
}, {
  "value": "로그 설정하기",
  "id": "로그-설정하기",
  "level": 2
}];
function log_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    p: "p",
    section: "section",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "로그"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "쿠버네티스 관련 다양한 로그를 확인할 수 있습니다. 와탭 쿠버네티스에서 제공하는 모니터링 카테고리는 다음과 같습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "카테고리"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "설명"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#K8sEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)("ul", {
              children: [(0,jsx_runtime.jsx)("li", {
                children: "쿠버네티스에서 발생하는 이벤트가 저장된 로그"
              }), (0,jsx_runtime.jsx)("li", {
                children: "사용자 설정과 무관하게 기본 생성 "
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#WhatapEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)("ul", {
              children: [(0,jsx_runtime.jsx)("li", {
                children: "와탭 이벤트 설정에 의해 발생한 이벤트가 저장된 로그"
              }), (0,jsx_runtime.jsx)("li", {
                children: "사용자 설정과 무관하게 기본 생성"
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "containerStdout"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)("ul", {
              children: [(0,jsx_runtime.jsx)("li", {
                children: "컨테이너 Standard Out 로그"
              }), (0,jsx_runtime.jsx)("li", {
                children: "사용자 설정 시 생성"
              }), (0,jsx_runtime.jsxs)("li", {
                children: ["노드 에이전트에 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "logsink_enabled=true"
                }), " 설정 추가 시"]
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "AppLog"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)("ul", {
              children: [(0,jsx_runtime.jsx)("li", {
                children: "컨테이너 내 애플리케이션 로그"
              }), (0,jsx_runtime.jsx)("li", {
                children: "사용자 설정 시 생성"
              }), (0,jsx_runtime.jsxs)("li", {
                children: ["애플리케이션 에이전트에 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "logsink_enabled=true"
                }), " 설정 추가 시"]
              })]
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "설정에 따라 중복된 로그 내용이 저장될 수 있으니 반드시 중복 여부를 확인하세요."
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {}), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "라이브-테일",
        children: "라이브 테일"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["홈 화면 > 프로젝트 선택 > ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "로그"
          })
        }), " > ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "라이브 테일"
          })
        })]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["와탭 쿠버네티스 모니터링 카테고리의 내용을 실시간으로 확인할 수 있습니다. ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "라이브 테일"
          })
        }), "에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../log/log-lt",
          children: "다음 문서"
        }), "를 참조하세요."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "로그-트렌드",
        children: "로그 트렌드"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["홈 화면 > 프로젝트 선택 > ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "로그"
          })
        }), " > ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "로그 트렌드"
          })
        })]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["시간 범위를 설정하여 저장된 로그 추이를 확인할 수 있습니다. ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "로그 트렌드"
          })
        }), "에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../log/log-exp",
          children: "다음 문서"
        }), "를 참조하세요."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "로그-검색",
        children: "로그 검색"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["홈 화면 > 프로젝트 선택 > ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "로그"
          })
        }), " > ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "로그 검색"
          })
        })]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "시간 범위를 설정하여 저장된 로그의 내용을 검색할 수 있습니다. 예를 들어, 특정 컨테이너의 Standard Out 로그를 확인하거나, Deployment에 속하는 모든 컨테이너의 Standard Out 로그를 한번에 확인할 수 있습니다. 특정 키워드를 하이라이트하여 표시할 수도 있습니다."
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "로그 트렌드"
          })
        }), "에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../log/log-search",
          children: "다음 문서"
        }), "를 참조하세요."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "로그-설정하기",
        children: "로그 설정하기"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["홈 화면 > 프로젝트 선택 > ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "로그"
          })
        }), " > ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "설정"
          })
        })]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["로그 활성화를 포함한 각종 로그 관련 설정을 할 수 있습니다. 로그 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../log/log-setting",
          children: "다음 문서"
        }), "를 참조하세요."]
      })]
    })]
  });
}
function log_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(log_createMdxContent, {
      ...props
    })
  }) : log_createMdxContent(props);
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