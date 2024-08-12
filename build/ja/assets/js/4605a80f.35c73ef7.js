"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[93717],{

/***/ 24514:
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
  "value": "ファイアウォール設定の確認",
  "id": "ファイアウォール設定の確認",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "ファイアウォール設定の確認",
      children: "ファイアウォール設定の確認"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["WhaTapのデータ収集サーバーにTCPアウトバウンドポリシーを設定しない場合、モニタリング情報を送信できません。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "ファイアウォール遮断"
      }), "を", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "解除"
      }), "してください。"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "telnet"
      }), "コマンドを使用して、\"Connected to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "IP"
      }), "\"を確認します。"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-sh",
        children: "$ telnet 52.193.60.176 6600\r\nTrying 52.193.60.176...\r\nConnected to 52.193.60.176.\r\nEscape character is '^]'.\n"
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["収集サーバーの情報は、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://service.whatap.io/",
          children: "WhaTapモニタリングサービス"
        }), "からプロジェクトを選択した後、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "管理"
          })
        }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "エージェントインストール"
          })
        }), " メニューから確認できます。"]
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



/***/ }),

/***/ 14029:
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
// EXTERNAL MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_check-firewall.mdx
var _check_firewall = __webpack_require__(24514);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_springboot-jmx-off.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "SpringBoot2.2以降、Tomcat JMXのOFF状態",
  "id": "springboot22以降tomcat-jmxのoff状態",
  "level": 2
}];
function _createMdxContent(props) {
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
      id: "springboot22以降tomcat-jmxのoff状態",
      children: "SpringBoot2.2以降、Tomcat JMXのOFF状態"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SpringBoot 2.2バージョン以降でEmbedded Tomcatを使用する場合、既定値としてJMX関連の機能が動作しません。この場合、JMX機能を有効してください。", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.2-Release-Notes#jmx-now-disabled-by-default",
        children: "関連リンク"
      })]
    }), (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        metastring: "title='application.properties'",
        children: "spring.jmx.enabled=true\r\nserver.tomcat.mbeanregistry.enabled=true # tomcat embeddedの場合 #\n"
      })
    }), (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yml",
        metastring: "title='application.yml'",
        children: "spring:\r\n  jmx:\r\n    enabled: true\r\nserver:\r\n  tomcat:\r\n    mbeanregistry:\r\n      enabled: true #tomcat embeddedの場合\n"
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_osgi-framework.mdx


const _osgi_framework_frontMatter = {};
const _osgi_framework_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _osgi_framework_toc = [{
  "value": "OSGI フレームワーク対応アプリケーション・サーバーの場合",
  "id": "osgi-フレームワーク対応アプリケーションサーバーの場合",
  "level": 2
}, {
  "value": "JBoss AS, Wildfly, JBoss EAP6.0以降",
  "id": "jboss-as-wildfly-jboss-eap60以降",
  "level": 3
}, {
  "value": "WebSphere",
  "id": "websphere",
  "level": 3
}];
function _osgi_framework_createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
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
        id: "osgi-フレームワーク対応アプリケーションサーバーの場合",
        children: "OSGI フレームワーク対応アプリケーション・サーバーの場合"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "OSGIフレームワーク構造を持つアプリケーション・サーバーの場合は、JVMオプションにエージェント・パッケージプリフィックス(whatap)を登録します。"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "JBoss EAP6.0以降、 Jboss AS7.0以降、 Wildfly 8.0以降、IBM WebSphere AS 7.0以降が含まれます。"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "jboss-as-wildfly-jboss-eap60以降",
        children: "JBoss AS, Wildfly, JBoss EAP6.0以降"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "次のファイルにプレフィックスを登録します。"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-apacheconf",
          metastring: "title='$JBOSS_HOME/bin/standalone.conf(domain.conf)'",
          children: "-Djboss.modules.system.pkgs=whatap\n"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          src: "https://img.whatap.io/media/agent_java/install/410.png",
          alt: "JBOSS EAP 7.0"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "websphere",
        children: "WebSphere"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "JVM オプションとして、以下を追加します。"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "-Dcom.ibm.ws.classloader.server.alwaysAllowedPackages=whatap\n"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "既定値として '*' で指定されている場合、設定は必要ありません。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["設定位置は、", (0,jsx_runtime.jsx)(_components.a, {
            href: "add-jvm-opt/websphere",
            children: "WebSphere"
          }), "を参照してください。"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "security.policy"
        }), "権限を次のように追加してください。"]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-java",
          metastring: "title='$WEBSPHERE_HOME/properties/server.policy || $WEBSPHERE_PROFILE_HOME/properties/server.policy'",
          children: "grant codeBase \"file:$WHATAP_HOME/-\"\r\n{\r\n   permission java.security.AllPermission;\r\n};\n"
        })
      })]
    })]
  });
}
function _osgi_framework_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_osgi_framework_createMdxContent, {
      ...props
    })
  }) : _osgi_framework_createMdxContent(props);
}


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_log-manager-error.mdx


