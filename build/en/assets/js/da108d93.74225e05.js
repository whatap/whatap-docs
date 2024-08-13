"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[37077],{

/***/ 6840:
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
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_php-extension-module-service.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "Manual configuration of PHP extension module and whatap-php service",
  "id": "extension-modul-manual-setting",
  "level": 2
}, {
  "value": "Creation of whatap.ini",
  "id": "creation-of-whatapini",
  "level": 3
}, {
  "value": "Checking the PHP command (CLI)",
  "id": "check-php-cli-path",
  "level": 3
}, {
  "value": "Configuring the environment variables for the whatap-php service",
  "id": "configuring-the-environment-variables-for-the-whatap-php-service",
  "level": 3
}, {
  "value": "Checking the PHP API version",
  "id": "checking-the-php-api-version",
  "level": 3
}, {
  "value": "Checking whether PHP ZTS (Zend Thread Safe) is available",
  "id": "checking-whether-php-zts-zend-thread-safe-is-available",
  "level": 3
}, {
  "value": "Checking and configuring the PHP extension module&#39;s path",
  "id": "checking-and-configuring-the-php-extension-modules-path",
  "level": 3
}, {
  "value": "Checking the PHP extension module&#39;s path",
  "id": "check-php-extension-module",
  "level": 4
}, {
  "value": "Configuring the PHP extension module",
  "id": "configuring-the-php-extension-module",
  "level": 4
}, {
  "value": "Configuring the environment variables for the whatap-php service",
  "id": "configuring-the-environment-variables-for-the-whatap-php-service-1",
  "level": 4
}, {
  "value": "whatap.ini configuration",
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
        children: "Manual configuration of PHP extension module and whatap-php service"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If installation of the PHP extension module and whatap-php service (", (0,jsx_runtime.jsx)(_components.em, {
          children: "install.sh"
        }), ") has not been successful, you can install them manually. Use this method when environment information cannot be checked for any reasons such as PHP compile installation."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "creation-of-whatapini",
        children: "Creation of whatap.ini"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "$ cp /usr/whatap/php/template.ini /usr/whatap/php/whatap.ini\n$ vi /usr/whatap/php/whatap.ini\n\n# Add this content at the top\n; Enable whatap extension module\nextension=whatap.so\nwhatap.license=            # Issued access key\nwhatap.server.host=        # Issued server IP\nwhatap.app_name=           # Web server classification: APHP, FPHP (apache: APHP, php-fpm : FPHP)\nwhatap.app_process_name=   # Process name of apache and php-fpm (httpd,php-fpm)\n"
        })
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Configuration"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "whatap.license"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["The access key issued from ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.em, {
                  children: "Project Menu"
                })
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.em, {
                  children: "Management"
                })
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.em, {
                  children: "Agent Installation"
                })
              }), " can be checked."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "whatap.server.host"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["You can see the server IP issued from ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.em, {
                  children: "Project Menu"
                })
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.em, {
                  children: "Management"
                })
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.em, {
                  children: "Agent Installation"
                })
              }), "."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "whatap.app_name"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "APHP"
              }), " is used for the Apache server and ", (0,jsx_runtime.jsx)(_components.code, {
                children: "FPHP"
              }), " is used for php-fpm."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "whatap.app_process_name"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["If you enter the exact value as the execution process name of Apache or php-fpm, the memory usage for the process is collected. For example, they are ", (0,jsx_runtime.jsx)(_components.code, {
                children: "httpd"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "apache2"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "php-fpm"
              }), ", and such."]
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "check-php-cli-path",
        children: "Checking the PHP command (CLI)"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "$ which php\n\n/usr/bin/php\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "configuring-the-environment-variables-for-the-whatap-php-service",
        children: "Configuring the environment variables for the whatap-php service"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Set the PHP CLI command's path in the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$WHATAP_PHP_BIN"
        }), " environment variable."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "$ sudo vi /etc/init.d/whatap-php\n\nexport WHATAP_PHP_BIN=    # PHP command's location (/usr/bin/php)\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "checking-the-php-api-version",
        children: "Checking the PHP API version"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Set the PHP CLI command's path in the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$WHATAP_PHP_BIN"
        }), " environment variable."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "$ sudo php -i | grep 'PHP API'\n\nPHP API => 20100412\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "checking-whether-php-zts-zend-thread-safe-is-available",
        children: "Checking whether PHP ZTS (Zend Thread Safe) is available"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=apache",
          children: "$ sudo apachectl -V | grep MPM\n\nServer MPM: Prefork      # ZTS unavailable\nServer MPM: Worker       # ZTS available\n"
        })
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=PHP-FPM",
          children: "$ sudo php-fpm -i | grep Thread\n\nThread Safety => disabled       # ZTS unavailable\nThread Safety => enabled       \t# ZTS available\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,jsx_runtime.jsx)(_components.h3, {
        id: "checking-and-configuring-the-php-extension-modules-path",
        children: "Checking and configuring the PHP extension module's path"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "check-php-extension-module",
        children: "Checking the PHP extension module's path"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "$ sudo php -i | grep extension_dir\n\nextension_dir => /usr/lib64/php/modules => /usr/lib64/php/modules\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "configuring-the-php-extension-module",
        children: "Configuring the PHP extension module"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["After checking the PHP API version and PHP ZTS's availability, select a library that meets the environment. In the PHP extension module's path, copy the ", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.so"
        }), " file name."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["In case PHP ZTS is available - ", (0,jsx_runtime.jsx)(_components.em, {
            children: "whatap_zts_[PHP API version].so"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["In case PHP ZTS is unavailable - ", (0,jsx_runtime.jsx)(_components.em, {
            children: "whatap_[PHP API version].so"
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              children: "# Example in case the PHP ZTS is not supported\n$ sudo cp /usr/whatap/php/modules/x64/whatap_20100412.so /usr/lib64/php/modules/whatap.so\n"
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "configuring-the-environment-variables-for-the-whatap-php-service-1",
        children: "Configuring the environment variables for the whatap-php service"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "$ sudo vi /etc/init.d/whatap-php\n\nexport WHATAP_PHP_EXT_HOME=   # PHP extension path (/usr/lib64/php/modules)\nexport WHATAP_PHP_EXT_SRC=    # whatap library path and file name\n                              # (/usr/whatap/php/modules/x64/whatap_20100412.so)]\n"
        })
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["In the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "$WHATAP_PHP_EXT_HOME"
          }), " environment variable, set the PHP extension module's path."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["In the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "$WHATAP_PHP_EXT_SRC"
          }), " environment variable, set the whatap library's full file path."]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "php-ini-path",
        children: "whatap.ini configuration"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Check the PHP ini file's path that has been added."
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              children: "$ sudo php -i | grep '.ini files'\n\nScan this dir for additional .ini files => /etc/php.d\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Copy ", (0,jsx_runtime.jsx)(_components.em, {
              children: "whatap.ini"
            }), " and paste it to the path."]
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_php-ini-path-error.mdx


