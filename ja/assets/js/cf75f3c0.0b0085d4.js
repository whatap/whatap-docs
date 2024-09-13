"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[40764],{

/***/ 65624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ agent_xos_settings_contentTitle),
  "default": () => (/* binding */ agent_xos_settings_MDXContent),
  frontMatter: () => (/* binding */ agent_xos_settings_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ agent_xos_settings_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/common-items/_db-agent-xos-settings-desc.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "데이터베이스 서버의 자원을 추가로 모니터링하려면 데이터베이스 서버에 별도의 XOS 에이전트를 실행해 데이터를 수집할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "x86 아키텍쳐 기반에서 동작하는 OS 환경에만 적용할 수 있습니다."
      })
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


;// CONCATENATED MODULE: ./docs/common-items/_db-xos-whatap-conf.mdx


const _db_xos_whatap_conf_frontMatter = {};
const _db_xos_whatap_conf_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _db_xos_whatap_conf_toc = [{
  "value": "whatap.conf 파일 설정",
  "id": "whatapconf-파일-설정",
  "level": 2
}];
function _db_xos_whatap_conf_createMdxContent(props) {
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
      id: "whatapconf-파일-설정",
      children: "whatap.conf 파일 설정"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["XOS 에이전트를 실행하기 전에 ", (0,jsx_runtime.jsx)(_components.em, {
        children: "whatap.conf"
      }), " 파일에 다음 옵션을 설정하세요."]
    }), (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "xos"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Int"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["XOS 에이전트 사용 여부를 설정하세요. 값이 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0"
          }), "인 경우 데이터를 수집하지 않습니다. 값을 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "1"
          }), " 또는 XOS 에이전트의 IP 주소를 입력하세요. IP 주소를 설정하면 해당 XOS 에이전트로부터만 데이터를 수집합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "xos_port"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "String"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "3002"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "XOS 에이전트와 통신할 포트를 설정하세요. XOS 에이전트와는 UDP로 통신합니다. 해당 포트에 방화벽을 설정했다면 UDP 통신을 위해 방화벽을 해제하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "xos_cpu_iowait"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Int"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "1"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["XOS 에이전트로부터 수집한 CPU 사용률에 iowait의 값을 포함할 수 있습니다. 값을 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "1"
          }), "로 설정하면 iowait를 포함하고, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0"
          }), "으로 설정하면 iowait를 포함하지 않습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "xos_mem_buffcache"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Int"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["XOS 에이전트로부터 수집한 메모리 사용률에 buffcache의 값을 포함할 수 있습니다. 값을 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "1"
          }), "로 설정하면 buffcache를 포함하고, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0"
          }), "으로 설정하면 buffcache를 포함하지 않습니다."]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function _db_xos_whatap_conf_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_db_xos_whatap_conf_createMdxContent, {
      ...props
    })
  }) : _db_xos_whatap_conf_createMdxContent(props);
}


;// CONCATENATED MODULE: ./docs/common-items/_db-xos-conf.mdx


const _db_xos_conf_frontMatter = {};
const _db_xos_conf_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _db_xos_conf_toc = [{
  "value": "xos.conf 파일 설정",
  "id": "xosconf-파일-설정",
  "level": 2
}];
function _db_xos_conf_createMdxContent(props) {
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
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, InDoc} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "xosconf-파일-설정",
      children: "xos.conf 파일 설정"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "xos"
      }), " 디렉터리를 데이터베이스 서버로 복사한 다음, ", (0,jsx_runtime.jsx)(_components.em, {
        children: "xos.conf"
      }), " 파일에 에이전트 서버 정보를 입력하고 추가 옵션을 설정하세요."]
    }), (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "dbx_ip"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "String"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DBX 에이전트를 설치한 서버의 IP 주소를 입력하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "dbx_port"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "String"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "3002"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DBX 에이전트와 통신할 포트를 설정하세요. DBX 에이전트와는 UDP로 통신합니다. 해당 포트에 방화벽을 설정했다면 UDP 통신을 위해 방화벽을 해제하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "cpu_limit"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Int"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["limit 설정값보다 큰 값을 가진 프로세스 정보를 수집합니다. 1/100% 단위로 1.23%인 경우 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "123"
          }), "으로 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "mem_limit"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Int"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "10240"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "limit 설정값보다 큰 값을 가진 프로세스 정보를 수집합니다. K bytes 단위로 10240은 10M bytes입니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "disk_usage_interval"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Second"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "60"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["인스턴스별 디스크 사용률과 사용 가능 크기, 전체 크기 정보를 표시합니다. 값이 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0"
          }), "이면 디스크 사용률을 수집하지 않습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "process"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "String"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "프로세스의 실행 상태를 모니터링할 수 있습니다. 옵션값으로 프로세스 이름을 입력하세요. 쉼표(,)를 구분자로 이용해 여러 개를 등록할 수 있습니다."
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title='xos.conf'",
            children: "process={process_name}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "예를 들어, top과 lock.sh 프로세스를 감시 대상으로 설정하려면 다음과 같이 옵션을 설정하세요."
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title='xos.conf'",
            children: "process=top,lock.sh\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "process"
            }), " 옵션을 이용해 데이터베이스에서 실행 중인 프로세스가 종료될 경우 경고 알림을 보낼 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "../best-practice-guides/set-db-metric-warning-notice",
              children: "다음 문서"
            }), "를 참조하세요."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "iplist_interval"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Second"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "데이터베이스 서버의 IP 목록을 수집할 수 있습니다. 초 단위(최소 3초)로 시간 간격(interval)을 설정해야 수집할 수 있습니다."
        }), "\n"]
      }), "\n"]
    }), (0,jsx_runtime.jsx)(InDoc, {
      product: "postgresql,mysql,redis,mongodb,oracle,altibase",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "file"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "type",
              children: "String"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_log",
              className: "uitext"
            }), " 메뉴(", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_logTail",
              className: "uitext"
            }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_logExplorer",
              className: "uitext"
            }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_logSearch",
              className: "uitext"
            }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_logSetting",
              className: "uitext"
            }), ")를 이용하려면 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "file"
            }), " 옵션에 모니터링하려는 로그 파일명의 절대 경로로 입력하세요."]
          }), "\n", (0,jsx_runtime.jsx)(InDoc, {
            product: "postgresql",
            children: (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-ini",
                metastring: "title='xos.conf'",
                children: "file=/opt/postgresql/logs/postgresql.log\nfile1=/opt/postgresql/data/logs/pg10/postgresql-Sun.log\nfile2=/opt/postgresql/data/logs/pg10/postgresql-Mon.log\nfile3=/opt/postgresql/data/logs/pg10/postgresql-Tue.log\n"
              })
            })
          }), "\n", (0,jsx_runtime.jsx)(InDoc, {
            product: "mysql",
            children: (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-ini",
                metastring: "title='xos.conf'",
                children: "file=/var/log/mysqld.log\nfile1=/var/log/mysql_history.log\nfile2=/var/lib/mysql/dbx-database-slow.log\n"
              })
            })
          }), "\n", (0,jsx_runtime.jsx)(InDoc, {
            product: "redis",
            children: (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-ini",
                metastring: "title='xos.conf'",
                children: "file=/var/log/redis.log\n"
              })
            })
          }), "\n", (0,jsx_runtime.jsx)(InDoc, {
            product: "mongodb",
            children: (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-ini",
                metastring: "title='xos.conf'",
                children: "file=/var/log/mongodb/mongodb.log\n"
              })
            })
          }), "\n", (0,jsx_runtime.jsx)(InDoc, {
            product: "oracle",
            children: (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-ini",
                metastring: "title='xos.conf'",
                children: "file=/home/oracle/diag/rdbms/ora18/ORA18/trace/alert_ORA18.log\n"
              })
            })
          }), "\n", (0,jsx_runtime.jsx)(InDoc, {
            product: "altibase",
            children: (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-ini",
                metastring: "title='xos.conf'",
                children: "file=/home/altibase/altibase-server-x.y.z/trc/altibase_boot.log\n"
              })
            })
          }), "\n"]
        }), "\n"]
      })
    })]
  });
}
function _db_xos_conf_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_db_xos_conf_createMdxContent, {
      ...props
    })
  }) : _db_xos_conf_createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./docs/common-items/_db-run-xos.mdx


