"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[54315],{

/***/ 66586:
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
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_php-extension-module-service.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "PHP拡張モジュールおよびwhatap-phpサービスの手動設定",
  "id": "extension-modul-manual-setting",
  "level": 2
}, {
  "value": "whatap.ini作成",
  "id": "whatapini作成",
  "level": 3
}, {
  "value": "PHPコマンド(CLI) パスの確認",
  "id": "check-php-cli-path",
  "level": 3
}, {
  "value": "whatap-phpのサービス環境変数の設定",
  "id": "whatap-phpのサービス環境変数の設定",
  "level": 3
}, {
  "value": "PHP APIバージョンの確認",
  "id": "php-apiバージョンの確認",
  "level": 3
}, {
  "value": "PHP ZTS(Zend Thread Safe) サポート有無の確認",
  "id": "php-ztszend-thread-safe-サポート有無の確認",
  "level": 3
}, {
  "value": "PHP拡張モジュールのパスを確認して設定",
  "id": "php拡張モジュールのパスを確認して設定",
  "level": 3
}, {
  "value": "PHP拡張モジュールパスの確認",
  "id": "check-php-extension-module",
  "level": 4
}, {
  "value": "PHP拡張モジュールの設定",
  "id": "php拡張モジュールの設定",
  "level": 4
}, {
  "value": "whatap-phpのサービス環境変数の設定",
  "id": "whatap-phpのサービス環境変数の設定-1",
  "level": 4
}, {
  "value": "whatap.ini設定",
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
        children: "PHP拡張モジュールおよびwhatap-phpサービスの手動設定"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["PHP拡張モジュールとwhatap-phpサービスのインストールおよびオプションのインストール(", (0,jsx_runtime.jsx)(_components.em, {
          children: "install.sh"
        }), ")が正しく動作しない場合の手動で設定する方法を説明します。PHPコンパイルのインストールなど、環境情報が確認できない場合に使用してください。"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "whatapini作成",
        children: "whatap.ini作成"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "$ cp /usr/whatap/php/template.ini /usr/whatap/php/whatap.ini\r\n$ vi /usr/whatap/php/whatap.ini\r\n\r\n# 上部に内容を追加\r\n; Enable whatap extension module\r\nextension=whatap.so\r\nwhatap.license=            # 発行されたアクセスキー\r\nwhatap.server.host=        # #発行されたサーバーIP\r\nwhatap.app_name=           # Webサーバー区分APHP、FPHP (apache : APHP, php-fpm : FPHP)\r\nwhatap.app_process_name=   # apache, php-fpmのプロセス名(httpd,php-fpm)\n"
        })
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "設定"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "説明"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "whatap.license"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.em, {
                  children: "プロジェクトメニュー"
                })
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.em, {
                  children: "管理"
                })
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.em, {
                  children: "エージェントインストール"
                })
              }), "ページで発行されたアクセスキーを確認できます。"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "whatap.server.host"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.em, {
                  children: "プロジェクトメニュー"
                })
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.em, {
                  children: "管理"
                })
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.em, {
                  children: "エージェントインストール"
                })
              }), "ページで発行されたサーバーのIPを確認できます。"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "whatap.app_name"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Apacheサーバーは、", (0,jsx_runtime.jsx)(_components.code, {
                children: "APHP"
              }), "を使用し、php-fpmは、", (0,jsx_runtime.jsx)(_components.code, {
                children: "FPHP"
              }), "を使用します。"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "whatap.app_process_name"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Apacheまたはphp-fpmで実行可能なプロセス名を設定して正しいプロセス名を入力すると、そのプロセスに使用されるメモリが収集されます。例として、", (0,jsx_runtime.jsx)(_components.code, {
                children: "httpd"
              }), "、", (0,jsx_runtime.jsx)(_components.code, {
                children: "apache2"
              }), "、", (0,jsx_runtime.jsx)(_components.code, {
                children: "php-fpm"
              }), "などが挙げられます。"]
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "check-php-cli-path",
        children: "PHPコマンド(CLI) パスの確認"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "$ which php\r\n\r\n/usr/bin/php\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "whatap-phpのサービス環境変数の設定",
        children: "whatap-phpのサービス環境変数の設定"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "$WHATAP_PHP_BIN"
        }), "環境変数にPHP CLIコマンドパスを設定します。"]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "$ sudo vi /etc/init.d/whatap-php\r\n\r\nexport WHATAP_PHP_BIN=    # PHP コマンドの場所(/usr/bin/php)\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "php-apiバージョンの確認",
        children: "PHP APIバージョンの確認"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "$WHATAP_PHP_BIN"
        }), "環境変数にPHP CLIコマンドパスを設定します。"]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "$ sudo php -i | grep 'PHP API'\r\n\r\nPHP API => 20100412\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "php-ztszend-thread-safe-サポート有無の確認",
        children: "PHP ZTS(Zend Thread Safe) サポート有無の確認"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=apache",
          children: "$ sudo apachectl -V | grep MPM\r\n\r\nServer MPM: Prefork      # ZTSサポート無し\r\nServer MPM: Worker       # ZTSサポート\n"
        })
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=PHP-FPM",
          children: "$ sudo php-fpm -i | grep Thread\r\n\r\nThread Safety => disabled       # ZTS非対応\r\nThread Safety => enabled       \t# ZTS対応\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,jsx_runtime.jsx)(_components.h3, {
        id: "php拡張モジュールのパスを確認して設定",
        children: "PHP拡張モジュールのパスを確認して設定"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "check-php-extension-module",
        children: "PHP拡張モジュールパスの確認"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "$ sudo php -i | grep extension_dir\r\n\r\nextension_dir => /usr/lib64/php/modules => /usr/lib64/php/modules\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "php拡張モジュールの設定",
        children: "PHP拡張モジュールの設定"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["PHP APIバージョン、PHP ZTSのサポートを確認して、環境に適したライブラリを選択してください。PHP拡張モジュール(PHP Extension module) パスに", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.so"
        }), "ファイル名をコピーします。"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["PHP ZTSにサポートされている場合 - ", (0,jsx_runtime.jsx)(_components.em, {
            children: "whatap_zts_[PHP APIバージョン].so"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["PHP ZTSにサポートされていない場合 - ", (0,jsx_runtime.jsx)(_components.em, {
            children: "whatap_[PHP APIバージョン].so"
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              children: "# PHP ZTSをサポートしていない場合の例\r\n$ sudo cp /usr/whatap/php/modules/x64/whatap_20100412.so /usr/lib64/php/modules/whatap.so\n"
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "whatap-phpのサービス環境変数の設定-1",
        children: "whatap-phpのサービス環境変数の設定"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "$ sudo vi /etc/init.d/whatap-php\r\n\r\nexport WHATAP_PHP_EXT_HOME=   # PHP Extensionパス(/usr/lib64/php/modules)\r\nexport WHATAP_PHP_EXT_SRC=    # WhaTapライブラリパスおよびファイル名\r\n                              # (/usr/whatap/php/modules/x64/whatap_20100412.so)]\n"
        })
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "$WHATAP_PHP_EXT_HOME"
          }), "環境変数にPHP拡張モジュールパスを設定します。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "$WHATAP_PHP_EXT_SRC"
          }), "環境変数にWhaTapライブラリ全体のファイルパスを設定します。"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "php-ini-path",
        children: "whatap.ini設定"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "PHP追加のini設定パスを確認します。"
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              children: "$ sudo php -i | grep '.ini files'\r\n\r\nScan this dir for additional .ini files => /etc/php.d\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: "whatap.ini"
            }), "をそのパスにコピーします。"]
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_php-ini-path-error.mdx