const _php_ini_path_error_frontMatter = {};
const _php_ini_path_error_contentTitle = (/* unused pure expression or super */ null && (undefined));



/*문제 해결 페이지의 수동 설정?*/
/*명령어 경로 확인 후 확장 모듈과 서비스 선택 설치가 진행되는 순서가 필요한지?*/
/*\* [PHP 명령어(CLI)의 위치](#php-명령어cli-경로-확인)를 정확히 확인하세요.

- [PHP 확장 모듈 및 whatap-php 서비스 선택 설치](#php-확장-모듈-및-whatap-php-서비스-수동-설정) 항목을 진행하세요.*/


const _php_ini_path_error_toc = [{
  "value": "Cannot check the PHP ini file&#39;s path that has been added",
  "id": "cannot-check-the-php-ini-files-path-that-has-been-added",
  "level": 2
}, {
  "value": "Configuring the whatap-php service&#39;s environment variables",
  "id": "configuring-the-whatap-php-services-environment-variables",
  "level": 3
}, {
  "value": "Restarting the service",
  "id": "restarting-the-service",
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
        id: "cannot-check-the-php-ini-files-path-that-has-been-added",
        children: "Cannot check the PHP ini file's path that has been added"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["This happens if the PHP compile installation option, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--with-config-file-scan-dir=PATH"
        }), " has not been set."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "$ sudo php -i | grep '.ini files'\n\nScan this dir for additional .ini files => (none)\n"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Add the content in ", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.ini"
        }), " at the end of ", (0,jsx_runtime.jsx)(_components.em, {
          children: "php.ini"
        }), "."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "$ php -i | grep 'php.ini'\n\nLoaded Configuration File => /etc/php.ini\n\n$ sudo vi php.ini\n\n# Add at the end of a file\n[whatap]\n;Enable whatap extension module\nextension=whatap.so\nwhatap.ext.error_enabled=true\nwhatap.ext.exception_enabled=true\nwhatap.trace_user_enabled=true\nwhatap.trace_user_using_ip=false\n"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For other options, use ", (0,jsx_runtime.jsx)(_components.em, {
          children: "/usr/whatap/php/whatap.ini"
        }), "."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "configuring-the-whatap-php-services-environment-variables",
        children: "Configuring the whatap-php service's environment variables"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["In the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$WHATAP_CONFIG_HOME"
        }), " environment variable, set the path for ", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.ini"
        }), "."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If the added PHP's ini path cannot be checked, set the ", (0,jsx_runtime.jsx)(_components.em, {
          children: "/usr/whatap/php"
        }), " path in which ", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.ini"
        }), " has been created."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "$ sudo vi /etc/init.d/whatap-php\n\nexport WHATAP_CONFIG_HOME=      # whatap.ini path (/etc/php.d)\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "restarting-the-service",
        children: "Restarting the service"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Restart Apache and PHP-FPM services."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Restart the whatap-php service."
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "error-not-found-php-api",
        children: "Error: Not found PHP API"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "This occurs if the PHP command (CLI) cannot be found."
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Check the correct ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#check-php-cli-path",
          children: "PHP command (CLI) location"
        }), " and then proceed with ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#extension-modul-manual-setting",
          children: "Optional installation of the PHP extension module and whatap-php service"
        }), "."]
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_php-error-not-found-php-ini-dir.mdx