const _log_manager_error_frontMatter = {};
const _log_manager_error_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _log_manager_error_toc = [{
  "value": "Log Manager関連エラー",
  "id": "log-manager関連エラー",
  "level": 2
}];
function _log_manager_error_createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
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
      id: "log-manager関連エラー",
      children: "Log Manager関連エラー"
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: "JBoss ASバージョン7.0以降、JBoss EAPバージョン6.0以降でLog Manager関連エラーが発生した場合、JVM オプションを追加します。"
    }), (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "-Djava.util.logging.manager"
        }), "項目にLog Manager package名を設定してください。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "-Xbootclassloader"
        }), "項目にJoboss Log Manager JAR fileを設定してください。"]
      }), "\n"]
    }), (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-apacheconf",
        metastring: "title='(JBoss_Path)/bin/standalone.conf(domain.conf)' {4,12,13} showLineNumbers",
        children: "# Specify the exact Java VM executable to use.\r\n#\r\nif [ \"x$JBOSS_MODULES_SYSTEM_PKGS\" = \"x\" ]; then\r\n    JBOSS_MODULES_SYSTEM_PKGS=\"org.jboss.byteman,org.jboss.logmanager,whatap\"\r\nfi\r\n\r\n...\r\n# Specify options to pass to the Java VM.\r\n#\r\nif [ \"x$JAVA_OPTS\" = \"x\" ]; then\r\n    JAVA_OPTS=\"-Xms1303m -Xmx1303m -Djava.net.preferIPv4Stack=true\"\r\n    JAVA_OPTS=\"$JAVA_OPTS -Djboss.modules.system.pkgs=$JBOSS_MODULES_SYSTEM_PKGS -Djava.awt.headless=true\"\r\n    JAVA_OPTS=\"$JAVA_OPTS -Djava.util.logging.manager=org.jboss.logmanager.LogManager -Xbootclasspath/p:/home/vagrant/EAP-7.0.0/modules/system/layers/base/org/jboss/logmanager/main/jboss-logmanager-2.0.3.Final-redhat-1.jar\"\r\nelse\r\n    echo \"JAVA_OPTS already set in environment; overriding default settings with values: $JAVA_OPTS\"\r\nfi\n"
      })
    })]
  });
}
function _log_manager_error_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_log_manager_error_createMdxContent, {
      ...props
    })
  }) : _log_manager_error_createMdxContent(props);
}


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_mbeanserverbuilder-error.mdx


const _mbeanserverbuilder_error_frontMatter = {};
const _mbeanserverbuilder_error_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _mbeanserverbuilder_error_toc = [{
  "value": "MBeanServerBuilderエラーが発生した場合",
  "id": "mbeanserverbuilderエラーが発生した場合",
  "level": 2
}];
function _mbeanserverbuilder_error_createMdxContent(props) {
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
      id: "mbeanserverbuilderエラーが発生した場合",
      children: "MBeanServerBuilderエラーが発生した場合"
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: "JBoss5.0以下のバージョンからMBeanServerBuilder関連エラーが出力された場合、JVMオプションを追加してください。"
    }), (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-apacheconf",
        metastring: "title='(JBoss_Path)/bin/run.conf' {5} showLineNumbers",
        children: "# Specify options to pass to the Java VM.\r\n#\r\nif [ \"x$JAVA_OPTS\" = \"x\" ]; then\r\n   JAVA_OPTS=\"-Xms128m -Xmx512m -XX:MaxPermSize=256m -Dorg.jboss.resolver.warning=true -Dsun.rmi.dgc.client.gcInterval=3600000 -Dsun.rmi.dgc.server.gcInterval=3600000\"\r\n   JAVA_OPTS=\"$JAVA_OPTS -Djboss.platform.mbeanserver\"\r\nfi\n"
      })
    })]
  });
}
function _mbeanserverbuilder_error_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_mbeanserverbuilder_error_createMdxContent, {
      ...props
    })
  }) : _mbeanserverbuilder_error_createMdxContent(props);
}


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_permission-error.mdx


