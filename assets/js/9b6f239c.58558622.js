"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["67195"], {
"68890": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "방화벽 설정 확인",
  "id": "방화벽-설정-확인",
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
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "방화벽-설정-확인",
      children: "방화벽 설정 확인"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["와탭의 데이터 수집 서버에 대한 TCP 아웃바운드 정책을 설정하지 않으면 모니터링 정보를 전송할 수 없습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "방화벽 차단"
      }), "을 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "해제"
      }), "하세요."]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "telnet"
      }), " 명령을 사용해 \"Connected to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "IP"
      }), "\"를 확인하세요."]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-sh",
        children: "$ telnet 52.193.60.176 6600\nTrying 52.193.60.176...\nConnected to 52.193.60.176.\nEscape character is '^]'.\n"
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["수집 서버 정보는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://service.whatap.io/",
          children: "와탭 모니터링 서비스"
        }), "에서 해당 프로젝트를 선택한 다음 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "관리"
          })
        }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "에이전트 설치"
          })
        }), " 메뉴에서 확인할 수 있습니다."]
      })
    })]
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
"47059": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_java_agent_troubleshooting_mdx_9b6_namespaceObject),
  contentTitle: () => (/* binding */ agent_troubleshooting_contentTitle),
  "default": () => (/* binding */ agent_troubleshooting_MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ agent_troubleshooting_toc),
  frontMatter: () => (/* binding */ agent_troubleshooting_frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-java-agent-troubleshooting-mdx-9b6.json
var site_docs_java_agent_troubleshooting_mdx_9b6_namespaceObject = JSON.parse('{"id":"java/agent-troubleshooting","title":"설치 문제 해결","description":"자바(Java) 에이전트 설치 시 발생할 수 있는 다양한 문제들과 이를 해결하기 위한 구체적인 지침을 제공합니다. 방화벽 설정, SpringBoot 및 Tomcat JMX 설정, OSGI 프레임워크 사용 서버 설정, Log Manager 및 MBeanServerBuilder 에러, Permission 오류, Sigar 라이브러리 문제 등 다양한 상황에 대한 해결책을 안내합니다.","source":"@site/docs/java/agent-troubleshooting.mdx","sourceDirName":"java","slug":"/java/agent-troubleshooting","permalink":"/java/agent-troubleshooting","draft":false,"unlisted":false,"editUrl":"undefined/docs/java/agent-troubleshooting.mdx","tags":[],"version":"current","frontMatter":{"id":"agent-troubleshooting","title":"설치 문제 해결","description":"자바(Java) 에이전트 설치 시 발생할 수 있는 다양한 문제들과 이를 해결하기 위한 구체적인 지침을 제공합니다. 방화벽 설정, SpringBoot 및 Tomcat JMX 설정, OSGI 프레임워크 사용 서버 설정, Log Manager 및 MBeanServerBuilder 에러, Permission 오류, Sigar 라이브러리 문제 등 다양한 상황에 대한 해결책을 안내합니다.","toc_max_heading_level":2,"keywords":["Java","Troubleshooting","문제 해결"],"isTranslationMissing":false},"sidebar":"javaSidebar","previous":{"title":"설치 점검 사항","permalink":"/java/install-check"},"next":{"title":"에이전트 설정","permalink":"/java/set-agent"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./docs/common-items/_check-firewall.mdx
var _check_firewall = __webpack_require__("68890");
;// CONCATENATED MODULE: ./docs/common-items/_springboot-jmx-off.mdx


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "SpringBoot 2.2 버전 이상, Tomcat JMX가 off 상태",
  "id": "springboot-22-버전-이상-tomcat-jmx가-off-상태",
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
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "springboot-22-버전-이상-tomcat-jmx가-off-상태",
      children: "SpringBoot 2.2 버전 이상, Tomcat JMX가 off 상태"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SpringBoot 2.2 버전 이상에서 Embedded Tomcat을 사용하는 경우 기본값으로 JMX 관련 기능이 동작하지 않습니다. 이 경우 JMX 기능을 활성화하세요. ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.2-Release-Notes#jmx-now-disabled-by-default",
        children: "관련 링크"
      })]
    }), (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        metastring: "title='application.properties'",
        children: "spring.jmx.enabled=true\nserver.tomcat.mbeanregistry.enabled=true # tomcat embedded인 경우 #\n"
      })
    }), (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yml",
        metastring: "title='application.yml'",
        children: "spring:\n  jmx:\n    enabled: true\nserver:\n  tomcat:\n    mbeanregistry:\n      enabled: true #tomcat embedded인 경우\n"
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


;// CONCATENATED MODULE: ./docs/common-items/_osgi-framework.mdx


const _osgi_framework_frontMatter = (/* unused pure expression or super */ null && ({}));
const _osgi_framework_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _osgi_framework_toc = [{
  "value": "OSGI 프레임워크 사용 애플리케이션 서버의 경우",
  "id": "osgi-프레임워크-사용-애플리케이션-서버의-경우",
  "level": 2
}, {
  "value": "JBoss AS, Wildfly, JBoss EAP 6.0 이상",
  "id": "jboss-as-wildfly-jboss-eap-60-이상",
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
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "osgi-프레임워크-사용-애플리케이션-서버의-경우",
        children: "OSGI 프레임워크 사용 애플리케이션 서버의 경우"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "OSGI 프레임워크 구조의 애플리케이션 서버인 경우 JVM 옵션에 에이전트 패키지 prefix(whatap)를 등록하세요."
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Jboss EAP 6.0 버전 이상, Jboss AS 7.0 버전 이상, Wildfly 8.0 버전 이상, IBM WebSphere AS 7.0 버전 이상 등이 해당합니다."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "jboss-as-wildfly-jboss-eap-60-이상",
        children: "JBoss AS, Wildfly, JBoss EAP 6.0 이상"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "다음 파일에 prefix를 등록하세요."
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
        children: "JVM 옵션으로 다음 내용을 추가하세요."
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "-Dcom.ibm.ws.classloader.server.alwaysAllowedPackages=whatap\n"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "기본값으로 '*'로 지정된 경우 별도 설정이 필요 없습니다."
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["설정 위치는 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "add-jvm-opt/websphere",
            children: "WebSphere"
          }), "를 참조합니다."]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "security.policy"
        }), " 권한을 다음과 같이 추가하세요."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-java",
          metastring: "title='$WEBSPHERE_HOME/properties/server.policy || $WEBSPHERE_PROFILE_HOME/properties/server.policy'",
          children: "grant codeBase \"file:$WHATAP_HOME/-\"\n{\n   permission java.security.AllPermission;\n};\n"
        })
      })]
    })]
  });
}
function _osgi_framework_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_osgi_framework_createMdxContent, {
      ...props
    })
  }) : _osgi_framework_createMdxContent(props);
}