const _php_error_not_found_php_ini_dir_frontMatter = {};
const _php_error_not_found_php_ini_dir_contentTitle = (/* unused pure expression or super */ null && (undefined));



/*.ini files -> .ini 파일의 항목?*/
/*Scan this dir for additional .ini files 표기 문제*/
/*내용 정리 및 수정 필요*/
/*PHP 명령어의(CLI) 경로를 정확히 찾고, 'PHP 확장 모듈(PHP Extension module) 및 whata-php 서비스(Service) 수동 설정' 항목을 진행합니다.*/
/*

- [PHP 명령어(CLI)의 위치](#php-명령어cli-경로-확인)를 정확히 확인하세요.
- [PHP 확장 모듈 및 whatap-php 서비스 선택 설치](#php-확장-모듈-및-whatap-php-서비스-수동-설정) 항목을 진행하세요.
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
      children: ["This error occurs when the value in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Scan this dir for additional.ini files"
      }), " has not been checked. If the PHP compile installation option, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--with-config-file-scan-dir=PATH"
      }), " has not been installed, the environment information does not exist."]
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After referring to the following guide, check the correct ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#check-php-cli-path",
        children: "PHP command (CLI) location"
      }), " and then proceed with ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#extension-modul-manual-setting",
        children: "Optional installation of the PHP extension module and whatap-php service"
      }), "."]
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_php-hitmap-error.mdx


const _php_hitmap_error_frontMatter = {};
const _php_hitmap_error_contentTitle = (/* unused pure expression or super */ null && (undefined));



/*위 항목의 포함관계 검토 필요*/


const _php_hitmap_error_toc = [{
  "value": "In case transactions do not appear in the response time distribution chart",
  "id": "in-case-transactions-do-not-appear-in-the-response-time-distribution-chart",
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
      id: "in-case-transactions-do-not-appear-in-the-response-time-distribution-chart",
      children: "In case transactions do not appear in the response time distribution chart"
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: "The CPU and memory graphs appear but the response time distribution chart (hitmap) does not appear in the following cases:"
    }), (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The agent is connected to the collection server but the tracer is not applied to the PHP extension module."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apache and PHP-FPM have not been restarted after configuration."
      }), "\n"]
    }), (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check whether the PHP extension module has been applied."
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "$ sudo php -m\n\n[PHP Modules]\nbz2\ncalendar\nCore\nctype\ncurl\ndate\n…\nwhatap               # Check the WhaTap module load\n…\n[Zend Modules]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Restart Apache and PHP-FPM services."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["If the PHP extension module has not been applied, it indicates abnormal installation. Check whether the path of ", (0,jsx_runtime.jsx)(_components.em, {
            children: "whatap.so"
          }), " or ", (0,jsx_runtime.jsx)(_components.em, {
            children: "whatap.ini"
          }), " meets the PHP environment."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["With referring to the following guide, check the items like ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#check-php-cli-path",
            children: "PHP command (CLI) path"
          }), ", ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#check-php-extension-module",
            children: "PHP extension module path"
          }), ", and ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#php-ini-path",
            children: "Additional PHP ini configuration file path"
          }), "."]
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_php-sig-error.mdx


