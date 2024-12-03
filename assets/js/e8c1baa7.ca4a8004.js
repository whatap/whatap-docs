"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["61299"], {
"86145": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50065);
/* ESM import */var _theme_Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47902);
/* ESM import */var _theme_TabItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5525);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));







const toc = [{
  "value": "PHP 확장 모듈 및 whatap-php 서비스 등록",
  "id": "php-확장-모듈-및-whatap-php-서비스-등록",
  "level": 4
}, {
  "value": "설정 스트립트 install.sh",
  "id": "설정-스트립트-installsh",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */.a)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "php-확장-모듈-및-whatap-php-서비스-등록",
        children: "PHP 확장 모듈 및 whatap-php 서비스 등록"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "PHP 확장 모듈 및 whatap-php 서비스를 자동으로 설치할 경우 아래와 같이 적용하세요."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=SH",
          children: "$ sudo /usr/whatap/php/install.sh\nInput license key\nxxxxxxxxxxxxxxxx                          # 발급된 액세스 키 입력\n\nInput whatap.server.host\n192.x.x.x                                  # 발급된 서버 IP 입력\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "PHP 확장 모듈 및 whatap-php 서비스를 자동으로 인식하지 못하면 아래와 같이 선택 설치를 진행해야 합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["주로 Apache 명령어(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "apachectl"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "httpd"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "apache2"
        }), ") 및 PHP 명령어(CLI)가 기본 경로(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "$PATH"
        }), ")에 설정되어 있지 않거나, 여러 개의 PHP가 설치되어 PHP 명령어(CLI)가 여러 개일 경우(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "php5"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "php70"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "php-zts"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "zts-php"
        }), "…) 실제로 적용하고 있는 버전을 선택해 진행하세요."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=SH",
          children: "$ sudo /usr/whatap/php/install.sh manual\n\nInput license key\nxxxxxxxxxxxxxxxx                            # 발급된 액세스 키 입력\n\nInput whatap.server.host\n192.x.x.x                                    # 발급된 서버 IP 입력\n\nInput : which apache or php-fpm ex)/usr/sbin/httpd, /usr/sbin/apache2, /usr/sbin/php-fpm ...\n/usr/sbin/httpd                             # apache 및 php-fpm 명령어 위치 입력\n\nInput : which php ex) /usr/bin/php, /usr/bin/php5, /usr/bin/php70 ...\n/usr/bin/php5                                # php 명령어 위치 입력\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "설정-스트립트-installsh",
        children: "설정 스트립트 install.sh"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=SH",
          children: "Usage: install.sh [ commands manual|remove ]\n    install.sh -l <license> -s <server> -v <php version> -i <php config file> -p <process_name> [-z ]\n    install.sh -l <license> -s <server> -e <php command> -p <process_name> [-z ]\nCommands\n    auto(default) Auto scan web server and php environment\n    manual User input web server and php environment\n    remove Remove php extension and service(whatap-php)\nOptions\n    -v <php version>     PHP version ex) 5.3, 5.4, 5.5, 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0                        -v 5.3\n                           --php-version 5.3\n    -i <php config file> PHP config file\n                           -i /etc/php.ini\n                           --php-ini /etc/php.ini\n    -e <php cli>         PHP CLI(command line interface)\n                           -e /usr/bin/php\n                           --php-exe: /usr/bin/php-fpm\n    -p <process name>    Web server or PHP-FPM process name. for get used memory\n                           -p httpd\n                           -p httpd.worker, -process-name: php-fpm\n    -l <license>         License key\n                           -l xxxxxxxxxxxxxxx,\n                           --license: xxxxxxxxxxxxx\n    -s <server>          WhaTap Server Host\n                           -s xx.xx.xx.xx/yy.yy.yy.yy,\n                           --server xxx.xxx.xxx.xxx\n    -z                   PHP thread safe\n                           -z ,\n                           --php-zts\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "license"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "발급된 액세스 키 입니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "server"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "발급된 서버 IP 입니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "php version"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "서버에 설치된 php 버전 정보(5.2. 5.3, 5.4, 5.5, 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0)입니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "php config file"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["서버에 설치된 php.ini의 전체 경로(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "/etc/php.ini"
            }), ") PHP Extension에 대한 설정을 진행합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "php cli"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["커맨드 라인으로 실행 가능한 php 명령어의 전체 경로(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "/usr/bin/php"
            }), ") 해당 명령어로 PHP 기본 환경을 확인합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "process name"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["Apache 실행 프로세스명(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "httpd"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "apache2"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "httpd.worker"
            }), "…) 또는 PHP-FPM의 실행 프로세스명(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "php-fpm"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "php5-fpm"
            }), ")으로 사용 메모리 정보를 수집합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "zts"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "Zend Thread Safe 지원 여부를 설정합니다."
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */.Z, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Z, {
          value: "phpvs",
          label: "Install PHP version",
          default: true,
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=SH",
              children: "$ /usr/whatap/php/install.sh -l [발급된 액세스 키] -s [발급된 서버 IP] -v [PHP 버전 x.x] -i [php.ini의 전체 경로] -p [프로세스명]\n$ /usr/whatap/php/install.sh -l xxxxx -s 1.1.1.1/2.2.2.2 -v 7.0 -i /etc/php.ini -p httpd [-z]\n"
            })
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Z, {
          value: "phcli",
          label: "Install PHP cli command",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=SH",
              children: "$ /usr/whatap/php/install.sh -l [발급된 액세스 키] -s [발급된 서버 IP] -e [PHP Cli] -p [프로세스명]\n$ /usr/whatap/php/install.sh -l xxxxx -s 1.1.1.1/2.2.2.2 -e /opt/php/bin/php -p apache2\n$ /usr/whatap/php/install.sh -l xxxxx -s 1.1.1.1/2.2.2.2 -e /opt/php/bin/php-fpm -p php-fpm\n"
            })
          })
        })]
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



}),
"4036": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
      children: "install.sh"
    }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
      children: "설정 스크립트"
    }), "를 실행하세요. 스크립트 실행으로 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
      children: "PHP 확장 모듈"
    }), " 설정과 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
      children: "whatap-php 서비스"
    }), " 데몬이 등록됩니다. 자세한 과정은 다음을 참고하세요."]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



}),
"4270": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_php_php_os_amazon_linux_mdx_e8c_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-php-php-os-amazon-linux-mdx-e8c.json
var site_docs_php_php_os_amazon_linux_mdx_e8c_namespaceObject = JSON.parse('{"id":"php/php-os/amazon-linux","title":"Amazon Linux","description":"Amazon Linux","source":"@site/docs/php/php-os/amazon-linux.mdx","sourceDirName":"php/php-os","slug":"/php/php-os/amazon-linux","permalink":"/php/php-os/amazon-linux","draft":false,"unlisted":false,"editUrl":"undefined/docs/php/php-os/amazon-linux.mdx","tags":[],"version":"current","frontMatter":{"id":"amazon-linux","title":"Amazon Linux","description":"Amazon Linux","keywords":["Amazon Linux","Linux","PHP"],"isTranslationMissing":false},"sidebar":"phpSidebar","previous":{"title":"Debian/Ubuntu","permalink":"/php/php-os/debian-ubuntu"},"next":{"title":"FreeBSD","permalink":"/php/php-os/freebsd"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./docs/common-items/_php-install-script.mdx
var _php_install_script = __webpack_require__("4036");
// EXTERNAL MODULE: ./docs/common-items/_php-extension-whatap.mdx
var _php_extension_whatap = __webpack_require__("86145");
;// CONCATENATED MODULE: ./docs/php/php-os/amazon-linux.mdx


const frontMatter = {
	id: 'amazon-linux',
	title: 'Amazon Linux',
	description: 'Amazon Linux',
	keywords: [
		'Amazon Linux',
		'Linux',
		'PHP'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};





const toc = [..._php_install_script/* toc */.d$, ..._php_extension_whatap/* toc */.d$];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["와탭 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "리포지토리"
          }), "를 등록하세요."]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=SH",
            children: "$ sudo rpm --import http://repo.whatap.io/centos/release.gpg\n$ echo \"[whatap]\" | sudo tee /etc/yum.repos.d/whatap.repo > /dev/null\n$ echo \"name=whatap packages for enterprise linux\" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null\n$ echo \"baseurl=http://repo.whatap.io/centos/latest/\\$basearch\" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null\n$ echo \"enabled=1\" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null\n$ echo \"gpgcheck=0\" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["다음 명령어를 통해 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "패키지"
          }), "를 설치하세요."]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=SH",
            children: "$ sudo yum install whatap-php\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_php_install_script/* default */.ZP, {}), "\n"]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_php_extension_whatap/* default */.ZP, {}), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Apache 및 PHP-FPM 다시 시작 후 적용됩니다."
      })
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