"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[73586],{

/***/ 5352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ after_install_agent_contentTitle),
  "default": () => (/* binding */ after_install_agent_MDXContent),
  frontMatter: () => (/* binding */ after_install_agent_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ after_install_agent_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/common-items/_db-after-install-agent.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "에이전트 로그 확인하기",
  "id": "에이전트-로그-확인하기",
  "level": 2
}, {
  "value": "에이전트 프로세스 확인하기",
  "id": "에이전트-프로세스-확인하기",
  "level": 2
}, {
  "value": "로그 확인하기",
  "id": "로그-확인하기",
  "level": 2
}, {
  "value": "모니터링 확인하기",
  "id": "모니터링-확인하기",
  "level": 2
}, {
  "value": "에이전트 구성",
  "id": "agent-architecture",
  "level": 2
}, {
  "value": "에이전트 구성 파일",
  "id": "에이전트-구성-파일",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
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
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {ImgLang} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "데이터베이스 모니터링 설치를 모두 완료했습니다. 설치 후 확인 사항을 점검하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "에이전트-로그-확인하기",
        children: "에이전트 로그 확인하기"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["데이터베이스 에이전트를 설치한 경로에서 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "start.sh"
        }), " 쉘 스크립트 파일 또는 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "start.bat"
        }), " 배치 파일을 실행하세요. 에이전트를 실행하면 데이터베이스의 모니터링 정보를 수집하기 시작합니다. 에이전트 로그를 확인하여 에이전트의 정상 시작 여부를 확인합니다."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='start.sh'",
          children: "$ ./start.sh\n\n _      ____       ______\n| | /| / / /  ___ /_  __/__ ____\n| |/ |/ / _ \\/ _ `// / / _ `/ _ \\\n|__/|__/_//_/\\_,_//_/  \\_,_/ .__/\n                          /_/\nJust Tap, Always Monitoring\nWhaTap DBX version 1.3.9 20181120\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "에이전트-프로세스-확인하기",
        children: "에이전트 프로세스 확인하기"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "다음 명령어를 통해 동작 중인 와탭 DBX 에이전트 프로세스를 확인할 수 있습니다."
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='SH'",
          children: "$ ps –ef | grep dbx\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "로그-확인하기",
        children: "로그 확인하기"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["서비스를 다시 시작할 때 정상적으로 로그가 뜨면 에이전트가 성공적으로 설치된 걸 확인할 수 있습니다. 에이전트 등록 후 수집과 관련된 로그는 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "$WHATAP_HOME/logs"
        }), " 경로에서 확인할 수 있습니다. 에이전트가 정상 동작하면 해당 날짜에 다음과 같은 로그 파일을 확인할 수 있습니다."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["whatap-DBX-", (0,jsx_runtime.jsx)(_components.code, {
            children: "OID"
          }), "-", (0,jsx_runtime.jsx)(_components.code, {
            children: "DATE"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["whatap-boot-", (0,jsx_runtime.jsx)(_components.code, {
            children: "DATE"
          }), ".log"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "모니터링-확인하기",
        children: "모니터링 확인하기"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["서버에서 정상적으로 로그가 올라온 것을 확인한 다음 콘솔에 정상 등록 여부를 확인하려면 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://service.whatap.io",
          children: "와탭 모니터링 서비스"
        }), " 초기 화면으로 이동하세요. 확인하려는 프로젝트를 선택한 다음 화면 왼쪽에 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "관리"
          })
        }), " > ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "에이전트 목록"
          })
        }), " 메뉴를 선택하세요. ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "에이전트 목록"
          })
        }), "에서 데이터베이스 서버의 이름을 확인할 수 있습니다."]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "db-check-monitoring-agent-lists.png",
        desc: "데이터베이스 에이전트 목록"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["데이터베이스명은 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{type}"
        }), "-", (0,jsx_runtime.jsx)(_components.code, {
          children: "{ip2}"
        }), "-", (0,jsx_runtime.jsx)(_components.code, {
          children: "{ip3}"
        }), "-", (0,jsx_runtime.jsx)(_components.code, {
          children: "{port}"
        }), " 형식의 식별 ID를 부여합니다."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "agent-architecture",
        children: "에이전트 구성"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "에이전트 구성 요소에 대해 알아봅니다."
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "agent-architecture.png",
        desc: "에이전트 구성도"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "수집 서버"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "에이전트가 수집한 데이터베이스 성능 데이터를 수집 및 저장, 통계 정보 추출하고 이를 사용자에 효율적인 방법으로 제공합니다. 수집 서버는 지역(Region) 별로 설정이 가능합니다. 지역(Region)별로 수집 서버의 주소가 다르게 할당합니다. 사용자가 선택한 지역(Region)에 따라 수집 서버 주소는 다를 수 있습니다. 프로젝트를 생성할 때 지역(Region)도 함께 설정합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "기본 에이전트"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Query 기반으로 성능 데이터를 수집하여 서버로 전송합니다. 모니터링 대상 데이터베이스 서버에 직접 에이전트를 설치하지 않고도 모니터링이 가능합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "부가 에이전트"
            }), "(", (0,jsx_runtime.jsx)(_components.strong, {
              children: "XOS Agent"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "agent-xos-architecture.png",
            desc: "부가 에이전트 구성도(XOS Agent)"
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "XOS 에이전트는 데이터베이스 서버의 프로세스 사용량을 모니터링할 수 있는 부가 옵션 에이전트입니다. 데이터베이스 서버의 프로세스 사용량을 모니터링하고 싶다면 데이터베이스 서버에 별도의 에이전트를 띄워 데이터를 수집할 수 있습니다."
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsx)(_components.p, {
              children: "XOS 에이전트는 x86 아키텍쳐 기반에서 동작하는 OS 환경에만 적용할 수 있습니다."
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "네트워크"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "기본 에이전트: 와탭 모니터링 에이전트는 수집한 모니터링 정보를 와탭 수집 서버에 전송하기 위해 외부 통신(TCP) 6600 포트를 사용합니다."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["부가 에이전트: 에이전트를 설치한 서버와 데이터베이스 서버 사이에 외부 통신(UDP) 3002 포트를 사용합니다. 내부 포트가 충돌이 나는 경우 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "dbx_port"
                }), " 옵션을 통해 포트를 변경할 수 있습니다."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "에이전트-구성-파일",
        children: "에이전트 구성 파일"
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "파일명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "설명"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "whatap.conf"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "데이터베이스 서버의 데이터를 수집하는 수집 서버의 주소와 서버의 프로젝트 액세스 키를 입력하는 파일입니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "alert/alert.conf"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "수집하는 모니터링 항목에 임계치를 설정하는 파일입니다. 임계치를 초과하는 경우 알림 이벤트가 발생합니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "scripts/"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "원격으로 sql 스크립트를 실행할 수 있는 스크립트들을 모아둔 디렉터리입니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "ps.sh"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "프로세스 아이디를 읽어 오는 스크립트입니다. 에이전트 프로세스를 종료할 때 해당 아이디를 참고합니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "stop.sh"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "에이전트 프로세스를 종료할 때 사용하는 스크립트입니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "uid.sh (uid.bat)"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["데이터베이스 접속 정보를 조합하여 암호화된 UID를 생성하기 위한 쉘 스크립트 파일입니다. ", (0,jsx_runtime.jsx)(_components.em, {
                children: "db.user"
              }), " 파일을 생성합니다. 최초 한 번만 설정해두면 암호화된 UID를 통해 모니터링 대상 데이터베이스 서버로부터 데이터 수집을 진행합니다.", (0,jsx_runtime.jsx)("br", {}), "모니터링용 계정 생성에 관한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                href: "install-agent#uid",
                children: "다음 문서"
              }), "를 참조하세요."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "start.sh (start.bat)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "에이전트 실행을 위한 쉘 스크립트 파일입니다. 에이전트를 실행하면 데이터베이스 서버의 모니터링 정보를 수집하기 시작합니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "startd.sh (startd.bat)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "에이전트 실행을 위한 쉘 스크립트 파일로 백그라운드로 실행할 수 있습니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              children: ["whatap.agent.dbx-", (0,jsx_runtime.jsx)(_components.code, {
                children: "VERSION"
              }), ".jar"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Tracer 프로그램, 데이터베이스 서버의 정보를 수집하고, 수집한 정보를 서버로 전송하는 프로그램입니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "jdbc"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "데이터베이스 서버 연결을 위해 참조하는 라이브러리들을 모아두는 디렉터리입니다. 에이전트와 데이터베이스 서버의 연결을 위한 라이브러리를 직접 다운로드해 java의 classpath 옵션에 경로를 설정하여 사용합니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "xos"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "데이터베이스 서버의 프로세스 사용량을 모니터링할 수 있는 부가 옵션 에이전트가 포함된 디렉터리입니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "xos/xos.conf"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "데이터베이스 서버의 프로세스 사용량 데이터를 수집 및 데이터 전송을 위한 에이전트 서버의 주소와 통신 포트를 입력하는 파일입니다."
            })]
          })]
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