const _php_sig_error_frontMatter = {};
const _php_sig_error_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _php_sig_error_toc = [{
  "value": "Segmentation fault, Sig bus error",
  "id": "segmentation-fault-sig-bus-error",
  "level": 2
}, {
  "value": "Core dump configuration",
  "id": "core-dump-configuration",
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
        children: "If any service failure occurs after applying the PHP Monitoring, check the error log for Apache or PHP-FPM."
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["In the content of the error log, check for any error messages such as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "segmentation fault"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sig bus"
        }), ". The messages include phrases like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kill child process"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exit child"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exit process"
        }), "."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If any error occurs, it can be seen that a conflict happened in the PHP extension module, ", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.so"
        }), ". Stop the PHP extension module, ", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.so"
        }), ", and then restart Apache or PHP-FPM."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["In the environment that does not affect the service, add the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Core dump"
        }), " setting and then reload ", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.so"
        }), ". If any error occurs, the ", (0,jsx_runtime.jsx)(_components.em, {
          children: "dump"
        }), " file is generated. Analyze the ", (0,jsx_runtime.jsx)(_components.em, {
          children: "dump"
        }), " file by using gdb for resolving the root cause."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "core-dump-configuration",
        children: "Core dump configuration"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Give permission for the directory to generate the ", (0,jsx_runtime.jsx)(_components.em, {
              children: "dump"
            }), " file."]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-java",
              children: "chmod 0777 /home/httpd-core\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Perform system configuration."
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
            children: "Set the CoreDumpDirectory item in the Apache conf."
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-java",
              children: "vi /etc/httpd/conf/httpd.conf\n\nCoreDumpDirectory /home/httpd-core\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Restart Apache to complete the configuration."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If any error occurs, the ", (0,jsx_runtime.jsx)(_components.em, {
              children: "dump"
            }), " file is generated. If the ", (0,jsx_runtime.jsx)(_components.em, {
              children: "dump"
            }), " file has been generated, check the root cause of the error through gdb. Use the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "bt full"
            }), " command to check the entire stack information."]
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
            children: ["In the FPM configuration file, set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rlimit_core"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-java",
              children: "rlimit_core = unlimited\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Restart PHP-FPM to complete the configuration."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If any error occurs, the ", (0,jsx_runtime.jsx)(_components.em, {
              children: "dump"
            }), " file is generated. If the ", (0,jsx_runtime.jsx)(_components.em, {
              children: "dump"
            }), " file has been generated, check the root cause of the error through gdb. Use the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "bt full"
            }), " command to check the entire stack information."]
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/php/agent-troubleshooting.mdx


const agent_troubleshooting_frontMatter = {
	id: 'agent-troubleshooting',
	title: 'Troubleshooting',
	description: 'You can check the problems that may occur during PHP agent installation.',
	toc_max_heading_level: 2,
	tags: [
		'PHP',
		'PHP Monitoring',
		'Application',
		'Application Monitoring',
		'Troubleshooting',
		'Troubleshooting'
	]
};
const agent_troubleshooting_contentTitle = undefined;
const metadata = {
  "id": "php/agent-troubleshooting",
  "title": "Troubleshooting",
  "description": "You can check the problems that may occur during PHP agent installation.",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/php/agent-troubleshooting.mdx",
  "sourceDirName": "php",
  "slug": "/php/agent-troubleshooting",
  "permalink": "/en/php/agent-troubleshooting",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/php/agent-troubleshooting.mdx",
  "tags": [
    {
      "inline": true,
      "label": "PHP",
      "permalink": "/en/tags/php"
    },
    {
      "inline": true,
      "label": "PHP Monitoring",
      "permalink": "/en/tags/php-monitoring"
    },
    {
      "inline": true,
      "label": "Application",
      "permalink": "/en/tags/application"
    },
    {
      "inline": true,
      "label": "Application Monitoring",
      "permalink": "/en/tags/application-monitoring"
    },
    {
      "inline": true,
      "label": "Troubleshooting",
      "permalink": "/en/tags/troubleshooting"
    },
    {
      "inline": true,
      "label": "Troubleshooting",
      "permalink": "/en/tags/troubleshooting"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "agent-troubleshooting",
    "title": "Troubleshooting",
    "description": "You can check the problems that may occur during PHP agent installation.",
    "toc_max_heading_level": 2,
    "tags": [
      "PHP",
      "PHP Monitoring",
      "Application",
      "Application Monitoring",
      "Troubleshooting",
      "Troubleshooting"
    ]
  },
  "sidebar": "phpSidebar",
  "previous": {
    "title": "설치 점검",
    "permalink": "/en/php/install-check"
  },
  "next": {
    "title": "PHP agent configuration",
    "permalink": "/en/php/set-agent"
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