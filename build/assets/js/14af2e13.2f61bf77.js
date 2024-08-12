"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[88622],{

/***/ 6609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ agent_troubleshooting_contentTitle),
  "default": () => (/* binding */ agent_troubleshooting_MDXContent),
  frontMatter: () => (/* binding */ agent_troubleshooting_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ agent_troubleshooting_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/common-items/_php-extension-module-service.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "PHP 확장 모듈 및 whatap-php 서비스 수동 설정",
  "id": "extension-modul-manual-setting",
  "level": 2
}, {
  "value": "whatap.ini 생성",
  "id": "whatapini-생성",
  "level": 3
}, {
  "value": "PHP 명령어(CLI) 경로 확인",
  "id": "check-php-cli-path",
  "level": 3
}, {
  "value": "whatap-php 서비스 환경 변수 설정",
  "id": "whatap-php-서비스-환경-변수-설정",
  "level": 3
}, {
  "value": "PHP API 버전 확인",
  "id": "php-api-버전-확인",
  "level": 3
}, {
  "value": "PHP ZTS(Zend Thread Safe) 지원 여부 확인",
  "id": "php-ztszend-thread-safe-지원-여부-확인",
  "level": 3
}, {
  "value": "PHP 확장 모듈 경로 확인 및 설정",
  "id": "php-확장-모듈-경로-확인-및-설정",
  "level": 3
}, {
  "value": "PHP 확장 모듈 경로 확인",
  "id": "check-php-extension-module",
  "level": 4
}, {
  "value": "PHP 확장 모듈 설정",
  "id": "php-확장-모듈-설정",
  "level": 4
}, {
  "value": "whatap-php 서비스 환경 변수 설정",
  "id": "whatap-php-서비스-환경-변수-설정-1",
  "level": 4
}, {
  "value": "whatap.ini 설정",
  "id": "php-ini-path",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
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
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "extension-modul-manual-setting",
        children: "PHP 확장 모듈 및 whatap-php 서비스 수동 설정"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["PHP 확장 모듈과 whatap-php 서비스 설치 및 선택 설치(", (0,jsx_runtime.jsx)(_components.em, {
          children: "install.sh"
        }), ")가 정상적으로 이루어지지 않을 경우 수동으로 설정하는 방법을 설명합니다. PHP 컴파일 설치 등의 이유로 환경 정보를 확인할 수 없는 경우 사용하세요."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "whatapini-생성",
        children: "whatap.ini 생성"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "$ cp /usr/whatap/php/template.ini /usr/whatap/php/whatap.ini\n$ vi /usr/whatap/php/whatap.ini\n\n# 상단에 내용 추가\n; Enable whatap extension module\nextension=whatap.so\nwhatap.license=            # 발급된 액세스 키\nwhatap.server.host=        # 발급된 서버 IP\nwhatap.app_name=           # 웹서버 구분 APHP, FPHP (apache : APHP, php-fpm : FPHP)\nwhatap.app_process_name=   # apache, php-fpm 의 프로세스 이름(httpd,php-fpm)\n"
        })
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "설정"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "설명"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "whatap.license"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "프로젝트 메뉴"
                })
              }), " > ", (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "관리"
                })
              }), " > ", (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "에이전트 설치"
                })
              }), " 페이지에서 발급된 액세스 키를 확인할 수 있습니다."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "whatap.server.host"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "프로젝트 메뉴"
                })
              }), " > ", (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "관리"
                })
              }), " > ", (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "에이전트 설치"
                })
              }), " 페이지에서 발급된 서버 IP를 확인할 수 있습니다."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "whatap.app_name"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Apache 서버는 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "APHP"
              }), ", php-fpm 은 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "FPHP"
              }), "를 사용합니다."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "whatap.app_process_name"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Apache 또는 php-fpm 의 실행 프로세스 이름 설정으로 정확한 프로세스명 입력하면, 해당 프로세스에 대한 사용 메모리를 수집합니다. 예시로 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "httpd"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "apache2"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "php-fpm"
              }), " 등을 들 수 있습니다."]
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "check-php-cli-path",
        children: "PHP 명령어(CLI) 경로 확인"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "$ which php\n\n/usr/bin/php\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "whatap-php-서비스-환경-변수-설정",
        children: "whatap-php 서비스 환경 변수 설정"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "$WHATAP_PHP_BIN"
        }), " 환경 변수에 PHP CLI 명령어의 경로를 설정하세요."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "$ sudo vi /etc/init.d/whatap-php\n\nexport WHATAP_PHP_BIN=    # PHP 명령어 위치(/usr/bin/php)\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "php-api-버전-확인",
        children: "PHP API 버전 확인"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "$WHATAP_PHP_BIN"
        }), " 환경 변수에 PHP CLI 명령어의 경로를 설정하세요."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "$ sudo php -i | grep 'PHP API'\n\nPHP API => 20100412\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "php-ztszend-thread-safe-지원-여부-확인",
        children: "PHP ZTS(Zend Thread Safe) 지원 여부 확인"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=apache",
          children: "$ sudo apachectl -V | grep MPM\n\nServer MPM: Prefork      # ZTS 지원 안함\nServer MPM: Worker       # ZTS 지원\n"
        })
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=PHP-FPM",
          children: "$ sudo php-fpm -i | grep Thread\n\nThread Safety => disabled       # ZTS 지원 안함\nThread Safety => enabled       \t# ZTS 지원\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,jsx_runtime.jsx)(_components.h3, {
        id: "php-확장-모듈-경로-확인-및-설정",
        children: "PHP 확장 모듈 경로 확인 및 설정"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "check-php-extension-module",
        children: "PHP 확장 모듈 경로 확인"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "$ sudo php -i | grep extension_dir\n\nextension_dir => /usr/lib64/php/modules => /usr/lib64/php/modules\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "php-확장-모듈-설정",
        children: "PHP 확장 모듈 설정"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["PHP API 버전, PHP ZTS 지원 여부를 확인하여 환경에 적합한 라이브러리를 선택하세요. PHP 확장 모듈(PHP Extension module) 경로에 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.so"
        }), " 파일명을 복사하세요."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["PHP ZTS를 지원할 경우 - ", (0,jsx_runtime.jsx)(_components.em, {
              children: "whatap_zts_[PHP API 버전].so"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["PHP ZTS를 지원하지 않을 경우 - ", (0,jsx_runtime.jsx)(_components.em, {
              children: "whatap_[PHP API 버전].so"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              children: "# PHP ZTS 지원하지 않을 경우 예시\n$ sudo cp /usr/whatap/php/modules/x64/whatap_20100412.so /usr/lib64/php/modules/whatap.so\n"
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "whatap-php-서비스-환경-변수-설정-1",
        children: "whatap-php 서비스 환경 변수 설정"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "$ sudo vi /etc/init.d/whatap-php\n\nexport WHATAP_PHP_EXT_HOME=   # PHP Extension 경로(/usr/lib64/php/modules)\nexport WHATAP_PHP_EXT_SRC=    # 와탭 라이브러리 경로 및 파일명\n                              # (/usr/whatap/php/modules/x64/whatap_20100412.so)]\n"
        })
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "$WHATAP_PHP_EXT_HOME"
          }), " 환경변수에 PHP 확장 모듈 경로를 설정하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "$WHATAP_PHP_EXT_SRC"
          }), " 환경변수에 와탭 라이브러리 전체 파일 경로를 설정하세요."]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "php-ini-path",
        children: "whatap.ini 설정"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "PHP 추가 ini 설정 경로를 확인하세요."
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              children: "$ sudo php -i | grep '.ini files'\n\nScan this dir for additional .ini files => /etc/php.d\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: "whatap.ini"
            }), "를 해당 경로에 복사하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              children: "$ sudo cp /usr/whatap/php/whatap.ini /etc/php.d/whtap/ini\n"
            })
          }), "\n"]
        }), "\n"]
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