const _php_ini_path_error_frontMatter = {};
const _php_ini_path_error_contentTitle = (/* unused pure expression or super */ null && (undefined));



/*문제 해결 페이지의 수동 설정?*/
/*명령어 경로 확인 후 확장 모듈과 서비스 선택 설치가 진행되는 순서가 필요한지?*/
/*\* [PHP 명령어(CLI)의 위치](#php-명령어cli-경로-확인)를 정확히 확인하세요.

- [PHP 확장 모듈 및 whatap-php 서비스 선택 설치](#php-확장-모듈-및-whatap-php-서비스-수동-설정) 항목을 진행하세요.*/


const _php_ini_path_error_toc = [{
  "value": "PHPの追加ini設定パスの確認不可",
  "id": "phpの追加ini設定パスの確認不可",
  "level": 2
}, {
  "value": "whatap-phpのサービス(Service) 環境変数設定",
  "id": "whatap-phpのサービスservice-環境変数設定",
  "level": 3
}, {
  "value": "サービスの再起動",
  "id": "サービスの再起動",
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
        id: "phpの追加ini設定パスの確認不可",
        children: "PHPの追加ini設定パスの確認不可"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["PHPコンパイル(Compile) インストールオプション --", (0,jsx_runtime.jsx)(_components.code, {
          children: "--with-config-file-scan-dir=PATH"
        }), " が設定されていない場合に発生します。"]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "$ sudo php -i | grep '.ini files'\r\n\r\nScan this dir for additional .ini files => (none)\n"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.ini"
        }), "ファイルの内容を", (0,jsx_runtime.jsx)(_components.em, {
          children: "php.ini"
        }), "の末尾に追加します。"]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "$ php -i | grep 'php.ini'\r\n\r\nLoaded Configuration File => /etc/php.ini\r\n\r\n$ sudo vi php.ini\r\n\r\n# ファイルの最後に追加\r\n[whatap]\r\n;Enable whatap extension module\r\nextension=whatap.so\r\nwhatap.ext.error_enabled=true\r\nwhatap.ext.exception_enabled=true\r\nwhatap.trace_user_enabled=true\r\nwhatap.trace_user_using_ip=false\n"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "その他のオプションは、_/usr/whatap/php/whatap.ini_を使用してください。"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "whatap-phpのサービスservice-環境変数設定",
        children: "whatap-phpのサービス(Service) 環境変数設定"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "$WHATAP_CONFIG_HOME"
        }), "環境変数に", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.ini"
        }), "パスを選択します。"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["PHPの追加iniパスを確認できない場合は、", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.ini"
        }), "で作成した*/usr/whatap/php*パスを設定してください。"]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "$ sudo vi /etc/init.d/whatap-php\r\n\r\nexport WHATAP_CONFIG_HOME=      # whatap.iniパス(/etc/php.d)\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "サービスの再起動",
        children: "サービスの再起動"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "ApacheおよびPHP-FRMサービスを再起動します。"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "whatap-phpサービスを再起動します。"
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "error-not-found-php-api",
        children: "Error: Not found PHP API"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "PHP コマンド(CLI)が見つからない場合に発生します。"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#check-php-cli-path",
          children: "PHPコマンド(CLI)の位置"
        }), "を確認した上で、", (0,jsx_runtime.jsx)(_components.a, {
          href: "#extension-modul-manual-setting",
          children: "PHP拡張モジュールおよびwhatap-phpサービス選択インストール"
        }), "項目を進めてください。"]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='Check PHP API version'",
          children: "$ sudo php -i | grep 'PHP API'\r\n\r\nPHP API => 20100412\n"
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_php-error-not-found-php-ini-dir.mdx


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
      children: ["PHP環境の中で", (0,jsx_runtime.jsx)(_components.code, {
        children: "Scan this dir for additional .ini files"
      }), "項目の値を確認できなかった場合に発生します。PHPコンパイルインストールオプション", (0,jsx_runtime.jsx)(_components.code, {
        children: "--with-config-file-scan-dir=PATH"
      }), "が設定されていない場合、対応できる環境はありません。"]
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["次の説明書を参照して、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#check-php-cli-path",
        children: "PHPコマンド（CLI）の正しい場所"
      }), "を確認した上で、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#extension-modul-manual-setting",
        children: "PHP拡張モジュールおよびwhatap-phpサービス選択インストール"
      }), "に進みます。"]
    }), (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "$ sudo php -i | grep '.ini files'\r\n\r\nScan this dir for additional .ini files => (none)\n"
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_php-hitmap-error.mdx


const _php_hitmap_error_frontMatter = {};
const _php_hitmap_error_contentTitle = (/* unused pure expression or super */ null && (undefined));



/*위 항목의 포함관계 검토 필요*/


const _php_hitmap_error_toc = [{
  "value": "応答時間分布表にトランザクションが表示されない場合",
  "id": "応答時間分布表にトランザクションが表示されない場合",
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
      id: "応答時間分布表にトランザクションが表示されない場合",
      children: "応答時間分布表にトランザクションが表示されない場合"
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: "CPUとメモリのグラフは表示されるが、次の場合は応答時間分布 (ヒットマップ) が表示されません。"
    }), (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "エージェントは、収集サーバーに正常に接続されましたが、トレーサーは、PHP拡張モジュールに正常に適用されませんでした。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "セットアップ後にApache および PHP-FPM サービスを再起動していない場合"
      }), "\n"]
    }), (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "PHP 拡張モジュールが適用されていることを確認します。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "$ sudo php -m\r\n\r\n[PHP Modules]\r\nbz2\r\ncalendar\r\nCore\r\nctype\r\ncurl\r\ndate\r\n…\r\nwhatap               # WhaTapモジュールの読み込みを確認\r\n…\r\n[Zend Modules]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ApacheおよびPHP-FRMサービスを再起動します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["PHP拡張モジュールが適用されていない場合は、正常にインストールされません。", (0,jsx_runtime.jsx)(_components.em, {
            children: "whatap.so"
          }), "または", (0,jsx_runtime.jsx)(_components.em, {
            children: "whatap.ini"
          }), "ファイルパスがPHP環境と一致していることを確認してください。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["次の説明書を参照して、", (0,jsx_runtime.jsx)(_components.a, {
            href: "#check-php-cli-path",
            children: "PHPコマンド(CLI) パス"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "#check-php-extension-module",
            children: "PHP拡張モジュールパス"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "#php-ini-path",
            children: "PHP追加ini設定パス"
          }), " の項目を確認してください。"]
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_php-sig-error.mdx