;// CONCATENATED MODULE: ./docs/altibase-v1/after-install-agent.mdx


const after_install_agent_frontMatter = {
	id: 'after-install-agent',
	title: '설치 점검 사항',
	description: '데이터베이스 모니터링 설치를 모두 완료했습니다. 설치 후 확인 사항을 점검하세요.',
	keywords: [
		'Altibase',
		'데이터베이스 모니터링',
		'에이전트'
	],
	isTranslationMissing: true
};
const after_install_agent_contentTitle = undefined;
const metadata = {
  "id": "altibase-v1/after-install-agent",
  "title": "설치 점검 사항",
  "description": "데이터베이스 모니터링 설치를 모두 완료했습니다. 설치 후 확인 사항을 점검하세요.",
  "source": "@site/docs/altibase-v1/after-install-agent.mdx",
  "sourceDirName": "altibase-v1",
  "slug": "/altibase-v1/after-install-agent",
  "permalink": "/ja/altibase-v1/after-install-agent",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/altibase-v1/after-install-agent.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "after-install-agent",
    "title": "설치 점검 사항",
    "description": "데이터베이스 모니터링 설치를 모두 완료했습니다. 설치 후 확인 사항을 점검하세요.",
    "keywords": [
      "Altibase",
      "데이터베이스 모니터링",
      "에이전트"
    ],
    "isTranslationMissing": true
  },
  "sidebar": "altibasev1Sidebar",
  "previous": {
    "title": "에이전트 설치",
    "permalink": "/ja/altibase-v1/install-agent"
  },
  "next": {
    "title": "설치 문제 해결",
    "permalink": "/ja/altibase-v1/troubleshooting"
  }
};
const assets = {

};




const after_install_agent_toc = [...toc];
function after_install_agent_createMdxContent(props) {
  return (0,jsx_runtime.jsx)(MDXContent, {});
}
function after_install_agent_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(after_install_agent_createMdxContent, {
      ...props
    })
  }) : after_install_agent_createMdxContent(props);
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