;// CONCATENATED MODULE: ./docs/common-items/_php-ini-path-error.mdx


const _php_ini_path_error_frontMatter = {};
const _php_ini_path_error_contentTitle = (/* unused pure expression or super */ null && (undefined));



/*문제 해결 페이지의 수동 설정?*/
/*명령어 경로 확인 후 확장 모듈과 서비스 선택 설치가 진행되는 순서가 필요한지?*/
/** [PHP 명령어(CLI)의 위치](#php-명령어cli-경로-확인)를 정확히 확인하세요.
* [PHP 확장 모듈 및 whatap-php 서비스 선택 설치](#php-확장-모듈-및-whatap-php-서비스-수동-설정) 항목을 진행하세요.*/


const _php_ini_path_error_toc = [{
  "value": "PHP 추가 ini 설정 경로 확인 불가",
  "id": "php-추가-ini-설정-경로-확인-불가",
  "level": 2
}, {
  "value": "whatap-php 서비스(Service) 환경 변수 설정",
  "id": "whatap-php-서비스service-환경-변수-설정",
  "level": 3
}, {
  "value": "서비스 재시작",
  "id": "서비스-재시작",
  "level": 3
}, {
  "value": "Error: Not found PHP API",
  "id": "error-not-found-php-api",
  "level": 3
}];
function _php_ini_path_error_createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "php-추가-ini-설정-경로-확인-불가",
        children: "PHP 추가 ini 설정 경로 확인 불가"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["PHP 컴파일(Compile) 설치 옵션 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--with-config-file-scan-dir=PATH"
        }), "이 설정 안된 경우에 발생합니다."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "$ sudo php -i | grep '.ini files'\n\nScan this dir for additional .ini files => (none)\n"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.ini"
        }), " 파일 내용을 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "php.ini"
        }), " 마지막에 추가하세요."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "$ php -i | grep 'php.ini'\n\nLoaded Configuration File => /etc/php.ini\n\n$ sudo vi php.ini\n\n# 파일 마지막에 추가\n[whatap]\n;Enable whatap extension module\nextension=whatap.so\nwhatap.ext.error_enabled=true\nwhatap.ext.exception_enabled=true\nwhatap.trace_user_enabled=true\nwhatap.trace_user_using_ip=false\n"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["이외 옵션은 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "/usr/whatap/php/whatap.ini"
        }), " 를 사용하세요."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "whatap-php-서비스service-환경-변수-설정",
        children: "whatap-php 서비스(Service) 환경 변수 설정"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "$WHATAP_CONFIG_HOME"
        }), " 환경변수에 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.ini"
        }), " 경로를 설정하세요."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["PHP 추가 ini 경로를 확인 할 수 없는 경우 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.ini"
        }), "를 생성한 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "/usr/whatap/php"
        }), " 경로를 설정하세요."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "$ sudo vi /etc/init.d/whatap-php\n\nexport WHATAP_CONFIG_HOME=      # whatap.ini 경로(/etc/php.d)\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "서비스-재시작",
        children: "서비스 재시작"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Apache 및 PHP-FPM 서비스를 재시작하세요."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "whatap-php 서비스를 재시작하세요."
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "error-not-found-php-api",
        children: "Error: Not found PHP API"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "PHP 명령어(CLI)를 찾지 못하는 경우 발생합니다."
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#check-php-cli-path",
          children: "PHP 명령어(CLI)의 위치"
        }), "를 정확히 확인하고 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#extension-modul-manual-setting",
          children: "PHP 확장 모듈 및 whatap-php 서비스 선택 설치"
        }), " 항목을 진행하세요."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='Check PHP API version'",
          children: "$ sudo php -i | grep 'PHP API'\n\nPHP API => 20100412\n"
        })
      })]
    })]
  });
}
function _php_ini_path_error_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_php_ini_path_error_createMdxContent, {
      ...props
    })
  }) : _php_ini_path_error_createMdxContent(props);
}