const _php_sig_error_frontMatter = {};
const _php_sig_error_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _php_sig_error_toc = [{
  "value": "Segmentation fault, Sig bus error",
  "id": "segmentation-fault-sig-bus-error",
  "level": 2
}, {
  "value": "Core Dump設定",
  "id": "core-dump設定",
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
        children: "PHPモニタリングを適用した後、サービスにエラーが発生した場合、ApacheまたはPHP-FPMのerror logを確認してください。"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["error log に", (0,jsx_runtime.jsx)(_components.code, {
          children: "segmentation fault"
        }), "、", (0,jsx_runtime.jsx)(_components.code, {
          children: "sig bus"
        }), "などのエラー文があるか確認してください。", (0,jsx_runtime.jsx)(_components.code, {
          children: "kill child process"
        }), "、", (0,jsx_runtime.jsx)(_components.code, {
          children: "exit child"
        }), "、", (0,jsx_runtime.jsx)(_components.code, {
          children: "exit process"
        }), "などのメッセージが発生します。"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["当該エラーが発生する場合は、PHP Extensionモジュールである", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.so"
        }), "モジュールで衝突が発生すると考えられます。PHP Extensionモジュールである", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.so"
        }), "を中止した上でApacheまたはPHP-FPMを再起動してください。"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["サービスに影響しない環境でApacheおよびPHP-FPMに", (0,jsx_runtime.jsx)(_components.code, {
          children: "Core dump"
        }), "設定を追加した後に ", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.so"
        }), "を再読み込みしてください。その後、エラーが発生すると、", (0,jsx_runtime.jsx)(_components.em, {
          children: "dump"
        }), "ファイルが作成されます。", (0,jsx_runtime.jsx)(_components.em, {
          children: "dump"
        }), "ファイルをgdbで分析して原因を解決してください。"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "core-dump設定",
        children: "Core Dump設定"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: "dump"
            }), "ファイルを作成するディレクトリのアクセス権限を付与します。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-java",
              children: "chmod 0777 /home/httpd-core\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "システム設定をしてください。"
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-java",
              children: "ulimit -c unlimited\r\nsysctl fs.suid_dumpable=2\r\nsysctl kernel.core_uses_pid=0\r\nsysctl kernel.core_pattern='| /home/httpd-core/core-%e.%p'\n"
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
            children: "Apache confにCoreDumpDirectory項目を設定してください。"
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-java",
              children: "vi /etc/httpd/conf/httpd.conf\r\n\r\nCoreDumpDirectory /home/httpd-core\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Apacheを再起動すると、設定は完了です。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["エラーが発生すると", (0,jsx_runtime.jsx)(_components.em, {
              children: "dump"
            }), "ファイルが作成されます。", (0,jsx_runtime.jsx)(_components.em, {
              children: "dump"
            }), "ファイルが生成されると、gdbを使用してエラーの原因を確認します。", (0,jsx_runtime.jsx)(_components.code, {
              children: "bt full"
            }), "コマンドを使用して、全体スタックの情報を確認してください。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-java",
              children: "# gdb /usr/sbin/httpd /home/httpd-core/core-httpd.31832\r\n...\r\n...\r\n\r\n> bt full\n"
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
            children: ["FPM設定ファイルに", (0,jsx_runtime.jsx)(_components.code, {
              children: "rlimit_core"
            }), "を設定してください。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-java",
              children: "rlimit_core = unlimited\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "PHP-FPMを再起動すると、設定は完了です。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["エラーが発生すると", (0,jsx_runtime.jsx)(_components.em, {
              children: "dump"
            }), "ファイルが作成されます。", (0,jsx_runtime.jsx)(_components.em, {
              children: "dump"
            }), "ファイルが生成されると、gdbを通じてエラーの原因を確認します。", (0,jsx_runtime.jsx)(_components.code, {
              children: "bt full"
            }), "コマンドで全体スタックの情報を確認してください。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-java",
              children: "# gdb /usr/sbin/php-fpm /home/httpd-core/core-php-fpm.31832\r\n...\r\n...\r\n\r\n> bt full\n"
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/php/agent-troubleshooting.mdx


const agent_troubleshooting_frontMatter = {
	id: 'agent-troubleshooting',
	title: 'インストール問題の解決',
	description: 'PHPエージェントのインストール時、発生する可能性のある問題を確認できます。',
	toc_max_heading_level: 2,
	tags: [
		'PHP',
		'PHPモニタリング',
		'アプリケーション',
		'アプリケーションモニタリング',
		'Troubleshooting',
		'問題解決'
	]
};
const agent_troubleshooting_contentTitle = undefined;
const metadata = {
  "id": "php/agent-troubleshooting",
  "title": "インストール問題の解決",
  "description": "PHPエージェントのインストール時、発生する可能性のある問題を確認できます。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/php/agent-troubleshooting.mdx",
  "sourceDirName": "php",
  "slug": "/php/agent-troubleshooting",
  "permalink": "/ja/php/agent-troubleshooting",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/php/agent-troubleshooting.mdx",
  "tags": [
    {
      "inline": true,
      "label": "PHP",
      "permalink": "/ja/tags/php"
    },
    {
      "inline": true,
      "label": "PHPモニタリング",
      "permalink": "/ja/tags/phpモニタリング"
    },
    {
      "inline": true,
      "label": "アプリケーション",
      "permalink": "/ja/tags/アプリケーション"
    },
    {
      "inline": true,
      "label": "アプリケーションモニタリング",
      "permalink": "/ja/tags/アプリケーションモニタリング"
    },
    {
      "inline": true,
      "label": "Troubleshooting",
      "permalink": "/ja/tags/troubleshooting"
    },
    {
      "inline": true,
      "label": "問題解決",
      "permalink": "/ja/tags/問題解決"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "agent-troubleshooting",
    "title": "インストール問題の解決",
    "description": "PHPエージェントのインストール時、発生する可能性のある問題を確認できます。",
    "toc_max_heading_level": 2,
    "tags": [
      "PHP",
      "PHPモニタリング",
      "アプリケーション",
      "アプリケーションモニタリング",
      "Troubleshooting",
      "問題解決"
    ]
  },
  "sidebar": "phpSidebar",
  "previous": {
    "title": "설치 점검",
    "permalink": "/ja/php/install-check"
  },
  "next": {
    "title": "PHPエージェントの設定",
    "permalink": "/ja/php/set-agent"
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