;// CONCATENATED MODULE: ./docs/common-items/_log-manager-error.mdx


const _log_manager_error_frontMatter = (/* unused pure expression or super */ null && ({}));
const _log_manager_error_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _log_manager_error_toc = [{
  "value": "Log Manager 관련 에러",
  "id": "log-manager-관련-에러",
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
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "log-manager-관련-에러",
      children: "Log Manager 관련 에러"
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: "JBoss AS 7.0 버전 이상, JBoss EAP 6.0 버전 이상에서 Log Manager 관련 에러가 발생한다면 JVM 옵션을 추가합니다."
    }), (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "-Djava.util.logging.manager"
        }), " 항목에 Log Manager package 명을 설정하세요."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "-Xbootclassloader"
        }), " 항목에 JBoss Log Manager JAR file을 설정하세요."]
      }), "\n"]
    }), (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-apacheconf",
        metastring: "title='(JBoss_Path)/bin/standalone.conf(domain.conf)' {4,12,13} showLineNumbers",
        children: "# Specify the exact Java VM executable to use.\n#\nif [ \"x$JBOSS_MODULES_SYSTEM_PKGS\" = \"x\" ]; then\n    JBOSS_MODULES_SYSTEM_PKGS=\"org.jboss.byteman,org.jboss.logmanager,whatap\"\nfi\n\n...\n# Specify options to pass to the Java VM.\n#\nif [ \"x$JAVA_OPTS\" = \"x\" ]; then\n    JAVA_OPTS=\"-Xms1303m -Xmx1303m -Djava.net.preferIPv4Stack=true\"\n    JAVA_OPTS=\"$JAVA_OPTS -Djboss.modules.system.pkgs=$JBOSS_MODULES_SYSTEM_PKGS -Djava.awt.headless=true\"\n    JAVA_OPTS=\"$JAVA_OPTS -Djava.util.logging.manager=org.jboss.logmanager.LogManager -Xbootclasspath/p:/home/vagrant/EAP-7.0.0/modules/system/layers/base/org/jboss/logmanager/main/jboss-logmanager-2.0.3.Final-redhat-1.jar\"\nelse\n    echo \"JAVA_OPTS already set in environment; overriding default settings with values: $JAVA_OPTS\"\nfi\n"
      })
    })]
  });
}
function _log_manager_error_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_log_manager_error_createMdxContent, {
      ...props
    })
  }) : _log_manager_error_createMdxContent(props);
}