;// CONCATENATED MODULE: ./docs/common-items/_php-error-not-found-php-ini-dir.mdx


const _php_error_not_found_php_ini_dir_frontMatter = {};
const _php_error_not_found_php_ini_dir_contentTitle = (/* unused pure expression or super */ null && (undefined));



/*.ini files -> .ini 파일의 항목?*/
/*Scan this dir for additional .ini files 표기 문제*/
/*내용 정리 및 수정 필요*/
/*PHP 명령어의(CLI) 경로를 정확히 찾고, 'PHP 확장 모듈(PHP Extension module) 및 whata-php 서비스(Service) 수동 설정' 항목을 진행합니다.*/
/*
* [PHP 명령어(CLI)의 위치](#php-명령어cli-경로-확인)를 정확히 확인하세요.
* [PHP 확장 모듈 및 whatap-php 서비스 선택 설치](#php-확장-모듈-및-whatap-php-서비스-수동-설정) 항목을 진행하세요.
*/


const _php_error_not_found_php_ini_dir_toc = [{
  "value": "Error: Not found PHP ini directory",
  "id": "error-not-found-php-ini-directory",
  "level": 2
}];
function _php_error_not_found_php_ini_dir_createMdxContent(props) {
  const _components = {
    a: "a",
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
      id: "error-not-found-php-ini-directory",
      children: "Error: Not found PHP ini directory"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PHP 환경 중 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Scan this dir for additional .ini files"
      }), " 항목의 값을 확인하지 못 한 경우 발생합니다. PHP 컴파일 설치 옵션 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--with-config-file-scan-dir=PATH"
      }), "이 설정되지 않은 경우 해당 환경정보가 없습니다."]
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["다음 설명서를 참조하여 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#check-php-cli-path",
        children: "PHP 명령어(CLI)의 위치"
      }), "를 정확히 확인하고 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#extension-modul-manual-setting",
        children: "PHP 확장 모듈 및 whatap-php 서비스 선택 설치"
      }), " 항목을 진행하세요."]
    }), (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "$ sudo php -i | grep '.ini files'\n\nScan this dir for additional .ini files => (none)\n"
      })
    })]
  });
}
function _php_error_not_found_php_ini_dir_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_php_error_not_found_php_ini_dir_createMdxContent, {
      ...props
    })
  }) : _php_error_not_found_php_ini_dir_createMdxContent(props);
}


