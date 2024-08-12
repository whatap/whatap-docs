"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[78638],{

/***/ 47712:
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
  "value": "Firewall configuration checking",
  "id": "firewall-configuration-checking",
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
      id: "firewall-configuration-checking",
      children: "Firewall configuration checking"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["If the TCP outbound policy for the WhaTap data collection server has not been set, monitoring data cannot be transferred. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Deselect"
      }), " the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "firewall blocking"
      }), "."]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Use the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "telnet"
      }), " command to check \"Connected to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "IP"
      }), ".\""]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-sh",
        children: "$ telnet 52.193.60.176 6600\nTrying 52.193.60.176...\nConnected to 52.193.60.176.\nEscape character is '^]'.\n"
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["For the connection server details, select a desired project in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://service.whatap.io/",
          children: "WhaTap Monitoring Service"
        }), ", and then check in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "Management"
          })
        }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "Agent Installation"
          })
        }), "."]
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

/***/ 79995:
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
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_check-firewall.mdx
var _check_firewall = __webpack_require__(47712);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_springboot-jmx-off.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "SpringBoot 2.2 or later, Tomcat JMX off",
  "id": "springboot-22-or-later-tomcat-jmx-off",
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
      id: "springboot-22-or-later-tomcat-jmx-off",
      children: "SpringBoot 2.2 or later, Tomcat JMX off"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If the embedded Tomcat is used in SpringBoot 2.2 or later, the JMX functions do not work with the default settings. In this case, activate the JMX functions. ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.2-Release-Notes#jmx-now-disabled-by-default",
        children: "Related link"
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
        children: "spring:\n  jmx:\n    enabled: true\nserver:\n  tomcat:\n    mbeanregistry:\n      enabled: true #tomcat embedded\n"
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_osgi-framework.mdx


const _osgi_framework_frontMatter = {};
const _osgi_framework_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _osgi_framework_toc = [{
  "value": "In case of the application server using the OSGI framework",
  "id": "in-case-of-the-application-server-using-the-osgi-framework",
  "level": 2
}, {
  "value": "JBoss AS, Wildfly, JBoss EAP 6.0 or later",
  "id": "jboss-as-wildfly-jboss-eap-60-or-later",
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
        id: "in-case-of-the-application-server-using-the-osgi-framework",
        children: "In case of the application server using the OSGI framework"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Register any agent package prefix (whatap) in the JVM options for an OSGI framework-based application server."
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "The application server is available in Jboss EAP 6.0 or later, Jboss AS 7.0 or later, Wildfly 8.0 or later, IBM WebSphere AS 7.0 or later, and such."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "jboss-as-wildfly-jboss-eap-60-or-later",
        children: "JBoss AS, Wildfly, JBoss EAP 6.0 or later"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Register a prefix in the following file:"
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
        children: "As an JVM option, add the following."
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "-Dcom.ibm.ws.classloader.server.alwaysAllowedPackages=whatap\n"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "If \"*\" is specified as the default value, no additional setting is required."
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["For the setting location, see ", (0,jsx_runtime.jsx)(_components.a, {
            href: "add-jvm-opt/websphere",
            children: "WebSphere"
          }), "."]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Add the ", (0,jsx_runtime.jsx)(_components.em, {
          children: "security.policy"
        }), " role as follows:"]
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_log-manager-error.mdx


const _log_manager_error_frontMatter = {};
const _log_manager_error_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _log_manager_error_toc = [{
  "value": "Errors of Log Manager",
  "id": "errors-of-log-manager",
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
      id: "errors-of-log-manager",
      children: "Errors of Log Manager"
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: "If any Log Manager error occurs in JBoss AS 7.0 or later and JBoss EAP 6.0 or later, add the JVM options."
    }), (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Set the package name of Log Manager in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-Djava.util.logging.manager"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Set the JBoss Log Manager JAR file in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-Xbootclassloader"
        }), "."]
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_mbeanserverbuilder-error.mdx