;// CONCATENATED MODULE: ./docs/common-items/_mbeanserverbuilder-error.mdx


const _mbeanserverbuilder_error_frontMatter = (/* unused pure expression or super */ null && ({}));
const _mbeanserverbuilder_error_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _mbeanserverbuilder_error_toc = [{
  "value": "MBeanServerBuilder 에러가 발생하는 경우",
  "id": "mbeanserverbuilder-에러가-발생하는-경우",
  "level": 2
}];
function _mbeanserverbuilder_error_createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    section: "section",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "mbeanserverbuilder-에러가-발생하는-경우",
      children: "MBeanServerBuilder 에러가 발생하는 경우"
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: "JBoss 5.0 버전 이하에서 MBeanServerBuilder 관련 에러가 출력된 경우 JVM 옵션을 추가하세요."
    }), (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-apacheconf",
        metastring: "title='(JBoss_Path)/bin/run.conf' {5} showLineNumbers",
        children: "# Specify options to pass to the Java VM.\n#\nif [ \"x$JAVA_OPTS\" = \"x\" ]; then\n   JAVA_OPTS=\"-Xms128m -Xmx512m -XX:MaxPermSize=256m -Dorg.jboss.resolver.warning=true -Dsun.rmi.dgc.client.gcInterval=3600000 -Dsun.rmi.dgc.server.gcInterval=3600000\"\n   JAVA_OPTS=\"$JAVA_OPTS -Djboss.platform.mbeanserver\"\nfi\n"
      })
    })]
  });
}
function _mbeanserverbuilder_error_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_mbeanserverbuilder_error_createMdxContent, {
      ...props
    })
  }) : _mbeanserverbuilder_error_createMdxContent(props);
}


;// CONCATENATED MODULE: ./docs/common-items/_permission-error.mdx


const _permission_error_frontMatter = (/* unused pure expression or super */ null && ({}));
const _permission_error_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _permission_error_toc = [{
  "value": "Permission 오류가 발생하는 경우",
  "id": "permission-오류가-발생하는-경우",
  "level": 2
}, {
  "value": "java.io.FilePermission 오류가 발생하는 경우",
  "id": "javaiofilepermission-오류가-발생하는-경우",
  "level": 3
}, {
  "value": "java.util.PropertyPermission 오류가 발생하는 경우",
  "id": "javautilpropertypermission-오류가-발생하는-경우",
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
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "permission-오류가-발생하는-경우",
        children: "Permission 오류가 발생하는 경우"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Java Security Policy 관련 오류가 발생하면 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "$JAVA_HOME/jre/lib/security/java.policy"
        }), " 파일에 권한 설정을 추가하세요."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["모든 권한을 일괄 적용하려면 다음과 같이 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "java.policy"
        }), " 파일에 설정을 추가하세요."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-java",
          metastring: "title='$JAVA_HOME/jre/lib/security/java.policy'",
          children: "grant {\n   permission java.security.AllPermission;\n};\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "javaiofilepermission-오류가-발생하는-경우",
        children: "java.io.FilePermission 오류가 발생하는 경우"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "java.io.FilePermision error",
          src: (__webpack_require__(54616)/* ["default"] */.Z) + "",
          width: "883",
          height: "185"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["다음과 같이 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "java.policy"
        }), " 파일에 설정을 추가하세요."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-java",
          metastring: "title='$JAVA_HOME/jre/lib/security/java.policy'",
          children: "grant {\n   ...\n   permission java.io.FilePermission {오류 메시지에서 확인된 패키지 경로}, \"read\"\n};\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "javautilpropertypermission-오류가-발생하는-경우",
        children: "java.util.PropertyPermission 오류가 발생하는 경우"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["다음과 같이 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "java.policy"
        }), " 파일에 설정을 추가하세요."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-java",
          metastring: "title='$JAVA_HOME/jre/lib/security/java.policy'",
          children: "grant {\n   ...\n   permission java.util.PropertyPermission {오류 메시지에서 확인된 패키지 경로}, \"read\"\n};\n"
        })
      })]
    })]
  });
}
function _permission_error_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_permission_error_createMdxContent, {
      ...props
    })
  }) : _permission_error_createMdxContent(props);
}