const _permission_error_frontMatter = {};
const _permission_error_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _permission_error_toc = [{
  "value": "Permissionエラーが発生した場合",
  "id": "permissionエラーが発生した場合",
  "level": 2
}, {
  "value": "java.io.FilePermissionエラーが発生した場合",
  "id": "javaiofilepermissionエラーが発生した場合",
  "level": 3
}, {
  "value": "java.util.PropertyPermissionエラーが発生した場合",
  "id": "javautilpropertypermissionエラーが発生した場合",
  "level": 3
}];
function _permission_error_createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
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
        id: "permissionエラーが発生した場合",
        children: "Permissionエラーが発生した場合"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Java Security Policyに関連するエラーが発生すると、_$JAVA_HOME/jre/lib/security/java.policy_ファイルに権限設定を追加してください。"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["すべての権限を一括で適用するには、次のように", (0,jsx_runtime.jsx)(_components.em, {
          children: "java.policy"
        }), "ファイルに設定を追加します。"]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-java",
          metastring: "title='$JAVA_HOME/jre/lib/security/java.policy'",
          children: "grant {\r\n   permission java.security.AllPermission;\r\n};\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "javaiofilepermissionエラーが発生した場合",
        children: "java.io.FilePermissionエラーが発生した場合"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "java.io.FilePermision error",
          src: (__webpack_require__(69339)/* ["default"] */ .A) + "",
          width: "883",
          height: "185"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["次のように", (0,jsx_runtime.jsx)(_components.em, {
          children: "java.policy"
        }), "ファイルに設定を追加します。"]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-java",
          metastring: "title='$JAVA_HOME/jre/lib/security/java.policy'",
          children: "grant {\r\n   ...\r\n   permission java.io.FilePermission {エラーメッセージから確認されたパッケージパス}, \"read\"\r\n};\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "javautilpropertypermissionエラーが発生した場合",
        children: "java.util.PropertyPermissionエラーが発生した場合"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["次のように", (0,jsx_runtime.jsx)(_components.em, {
          children: "java.policy"
        }), "ファイルに設定を追加します。"]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-java",
          metastring: "title='$JAVA_HOME/jre/lib/security/java.policy'",
          children: "grant {\r\n   ...\r\n   permission java.util.PropertyPermission {エラーメッセージから確認されたパッケージパス}, \"read\"\r\n};\n"
        })
      })]
    })]
  });
}
function _permission_error_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_permission_error_createMdxContent, {
      ...props
    })
  }) : _permission_error_createMdxContent(props);
}


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_sigar-library-error.mdx


const _sigar_library_error_frontMatter = {};
const _sigar_library_error_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _sigar_library_error_toc = [{
  "value": "Sigar libraryをロードできない場合",
  "id": "sigar-libraryをロードできない場合",
  "level": 2
}];
function _sigar_library_error_createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    img: "img",
    p: "p",
    pre: "pre",
    section: "section",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "sigar-libraryをロードできない場合",
      children: "Sigar libraryをロードできない場合"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)("em", {
        children: "$WHATAP_HOME/lib1/*.so"
      }), "ファイルに実行権限があることを確認してください。アクセス権限がない場合は、実行するアクセス権限を付与してください。"]
    }), (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "$ sudo chmod +x *.so\n"
      })
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AIX7で*$WHATAP_HOME/lib1", (0,jsx_runtime.jsx)(_components.em, {
        children: "以下の階層に"
      }), "libsigar-ppc64-aix-7.so*ファイルが存在しないエラーが発生した場合は、そのファイルをコピーしてください。"]
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Sigar library error on AIX 7",
        src: (__webpack_require__(6560)/* ["default"] */ .A) + "",
        width: "883",
        height: "185"
      })
    }), (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "$ cp libsigar-ppc64-aix-5.so libsigar-ppc64-aix-7.so\n"
      })
    })]
  });
}
function _sigar_library_error_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_sigar_library_error_createMdxContent, {
      ...props
    })
  }) : _sigar_library_error_createMdxContent(props);
}


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/java/agent-troubleshooting.mdx