;// CONCATENATED MODULE: ./docs/common-items/_php-hitmap-error.mdx


const _php_hitmap_error_frontMatter = {};
const _php_hitmap_error_contentTitle = (/* unused pure expression or super */ null && (undefined));



/*위 항목의 포함관계 검토 필요*/


const _php_hitmap_error_toc = [{
  "value": "응답 시간 분포도에 트랜잭션이 표시되지 않는 경우",
  "id": "응답-시간-분포도에-트랜잭션이-표시되지-않는-경우",
  "level": 2
}];
function _php_hitmap_error_createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "응답-시간-분포도에-트랜잭션이-표시되지-않는-경우",
      children: "응답 시간 분포도에 트랜잭션이 표시되지 않는 경우"
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: "CPU와 Memory 그래프를 볼 수 있지만 응답 시간 분포도 즉 히트맵을 볼 수 없는 현상은 다음과 같은 경우에 발생합니다."
    }), (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "에이전트가 수집 서버와 정상적으로 연결되었으나 트레이서가 정상적으로 PHP 확장 모듈에 적용되지 않은 경우"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "설정 후 Apache 및 PHP-FPM 서비스를 재시작하지 않은 경우"
      }), "\n"]
    }), (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "PHP 확장 모듈이 적용되었는지 확인하세요."
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "$ sudo php -m\n\n[PHP Modules]\nbz2\ncalendar\nCore\nctype\ncurl\ndate\n…\nwhatap               # 와탭 모듈 로드 확인\n…\n[Zend Modules]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Apache 및 PHP-FPM 서비스를 재시작하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["PHP 확장 모듈이 적용되지 않은 경우는 정상 설치되지 않은 것입니다. ", (0,jsx_runtime.jsx)(_components.em, {
            children: "whatap.so"
          }), " 또는 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "whatap.ini"
          }), " 파일 경로가 PHP 환경과 일치하는지 확인하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["다음 설명서를 참조하여 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#check-php-cli-path",
            children: "PHP 명령어(CLI) 경로"
          }), ", ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#check-php-extension-module",
            children: "PHP 확장 모듈 경로"
          }), ", ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#php-ini-path",
            children: "PHP 추가 ini 설정 경로"
          }), " 항목들을 확인하세요."]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function _php_hitmap_error_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_php_hitmap_error_createMdxContent, {
      ...props
    })
  }) : _php_hitmap_error_createMdxContent(props);
}