;// CONCATENATED MODULE: ./docs/common-items/_sigar-library-error.mdx


const _sigar_library_error_frontMatter = (/* unused pure expression or super */ null && ({}));
const _sigar_library_error_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _sigar_library_error_toc = [{
  "value": "Sigar library를 로딩하지 못하는 경우",
  "id": "sigar-library를-로딩하지-못하는-경우",
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
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "sigar-library를-로딩하지-못하는-경우",
      children: "Sigar library를 로딩하지 못하는 경우"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)("em", {
        children: "$WHATAP_HOME/lib1/*.so"
      }), " 파일에 실행 권한이 있는지 확인하세요. 권한이 없다면 실행 권한을 부여하세요."]
    }), (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "$ sudo chmod +x *.so\n"
      })
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AIX 7에서 ", (0,jsx_runtime.jsx)(_components.em, {
        children: "$WHATAP_HOME/lib1"
      }), " 하위에 ", (0,jsx_runtime.jsx)(_components.em, {
        children: "libsigar-ppc64-aix-7.so"
      }), " 파일이 없어 오류가 발생한 경우 파일을 복사하세요."]
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Sigar library error on AIX 7",
        src: (__webpack_require__(4762)/* ["default"] */.Z) + "",
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
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_sigar_library_error_createMdxContent, {
      ...props
    })
  }) : _sigar_library_error_createMdxContent(props);
}


;// CONCATENATED MODULE: ./docs/java/agent-troubleshooting.mdx


const agent_troubleshooting_frontMatter = {
	id: 'agent-troubleshooting',
	title: '설치 문제 해결',
	description: '자바(Java) 에이전트 설치 시 발생할 수 있는 다양한 문제들과 이를 해결하기 위한 구체적인 지침을 제공합니다. 방화벽 설정, SpringBoot 및 Tomcat JMX 설정, OSGI 프레임워크 사용 서버 설정, Log Manager 및 MBeanServerBuilder 에러, Permission 오류, Sigar 라이브러리 문제 등 다양한 상황에 대한 해결책을 안내합니다.',
	toc_max_heading_level: 2,
	keywords: [
		'Java',
		'Troubleshooting',
		'문제 해결'
	],
	isTranslationMissing: false
};
const agent_troubleshooting_contentTitle = undefined;

const assets = {

};