const _mbeanserverbuilder_error_frontMatter = {};
const _mbeanserverbuilder_error_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _mbeanserverbuilder_error_toc = [{
  "value": "In case the MBeanServerBuilder error occurs",
  "id": "in-case-the-mbeanserverbuilder-error-occurs",
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
      id: "in-case-the-mbeanserverbuilder-error-occurs",
      children: "In case the MBeanServerBuilder error occurs"
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: "If any MBeanServerBuilder-related error is output in JBoss 5.0 or earlier, add the JVM options."
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_permission-error.mdx


const _permission_error_frontMatter = {};
const _permission_error_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _permission_error_toc = [{
  "value": "In case of occurrence of a permission error",
  "id": "in-case-of-occurrence-of-a-permission-error",
  "level": 2
}, {
  "value": "In case of occurrence of the java.io.FilePermission error",
  "id": "in-case-of-occurrence-of-the-javaiofilepermission-error",
  "level": 3
}, {
  "value": "In case of occurrence of the java.util.PropertyPermission error",
  "id": "in-case-of-occurrence-of-the-javautilpropertypermission-error",
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
        id: "in-case-of-occurrence-of-a-permission-error",
        children: "In case of occurrence of a permission error"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If any Java security policy-related error occurs, add the role setting in ", (0,jsx_runtime.jsx)(_components.em, {
          children: "$JAVA_HOME/jre/lib/security/java.policy"
        }), "."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["To apply all roles collectively, add the setting in ", (0,jsx_runtime.jsx)(_components.em, {
          children: "java.policy"
        }), " as follows:"]
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
        id: "in-case-of-occurrence-of-the-javaiofilepermission-error",
        children: "In case of occurrence of the java.io.FilePermission error"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "java.io.FilePermision error",
          src: (__webpack_require__(20655)/* ["default"] */ .A) + "",
          width: "883",
          height: "185"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Add the setting in ", (0,jsx_runtime.jsx)(_components.em, {
          children: "java.policy"
        }), "."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-java",
          metastring: "title='$JAVA_HOME/jre/lib/security/java.policy'",
          children: "grant {\n   ...\n   permission java.io.FilePermission {package path seen in the error message}, \"read\"\n};\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "in-case-of-occurrence-of-the-javautilpropertypermission-error",
        children: "In case of occurrence of the java.util.PropertyPermission error"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Add the setting in ", (0,jsx_runtime.jsx)(_components.em, {
          children: "java.policy"
        }), "."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-java",
          metastring: "title='$JAVA_HOME/jre/lib/security/java.policy'",
          children: "grant {\n   ...\n   permission java.util.PropertyPermission {package path see in the error message}, \"read\"\n};\n"
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_sigar-library-error.mdx


const _sigar_library_error_frontMatter = {};
const _sigar_library_error_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _sigar_library_error_toc = [{
  "value": "In case the sigar library cannot be loaded",
  "id": "in-case-the-sigar-library-cannot-be-loaded",
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
      id: "in-case-the-sigar-library-cannot-be-loaded",
      children: "In case the sigar library cannot be loaded"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Check whether the execution role for ", (0,jsx_runtime.jsx)("em", {
        children: "$WHATAP_HOME/lib1/*.so"
      }), " exists. If no permission, give the execution role."]
    }), (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "$ sudo chmod +x *.so\n"
      })
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If under ", (0,jsx_runtime.jsx)(_components.em, {
        children: "$WHATAP_HOME/lib1"
      }), " of AIX 7, ", (0,jsx_runtime.jsx)(_components.em, {
        children: "libsigar-ppc64-aix-7.so"
      }), " does not exist and the error occurs, copy the file."]
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Sigar library error on AIX 7",
        src: (__webpack_require__(78500)/* ["default"] */ .A) + "",
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/java/agent-troubleshooting.mdx


const agent_troubleshooting_frontMatter = {
	id: 'agent-troubleshooting',
	title: 'Troubleshooting',
	description: 'The following provides various problems that may occur during installation of a Java agent and detailed instructions for resolving them. It provides solutions to various issues such as firewall settings, SpringBoot and Tomcat JMX settings, server settings for use of the OSGI framework, Log Manager and MBeanServerBuilder errors, Permission errors, and Sigar library problems.',
	toc_max_heading_level: 2,
	tags: [
		'Java',
		'Troubleshooting',
		'Troubleshooting'
	]
};
const agent_troubleshooting_contentTitle = undefined;
const metadata = {
  "id": "java/agent-troubleshooting",
  "title": "Troubleshooting",
  "description": "The following provides various problems that may occur during installation of a Java agent and detailed instructions for resolving them. It provides solutions to various issues such as firewall settings, SpringBoot and Tomcat JMX settings, server settings for use of the OSGI framework, Log Manager and MBeanServerBuilder errors, Permission errors, and Sigar library problems.",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/java/agent-troubleshooting.mdx",
  "sourceDirName": "java",
  "slug": "/java/agent-troubleshooting",
  "permalink": "/en/java/agent-troubleshooting",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/java/agent-troubleshooting.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Java",
      "permalink": "/en/tags/java"
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
    "description": "The following provides various problems that may occur during installation of a Java agent and detailed instructions for resolving them. It provides solutions to various issues such as firewall settings, SpringBoot and Tomcat JMX settings, server settings for use of the OSGI framework, Log Manager and MBeanServerBuilder errors, Permission errors, and Sigar library problems.",
    "toc_max_heading_level": 2,
    "tags": [
      "Java",
      "Troubleshooting",
      "Troubleshooting"
    ]
  },
  "sidebar": "javaSidebar",
  "previous": {
    "title": "Installation checking items",
    "permalink": "/en/java/install-check"
  },
  "next": {
    "title": "Agent CONFIG.",
    "permalink": "/en/java/set-agent"
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

/***/ 20655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/troubleshooting-permission-error-4d8210609932d8b7a2d2121045758cd9.png");

/***/ }),

/***/ 78500:
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