;// CONCATENATED MODULE: ./docs/common-items/_php-sig-error.mdx


const _php_sig_error_frontMatter = {};
const _php_sig_error_contentTitle = (/* unused pure expression or super */ null && (undefined));



/*표기 스타일 확인*/


const _php_sig_error_toc = [{
  "value": "Segmentation fault, Sig bus error",
  "id": "segmentation-fault-sig-bus-error",
  "level": 2
}, {
  "value": "Core Dump 설정",
  "id": "core-dump-설정",
  "level": 3
}, {
  "value": "Apache",
  "id": "apache",
  "level": 3
}, {
  "value": "PHP-FPM",
  "id": "php-fpm",
  "level": 3
}];
function _php_sig_error_createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "segmentation-fault-sig-bus-error",
        children: "Segmentation fault, Sig bus error"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "PHP 모니터링을 적용한 후 서비스에 오류가 발생할 경우 Apache 또는 PHP-FPM의 error log를 확인하세요."
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["error log 내용 중 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "segmentation fault"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sig bus"
        }), " 등의 오류 문구가 있는지 확인하세요. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kill child process"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exit child"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exit process"
        }), " 등의 문구와 같이 발생합니다."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["해당 오류가 발생하는 경우는 PHP Extension 모듈인 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.so"
        }), " 모듈에서 충돌이 발생하는 것으로 볼 수 있습니다. PHP Extension 모듈인 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.so"
        }), " 를 중지한 후에 Apache 또는 PHP-FPM을 재시작하세요."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["서비스에 영향을 주지 않는 환경에서 Apache 및 PHP-FPM에 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Core dump"
        }), " 설정을 추가한 후 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.so"
        }), "를 다시 로딩하세요. 이후 오류가 발생하면 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "dump"
        }), " 파일이 생성됩니다. ", (0,jsx_runtime.jsx)(_components.em, {
          children: "dump"
        }), " 파일을 gdb로 분석하여 원인을 해결하세요."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "core-dump-설정",
        children: "Core Dump 설정"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: "dump"
            }), " 파일을 생성할 디렉터리의 권한을 부여하세요"]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-java",
              children: "chmod 0777 /home/httpd-core\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "시스템 설정을 하세요."
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-java",
              children: "ulimit -c unlimited\nsysctl fs.suid_dumpable=2\nsysctl kernel.core_uses_pid=0\nsysctl kernel.core_pattern='| /home/httpd-core/core-%e.%p'\n"
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "apache",
        children: "Apache"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Apache conf 에 CoreDumpDirectory 항목을 설정하세요."
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-java",
              children: "vi /etc/httpd/conf/httpd.conf\n\nCoreDumpDirectory /home/httpd-core\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Apache를 재시작하면 설정이 완료됩니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["오류가 발생하면 ", (0,jsx_runtime.jsx)(_components.em, {
              children: "dump"
            }), " 파일이 생성됩니다. ", (0,jsx_runtime.jsx)(_components.em, {
              children: "dump"
            }), " 파일이 생성되면 gdb를 통해 오류 원인을 확인합니다. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "bt full"
            }), " 명령어를 통해서 전체 스택 정보를 확인하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-java",
              children: "# gdb /usr/sbin/httpd /home/httpd-core/core-httpd.31832\n...\n...\n\n> bt full\n"
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "php-fpm",
        children: "PHP-FPM"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["FPM 설정 파일에서 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rlimit_core"
            }), " 를 설정하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-java",
              children: "rlimit_core = unlimited\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "PHP-FPM을 재시작하면 설정이 완료됩니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["오류가 발생하면 ", (0,jsx_runtime.jsx)(_components.em, {
              children: "dump"
            }), " 파일이 생성됩니다. ", (0,jsx_runtime.jsx)(_components.em, {
              children: "dump"
            }), " 파일이 생성되면 gdb를 통해 오류 원인을 확인하세요. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "bt full"
            }), " 명령어를 통해서 전체 스택 정보를 확인하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-java",
              children: "# gdb /usr/sbin/php-fpm /home/httpd-core/core-php-fpm.31832\n...\n...\n\n> bt full\n"
            })
          }), "\n"]
        }), "\n"]
      })]
    })]
  });
}
function _php_sig_error_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_php_sig_error_createMdxContent, {
      ...props
    })
  }) : _php_sig_error_createMdxContent(props);
}