const agent_troubleshooting_toc = [..._check_firewall/* toc */.d$, ...toc, ..._osgi_framework_toc, ..._log_manager_error_toc, ..._mbeanserverbuilder_error_toc, ..._permission_error_toc, ..._sigar_library_error_toc, {
  "value": "CPU 지표가 -1로 표시되는 경우",
  "id": "cpumetrics",
  "level": 2
}, {
  "value": "권고 사항: 내장 라이브러리를 통한 메트릭 수집 설정",
  "id": "권고-사항-내장-라이브러리를-통한-메트릭-수집-설정",
  "level": 3
}];
function agent_troubleshooting_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_check_firewall/* default */.ZP, {}), "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {}), "\n", "\n", (0,jsx_runtime.jsx)(_osgi_framework_MDXContent, {}), "\n", "\n", (0,jsx_runtime.jsx)(_log_manager_error_MDXContent, {}), "\n", "\n", (0,jsx_runtime.jsx)(_mbeanserverbuilder_error_MDXContent, {}), "\n", "\n", (0,jsx_runtime.jsx)(_permission_error_MDXContent, {}), "\n", "\n", (0,jsx_runtime.jsx)(_sigar_library_error_MDXContent, {}), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "cpumetrics",
        children: "CPU 지표가 -1로 표시되는 경우"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["최신 버전의 Java 에이전트를 사용하는 환경에서 IBM Java를 실행할 때, CPU 지표가 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "-1"
        }), "로 표시되는 경우가 있습니다. 이 문제는 특정 플랫폼에서 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "System Load Average"
        }), " 값을 지원하지 않기 때문에 발생합니다."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Java 에이전트는 기본적으로 Java Management Extensions(JMX)를 활용하여 지표를 수집합니다. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "OperatingSystemMXBean"
        }), " 인터페이스의 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getSystemLoadAverage()"
        }), " 메소드를 사용합니다. 이 메소드는 운영 체제에 따라 시스템의 최근 1분간의 평균 부하를 반환합니다. 그러나 일부 플랫폼에서는 해당 값을 지원하지 않아 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "-1"
        }), "을 반환할 수 있습니다."]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "info",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "getSystemLoadAverage()"
          }), " 메서드는 OpenJDK 소스 코드에서 확인할 수 있습니다. 예를 들어, OpenJDK 7u 버전의 소스 코드는 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/openjdk-mirror/jdk7u-jdk/blob/master/src/share/classes/java/lang/management/OperatingSystemMXBean.java",
            children: "GitHub 저장소"
          }), "에서 확인할 수 있습니다."]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "권고-사항-내장-라이브러리를-통한-메트릭-수집-설정",
        children: "권고 사항: 내장 라이브러리를 통한 메트릭 수집 설정"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["CPU 지표가 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "-1"
        }), "로 표시되는 현상을 해결하려면, Java 에이전트 설정을 통해 내장 라이브러리(OSHI 또는 SIGAR)를 활성화하세요."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Java 8 이상 환경"
            }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "OSHI"
            }), " 라이브러리 활용"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["운영 체제 수준의 지표를 안정적으로 수집하기 위해 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "OSHI"
            }), " 라이브러리를 사용할 수 있습니다. 에이전트 설정 방법은 다음을 참조하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-ini",
              metastring: "title=\"whatap.conf\"",
              children: "# default false\noshi_enabled=true\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Java 8 미만 환경"
            }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "SIGAR"
            }), " 라이브러리 활용"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Java 8 미만 환경에서는 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "SIGAR"
            }), " 라이브러리를 활용해 지표를 수집할 수 있습니다. 에이전트 설정 방법은 다음을 참조하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-ini",
              metastring: "title=\"whatap.conf\"",
              children: "# default false\nsigar_enabled=true\n"
            })
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "OSHI"
              }), "(", (0,jsx_runtime.jsx)(_components.code, {
                children: "oshi_enabled"
              }), ")와 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "SIGAR"
              }), "(", (0,jsx_runtime.jsx)(_components.code, {
                children: "sigar_enabled"
              }), ") 옵션은 기본값으로 비활성화되어 있습니다. 필요한 경우 명시적으로 설정해야 합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "두 설정을 동시에 활성화하지 않도록 주의하세요. 환경에 맞는 라이브러리를 선택하여 설정하세요."
            }), "\n"]
          }), "\n"]
        })
      })]
    })]
  });
}
function agent_troubleshooting_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(agent_troubleshooting_createMdxContent, {
      ...props
    })
  }) : agent_troubleshooting_createMdxContent(props);
}



}),
"54616": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/troubleshooting-permission-error-4d8210609932d8b7a2d2121045758cd9.png");

}),
"4762": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/troubleshooting-sigar-error-4d8210609932d8b7a2d2121045758cd9.png");

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