const _db_run_xos_frontMatter = {};
const _db_run_xos_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _db_run_xos_toc = [{
  "value": "XOS 에이전트 실행",
  "id": "xos-에이전트-실행",
  "level": 2
}];
function _db_run_xos_createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    section: "section",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "xos-에이전트-실행",
      children: "XOS 에이전트 실행"
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: "데이터베이스 서버에서 다음 배치 파일을 실행하세요."
    }), (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "$ ./start.sh\n\n# 또는\n\n$ ./startd.sh # 백그라운드로 실행할 경우\n"
      })
    })]
  });
}
function _db_run_xos_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_db_run_xos_createMdxContent, {
      ...props
    })
  }) : _db_run_xos_createMdxContent(props);
}


;// CONCATENATED MODULE: ./docs/tibero/agent-xos-settings.mdx


const agent_xos_settings_frontMatter = {
	id: 'agent-xos-settings',
	title: 'XOS 에이전트 설정',
	description: '데이터베이스 프로세스 모니터링 설정에 대해 알아봅니다.',
	keywords: [
		'Tibero',
		'데이터베이스',
		'에이전트',
		'XOS'
	],
	isTranslationMissing: true
};
const agent_xos_settings_contentTitle = undefined;
const metadata = {
  "id": "tibero/agent-xos-settings",
  "title": "XOS 에이전트 설정",
  "description": "데이터베이스 프로세스 모니터링 설정에 대해 알아봅니다.",
  "source": "@site/docs/tibero/agent-xos-settings.mdx",
  "sourceDirName": "tibero",
  "slug": "/tibero/agent-xos-settings",
  "permalink": "/ja/tibero/agent-xos-settings",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/tibero/agent-xos-settings.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "agent-xos-settings",
    "title": "XOS 에이전트 설정",
    "description": "데이터베이스 프로세스 모니터링 설정에 대해 알아봅니다.",
    "keywords": [
      "Tibero",
      "데이터베이스",
      "에이전트",
      "XOS"
    ],
    "isTranslationMissing": true
  },
  "sidebar": "tiberoSidebar",
  "previous": {
    "title": "DBX 에이전트 설정",
    "permalink": "/ja/tibero/agent-dbx-settings"
  },
  "next": {
    "title": "管理",
    "permalink": "/ja/tibero/agent-manage"
  }
};
const assets = {

};







const agent_xos_settings_toc = [...toc, ..._db_xos_whatap_conf_toc, ..._db_xos_conf_toc, ..._db_run_xos_toc];
function agent_xos_settings_createMdxContent(props) {
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(MDXContent, {}), "\n", "\n", (0,jsx_runtime.jsx)(_db_xos_whatap_conf_MDXContent, {}), "\n", "\n", (0,jsx_runtime.jsx)(_db_xos_conf_MDXContent, {}), "\n", "\n", (0,jsx_runtime.jsx)(_db_run_xos_MDXContent, {})]
  });
}
function agent_xos_settings_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(agent_xos_settings_createMdxContent, {
      ...props
    })
  }) : agent_xos_settings_createMdxContent(props);
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