;// CONCATENATED MODULE: ./docs/php/agent-troubleshooting.mdx


const agent_troubleshooting_frontMatter = {
	id: 'agent-troubleshooting',
	title: '설치 문제 해결',
	description: 'PHP 에이전트 설치 시 발생할 수 있는 문제를 확인할 수 있습니다.',
	toc_max_heading_level: 2,
	tags: [
		'PHP',
		'PHP 모니터링',
		'애플리케이션',
		'애플리케이션 모니터링',
		'Troubleshooting',
		'문제 해결'
	]
};
const agent_troubleshooting_contentTitle = undefined;
const metadata = {
  "id": "php/agent-troubleshooting",
  "title": "설치 문제 해결",
  "description": "PHP 에이전트 설치 시 발생할 수 있는 문제를 확인할 수 있습니다.",
  "source": "@site/docs/php/agent-troubleshooting.mdx",
  "sourceDirName": "php",
  "slug": "/php/agent-troubleshooting",
  "permalink": "/php/agent-troubleshooting",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/php/agent-troubleshooting.mdx",
  "tags": [
    {
      "inline": true,
      "label": "PHP",
      "permalink": "/tags/php"
    },
    {
      "inline": true,
      "label": "PHP 모니터링",
      "permalink": "/tags/php-모니터링"
    },
    {
      "inline": true,
      "label": "애플리케이션",
      "permalink": "/tags/애플리케이션"
    },
    {
      "inline": true,
      "label": "애플리케이션 모니터링",
      "permalink": "/tags/애플리케이션-모니터링"
    },
    {
      "inline": true,
      "label": "Troubleshooting",
      "permalink": "/tags/troubleshooting"
    },
    {
      "inline": true,
      "label": "문제 해결",
      "permalink": "/tags/문제-해결"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "agent-troubleshooting",
    "title": "설치 문제 해결",
    "description": "PHP 에이전트 설치 시 발생할 수 있는 문제를 확인할 수 있습니다.",
    "toc_max_heading_level": 2,
    "tags": [
      "PHP",
      "PHP 모니터링",
      "애플리케이션",
      "애플리케이션 모니터링",
      "Troubleshooting",
      "문제 해결"
    ]
  },
  "sidebar": "phpSidebar",
  "previous": {
    "title": "설치 점검",
    "permalink": "/php/install-check"
  },
  "next": {
    "title": "PHP 에이전트 설정",
    "permalink": "/php/set-agent"
  }
};
const assets = {

};








const agent_troubleshooting_toc = [...toc, ..._php_ini_path_error_toc, ..._php_error_not_found_php_ini_dir_toc, ..._php_hitmap_error_toc, ..._php_sig_error_toc];
function agent_troubleshooting_createMdxContent(props) {
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(MDXContent, {}), "\n", "\n", (0,jsx_runtime.jsx)(_php_ini_path_error_MDXContent, {}), "\n", "\n", (0,jsx_runtime.jsx)(_php_error_not_found_php_ini_dir_MDXContent, {}), "\n", "\n", (0,jsx_runtime.jsx)(_php_hitmap_error_MDXContent, {}), "\n", "\n", (0,jsx_runtime.jsx)(_php_sig_error_MDXContent, {})]
  });
}
function agent_troubleshooting_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(agent_troubleshooting_createMdxContent, {
      ...props
    })
  }) : agent_troubleshooting_createMdxContent(props);
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