const agent_troubleshooting_frontMatter = {
	id: 'agent-troubleshooting',
	title: 'インストール問題の解決',
	description: 'Javaエージェントのインストール時に発生しうる様々な問題と、これを解決するための具体的な指針を提供します。ファイアウォールの設定、SpringBootとTomcat JMXの設定、OSGIフレームワーク使用サーバーの設定、Log ManagerとMBeanServerBuilderのエラー、Permissionのエラー、Sigarライブラリの問題など、様々な状況に対する解決策を案内します。',
	toc_max_heading_level: 2,
	tags: [
		'Java',
		'Troubleshooting',
		'問題解決'
	]
};
const agent_troubleshooting_contentTitle = undefined;
const metadata = {
  "id": "java/agent-troubleshooting",
  "title": "インストール問題の解決",
  "description": "Javaエージェントのインストール時に発生しうる様々な問題と、これを解決するための具体的な指針を提供します。ファイアウォールの設定、SpringBootとTomcat JMXの設定、OSGIフレームワーク使用サーバーの設定、Log ManagerとMBeanServerBuilderのエラー、Permissionのエラー、Sigarライブラリの問題など、様々な状況に対する解決策を案内します。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/java/agent-troubleshooting.mdx",
  "sourceDirName": "java",
  "slug": "/java/agent-troubleshooting",
  "permalink": "/ja/java/agent-troubleshooting",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/java/agent-troubleshooting.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Java",
      "permalink": "/ja/tags/java"
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
    "description": "Javaエージェントのインストール時に発生しうる様々な問題と、これを解決するための具体的な指針を提供します。ファイアウォールの設定、SpringBootとTomcat JMXの設定、OSGIフレームワーク使用サーバーの設定、Log ManagerとMBeanServerBuilderのエラー、Permissionのエラー、Sigarライブラリの問題など、様々な状況に対する解決策を案内します。",
    "toc_max_heading_level": 2,
    "tags": [
      "Java",
      "Troubleshooting",
      "問題解決"
    ]
  },
  "sidebar": "javaSidebar",
  "previous": {
    "title": "インストールチェックリスト",
    "permalink": "/ja/java/install-check"
  },
  "next": {
    "title": "エージェント設定",
    "permalink": "/ja/java/set-agent"
  }
};
const assets = {

};










const agent_troubleshooting_toc = [..._check_firewall/* toc */.RM, ...toc, ..._osgi_framework_toc, ..._log_manager_error_toc, ..._mbeanserverbuilder_error_toc, ..._permission_error_toc, ..._sigar_library_error_toc];
function agent_troubleshooting_createMdxContent(props) {
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_check_firewall/* default */.Ay, {}), "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {}), "\n", "\n", (0,jsx_runtime.jsx)(_osgi_framework_MDXContent, {}), "\n", "\n", (0,jsx_runtime.jsx)(_log_manager_error_MDXContent, {}), "\n", "\n", (0,jsx_runtime.jsx)(_mbeanserverbuilder_error_MDXContent, {}), "\n", "\n", (0,jsx_runtime.jsx)(_permission_error_MDXContent, {}), "\n", "\n", (0,jsx_runtime.jsx)(_sigar_library_error_MDXContent, {})]
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

/***/ 69339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/troubleshooting-permission-error-4d8210609932d8b7a2d2121045758cd9.png");

/***/ }),

/***/ 6560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/troubleshooting-sigar-error-4d8210609932d8b7a2d2121045758cd9.png");

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