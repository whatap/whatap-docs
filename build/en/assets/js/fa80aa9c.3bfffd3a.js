"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[28574],{

/***/ 23574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ install_docker_java_contentTitle),
  "default": () => (/* binding */ install_docker_java_MDXContent),
  frontMatter: () => (/* binding */ install_docker_java_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ install_docker_java_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(74235);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(15947);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/kubernetes/_check-install-agent.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "Checking the agent installation",
  "id": "checking-the-agent-installation",
  "level": 2
}];
function _createMdxContent(props) {
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
      id: "checking-the-agent-installation",
      children: "Checking the agent installation"
    }), (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To check whether the agent has been installed, go to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: "Dashboard"
            })
          }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: "Application Service Dashboard"
            })
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["If you have manually installed the downloaded file but cannot see the agent in ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: "Dashboard"
            })
          }), ", check the following."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Execute the command, ", (0,jsx_runtime.jsx)(_components.code, {
                children: "ps -ef | grep whatap"
              }), " in the container, and then check whether the agent options have been applied properly."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Check the content of the container in the ", (0,jsx_runtime.jsx)(_components.em, {
                children: "/whatap/logs"
              }), " path. Agent logs are output in the format of ", (0,jsx_runtime.jsxs)(_components.em, {
                children: ["logs/", (0,jsx_runtime.jsx)(_components.code, {
                  children: "{whatap configuration file name}"
                }), "-yyyymmdd.log"]
              }), "."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/kubernetes/install-docker-java.mdx


const install_docker_java_frontMatter = {
	id: 'install-docker-java',
	title: 'Installing Docker Java',
	description: 'This step allows you to install the agent to monitor Java applications in the container.',
	tags: [
		'Kubernetes',
		'Kubernetes Monitoring',
		'Application Installation',
		'Java'
	],
	toc_max_heading_level: 2
};
const install_docker_java_contentTitle = undefined;
const metadata = {
  "id": "kubernetes/install-docker-java",
  "title": "Installing Docker Java",
  "description": "This step allows you to install the agent to monitor Java applications in the container.",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/kubernetes/install-docker-java.mdx",
  "sourceDirName": "kubernetes",
  "slug": "/kubernetes/install-docker-java",
  "permalink": "/en/kubernetes/install-docker-java",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/kubernetes/install-docker-java.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Kubernetes",
      "permalink": "/en/tags/kubernetes"
    },
    {
      "inline": true,
      "label": "Kubernetes Monitoring",
      "permalink": "/en/tags/kubernetes-monitoring"
    },
    {
      "inline": true,
      "label": "Application Installation",
      "permalink": "/en/tags/application-installation"
    },
    {
      "inline": true,
      "label": "Java",
      "permalink": "/en/tags/java"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "install-docker-java",
    "title": "Installing Docker Java",
    "description": "This step allows you to install the agent to monitor Java applications in the container.",
    "tags": [
      "Kubernetes",
      "Kubernetes Monitoring",
      "Application Installation",
      "Java"
    ],
    "toc_max_heading_level": 2
  },
  "sidebar": "kubeSidebar",
  "previous": {
    "title": "Application Agent Installation",
    "permalink": "/en/kubernetes/install-application-agent"
  },
  "next": {
    "title": "Installing Docker Node.js",
    "permalink": "/en/kubernetes/install-docker-nodejs"
  }
};
const assets = {

};

/*:::note

The _whatap.conf_ file can be managed using the ConfigMap function in the user Kubernetes environment.

:::*/
/*:::note

If any settings in the configuration file are changed or important settings are lost, the configuration may not work properly. Therefore, it is recommended to configure **container environment variables** in the Kubernetes environment.

:::*/





const install_docker_java_toc = [{
  "value": "Download agent",
  "id": "download-agent",
  "level": 2
}, {
  "value": "Setting the Kubernetes internal application agent options",
  "id": "setting-the-kubernetes-internal-application-agent-options",
  "level": 4
}, {
  "value": "Setting the security key",
  "id": "security",
  "level": 3
}, {
  "value": "Configuring the container environment variables",
  "id": "configuring-the-container-environment-variables",
  "level": 2
}, ...toc];
function install_docker_java_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["At the bottom of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Management"
        })
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Agent installation"
        })
      }), ", click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Install Application"
        })
      }), " > Select the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Docker Java"
        })
      }), " tab in Install guide."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This process adds the settings for applying the agent to the JVM option of the Java application running on the Docker container and packages the container images as follows:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "EKS Fargate is to be supported later."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Git example code is provided to help you understand the Java application integration process. See ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/whatap/kuber-apm-boilerplate/tree/main/java/springboot",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "download-agent",
        children: "Download agent"
      }), (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
        groupId: "k8stype2",
        children: [(0,jsx_runtime.jsxs)(TabItem/* default */.A, {
          value: "dockerinstall",
          label: "Docker Install",
          default: true,
          children: [(0,jsx_runtime.jsxs)(_components.p, {
            children: ["To install the WhaTap application agent, create the ", (0,jsx_runtime.jsx)(_components.em, {
              children: "whatap.conf"
            }), " file. Change ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{YOUR_PROJECT_ROOT}"
            }), " to the top-level path of the project to install the agent."]
          }), (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              children: "cat >{YOUR_PROJECT_ROOT}/whatap.conf <<EOL\r\nwhatap.server.host={proxyServer}\r\nEOL\n"
            })
          }), (0,jsx_runtime.jsx)(_components.h4, {
            id: "setting-the-kubernetes-internal-application-agent-options",
            children: "Setting the Kubernetes internal application agent options"
          }), (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The settings required for the Kubernetes internal application agent can be configured in the ", (0,jsx_runtime.jsx)(_components.em, {
              children: "whatap.conf"
            }), " file or through the container ", (0,jsx_runtime.jsx)(_components.code, {
              children: "env"
            }), " field when releasing the agent."]
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["The options in the ", (0,jsx_runtime.jsx)(_components.em, {
                  children: "whatap.conf"
                }), " file have higher priority than those set in the container ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "env"
                }), " field."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["If no value is set in ", (0,jsx_runtime.jsx)(_components.em, {
                  children: "whatap.conf"
                }), " or container ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "env"
                }), ", the default value is used."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["In case of the ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "license"
                }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "whatap.server.host"
                }), " options, use the ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "container environment variable"
                }), " settings."]
              }), "\n"]
            }), "\n"]
          }), (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If any settings in the configuration file are changed or important settings are lost, the configuration may not work properly. Therefore, it is recommended to configure ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "container environment variables"
            }), " in the Kubernetes environment. For more information about other agent control options, see ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://docs.whatap.io/java/agent-control-function",
              children: "the following"
            }), "."]
          }), (0,jsx_runtime.jsxs)(_components.admonition, {
            type: "note",
            children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Option unavailable in the Kubernetes environment"
              })
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "whatap.name"
                  }), ": Unique name by which the collection server identifies agents. The name is generated based on the object on which the agent is running. Random assignment of users may cause problems with agent identification."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "whatap.onode"
                  }), ": The Kubernetes cluster node name is set by default. It is used to receive information about the node to which the agent belongs. When specified by the user, it may be difficult to accurately identify the node."]
                }), "\n"]
              }), "\n"]
            })]
          }), (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
            children: [(0,jsx_runtime.jsxs)(TabItem/* default */.A, {
              value: "latest",
              label: "Including the latest version of the agent in the application image",
              default: true,
              children: [(0,jsx_runtime.jsxs)(_components.p, {
                children: ["The following guides you to include ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "the latest version of the agent"
                }), " in the application image."]
              }), (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["To include the WhaTap agent in the application image, add the following in the Dockerfile's final image build step. Change ", (0,jsx_runtime.jsx)(_components.code, {
                      children: "{YOUR_PROJECT_ROOT}"
                    }), " to the top-level path of the project to install the agent."]
                  }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      className: "language-docker",
                      children: "# Create the WhaTap agent directory in the user container\r\nRUN mkdir -p /whatap\r\n\r\n# Copy the WhaTap Java agent to the user container\r\nCOPY --from=whatap/kube_mon /data/agent/micro/whatap.agent.kube.jar /whatap\r\n\r\n# Copy the created whatap.conf file to the user container\r\nCOPY {YOUR_PROJECT_ROOT}/whatap.conf /whatap/\n"
                    })
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "Add the following to the startup command of Dockerfile."
                  }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      className: "language-bash",
                      children: "-javaagent:/whatap/whatap.agent.kube.jar -Dwhatap.micro.enabled=true\n"
                    })
                  }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "See the following definition example of the following Dockerfile."
                  }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      className: "language-docker",
                      metastring: "title='Dockerfile' showLineNumbers {4,7}",
                      children: "FROM openjdk:8-jdk-slim\r\nRUN mkdir -p /app && mkdir /whatap\r\nWORKDIR /app\r\nCOPY --from=whatap/kube_mon /data/agent/micro/whatap.agent.kube.jar /whatap\r\nCOPY ./whatap.conf /whatap\r\nCOPY ./target/myApp.jar /app/\r\nCMD [\"java\",\"-javaagent:/whatap/whatap.agent.kube.jar\",\"-Dwhatap.micro.enabled=true\",\"-jar\",\"/app/myApp.jar\"]\r\nEXPOSE 8080\n"
                    })
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["Build the Docker. Change ", (0,jsx_runtime.jsx)(_components.code, {
                      children: "{YOUR_DOCKERFILE_DIR}"
                    }), " to the path where Dockerfile is located."]
                  }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      className: "language-docker",
                      children: "cd {YOUR_DOCKERFILE_DIR}\r\ndocker build -t {IMAGE_NAME} .\n"
                    })
                  }), "\n"]
                }), "\n"]
              })]
            }), (0,jsx_runtime.jsxs)(TabItem/* default */.A, {
              value: "choice",
              label: "Including the specified version of the agent in the application image",
              default: true,
              children: [(0,jsx_runtime.jsxs)(_components.p, {
                children: ["The following guides you to include ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "the specified version of the agent"
                }), " in the application image."]
              }), (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["To include the WhaTap agent in the application image, add the following in the Dockerfile's final image build step. Change ", (0,jsx_runtime.jsx)(_components.code, {
                      children: "{YOUR_PROJECT_ROOT}"
                    }), " to the top-level path of the project to install the agent."]
                  }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      className: "language-docker",
                      children: "# Create the WhaTap agent directory in the user container\r\nRUN mkdir -p /whatap\r\n\r\n# Copy the WhaTap Java agent to the user container\r\nCOPY --from=whatap/kube_mon /data/agent/micro/whatap.agent-*.jar /whatap\r\n\r\n# Copy the created whatap.conf file to the user container\r\nCOPY {YOUR_PROJECT_ROOT}/whatap.conf /whatap/\n"
                    })
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "Check the version of the WhaTap agent."
                  }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      className: "language-bash",
                      children: "docker run whatap/kube_mon ls /data/agent/micro | grep -E 'whatap\\.agent-(.*?\\.)(.*?\\.)(.*?\\.)jar' | sort | tail -1\r\n\r\n# Output example\r\n## whatap.agent-X.Y.Z.jar\n"
                    })
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["Add the following to the startup command of Dockerfile. In ", (0,jsx_runtime.jsx)(_components.strong, {
                      children: "X.Y.Z"
                    }), ", enter the agent version that you checked before."]
                  }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      className: "language-bash",
                      children: "-javaagent:/whatap/whatap.agent-X.Y.Z.jar -Dwhatap.micro.enabled=true\n"
                    })
                  }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "See the following definition example of the following Dockerfile."
                  }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      className: "language-docker",
                      metastring: "title='Dockerfile' showLineNumbers {4,7}",
                      children: "FROM openjdk:8-jdk-slim\r\nRUN mkdir -p /app && mkdir /whatap\r\nWORKDIR /app\r\nCOPY --from=whatap/kube_mon /data/agent/micro/whatap.agent-*.jar /whatap\r\nCOPY ./whatap.conf /whatap\r\nCOPY ./target/myApp.jar /app/\r\nCMD [\"java\",\"-javaagent:/whatap/whatap.agent-X.Y.Z.jar\",\"-Dwhatap.micro.enabled=true\",\"-jar\",\"/app/myApp.jar\"]\r\nEXPOSE 8080\n"
                    })
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["Build the Docker. Change ", (0,jsx_runtime.jsx)(_components.code, {
                      children: "{YOUR_DOCKERFILE_DIR}"
                    }), " to the path where Dockerfile is located."]
                  }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      className: "language-docker",
                      children: "cd {YOUR_DOCKERFILE_DIR}\r\ndocker build -t {IMAGE_NAME} .\n"
                    })
                  }), "\n"]
                }), "\n"]
              })]
            })]
          })]
        }), (0,jsx_runtime.jsxs)(TabItem/* default */.A, {
          value: "direct",
          label: "Direct Installation",
          children: [(0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Select ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.em, {
                    children: "Download"
                  })
                }), " to download the installation file (", (0,jsx_runtime.jsx)(_components.em, {
                  children: "whatap.agent.java.tar.gz"
                }), ")."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Upload the dockerfile to the server and then unzip the file."
              }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
                type: "info",
                children: [(0,jsx_runtime.jsx)(_components.p, {
                  children: "To download to the installation server, execute the following command."
                }), (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-bash",
                    children: "wget https://api.whatap.io/agent/whatap.agent.java.tar.gz\n"
                  })
                })]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["When unzipped, the ", (0,jsx_runtime.jsx)(_components.em, {
                  children: "whatap"
                }), " directory is created. Check the settings in the ", (0,jsx_runtime.jsx)(_components.em, {
                  children: "whatap.conf"
                }), " file under the ", (0,jsx_runtime.jsx)(_components.em, {
                  children: "whatap"
                }), " directory, and then modify it as follows:"]
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-ini",
                  children: "license={licenseKey}\r\nwhatap.server.host={proxyServer}\n"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
                type: "info",
                children: [(0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Configuring the options for the Kubernetes internal application agent"
                  })
                }), (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["The settings required for the Kubernetes internal application agent can be configured in the ", (0,jsx_runtime.jsx)(_components.em, {
                    children: "whatap.conf"
                  }), " file or through the container ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "env"
                  }), " field when releasing the agent."]
                }), (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: ["The options in the ", (0,jsx_runtime.jsx)(_components.em, {
                        children: "whatap.conf"
                      }), " file have higher priority than those set in the container ", (0,jsx_runtime.jsx)(_components.code, {
                        children: "env"
                      }), " field."]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: ["If no value is set in ", (0,jsx_runtime.jsx)(_components.em, {
                        children: "whatap.conf"
                      }), " or container ", (0,jsx_runtime.jsx)(_components.code, {
                        children: "env"
                      }), ", the default value is used."]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: ["In case of the ", (0,jsx_runtime.jsx)(_components.code, {
                        children: "license"
                      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                        children: "whatap.server.host"
                      }), " options, use the ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: "container environment variable"
                      }), " settings."]
                    }), "\n"]
                  }), "\n"]
                }), (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["If any settings in the configuration file are changed or important settings are lost, the configuration may not work properly. Therefore, it is recommended to configure ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "container environment variables"
                  }), " in the Kubernetes environment. For more information about other agent control options, see ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://docs.whatap.io/java/agent-control-function",
                    children: "the following"
                  }), "."]
                })]
              }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
                type: "note",
                children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Option unavailable in the Kubernetes environment"
                  })
                }), (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.code, {
                        children: "whatap.name"
                      }), ": Unique name by which the collection server identifies agents. The name is generated based on the object on which the agent is running. Random assignment of users may cause problems with agent identification."]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.code, {
                        children: "whatap.onode"
                      }), ": The Kubernetes cluster node name is set by default. It is used to receive information about the node to which the agent belongs. When specified by the user, it may be difficult to accurately identify the node."]
                    }), "\n"]
                  }), "\n"]
                })]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Add the following to the startup command of Dockerfile. Check the agent file under the ", (0,jsx_runtime.jsx)(_components.em, {
                  children: "whatap"
                }), " directory, and then enter the version in ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "X.Y.Z"
                }), "."]
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-bash",
                  children: "-javaagent:/whatap/whatap.agent-X.Y.Z.jar -Dwhatap.micro.enabled=true\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "See the following definition example of the following Dockerfile."
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-bash",
                  metastring: "title='Dockerfile'",
                  children: "FROM openjdk:8-jdk-alpine\r\nRUN mkdir -p /app && mkdir /whatap\r\nWORKDIR /app\r\nCOPY ./whatap.agent-X.Y.Z.jar /whatap/\r\nCOPY ./whatap.conf /whatap/\r\nCOPY ./target/myApp.jar myApp.jar\r\nCOPY ./paramkey.txt /whatap/\r\nCMD [\"java\",\"-javaagent:/whatap/whatap.agent-X.Y.Z.jar\",\"-Dwhatap.micro.enabled=true\",\"-jar\",\"/app/myApp.jar\"]\r\nEXPOSE 8080\n"
                })
              }), "\n"]
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.em, {
                    children: "whatap-virtual-X.Y.Z.jar"
                  }), ": Monitoring target (sample application)"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.em, {
                    children: "whatap.agent-X.Y.Z.jar"
                  }), ": WhaTap agent"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["If the agent's file name is ", (0,jsx_runtime.jsx)(_components.em, {
                    children: "whatap.agent-1.2.3.jar"
                  }), ", change the ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "X.Y.Z"
                  }), " part to ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "1.2.3"
                  }), "."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["For more information about addition of JVM options, see ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://docs.whatap.io/java/install-agent#addjvmopt",
                    children: "the following"
                  }), "."]
                }), "\n"]
              }), "\n"]
            })
          })]
        })]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "tip",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["For Java 17 or later, add the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "--add-opens=java.base/java.lang=ALL-UNNAMED"
          }), " option related to the reflection."]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "security",
        children: "Setting the security key"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Set a security key to query SQL variables and perform HTTP queries, or use the Thread stop function."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Java Agent 2.2.2 or later"
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["After creating the ", (0,jsx_runtime.jsx)(_components.em, {
              children: "security.conf"
            }), " file in the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "$WHATAP_HOME"
            }), " path, enter a 6-character password consisting of alphabets and numbers as follows:"]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-ini",
              metastring: "title='security.conf'",
              children: "paramkey=ABCDEF # SQL variable and HTTP query lookup\r\nthreadkill=ABCDEF # Thread stop function\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Java agent 2.2.2 or earlier"
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["After creating the ", (0,jsx_runtime.jsx)(_components.em, {
              children: "paramkey.txt"
            }), " file in the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "$WHATAP_HOME"
            }), " path, enter a 6-character password consisting of alphabets and numbers as follows:"]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-ini",
              metastring: "title='paramkey.txt'",
              children: "ABCDEF # SQL variable and HTTP query lookup, thread stop function\n"
            })
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "tip",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["When updating the Java agent version to 2.2.2, the key values in the existing ", (0,jsx_runtime.jsx)(_components.em, {
            children: "paramkey.txt"
          }), " file are automatically applied to the ", (0,jsx_runtime.jsx)(_components.em, {
            children: "security.conf"
          }), " file. For example, if you used ", (0,jsx_runtime.jsx)(_components.code, {
            children: "FEDCBA"
          }), " in ", (0,jsx_runtime.jsx)(_components.em, {
            children: "paramkey.txt"
          }), " and updated to the version 2.2.2, it is applied to the ", (0,jsx_runtime.jsx)(_components.em, {
            children: "security.conf"
          }), " file as follows:"]
        }), (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            children: "paramkey=FEDCBA\r\nthreadkill=FEDCBA\n"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["If the ", (0,jsx_runtime.jsx)(_components.em, {
            children: "paramkey.txt"
          }), " file does not exist, the key value of the ", (0,jsx_runtime.jsx)(_components.em, {
            children: "security.conf"
          }), " file is automatically created as the key value of ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "WHATAP"
          }), "."]
        })]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["For agent settings related to recording SQL parameters, see ", (0,jsx_runtime.jsx)(_components.a, {
                href: "../java/agent-dbsql#profile-sql-param",
                children: "the following"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["For agent settings related to recording the HTTP parameters, see ", (0,jsx_runtime.jsx)(_components.a, {
                href: "../java/agent-transaction#profile_http_parameter",
                children: "the following"
              }), "."]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "configuring-the-container-environment-variables",
        children: "Configuring the container environment variables"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["After building Docker, set ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "container environment variables"
        }), " in the Kubernetes environment. Add the following items in the ", (0,jsx_runtime.jsx)(_components.em, {
          children: "yaml"
        }), " file for releasing the application."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-yaml",
          children: "env:\r\n- name: NODE_IP\r\n  valueFrom: {fieldRef: {fieldPath: status.hostIP}}\r\n- name: NODE_NAME\r\n  valueFrom: {fieldRef: {fieldPath: spec.nodeName}}\r\n- name: POD_NAME\r\n  valueFrom: {fieldRef: {fieldPath: metadata.name}}\r\n- name: OKIND\r\n  value: {YOUR_OKIND_NAME}\r\n- name: license\r\n  value: {licenseKey}\r\n- name: whatap.server.host\r\n  value: {proxyServer}\r\n- name: whatap.micro.enabled\r\n  value: \"true\"\n"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "See the following example:"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-yaml",
          children: "apiVersion: apps/v1\r\nkind: Deployment\r\nmetadata:\r\n  name: #DeploymentName\r\n  labels:\r\n    app: #AppLabel\r\nspec:\r\n  replicas: 3\r\n  selector:\r\n    matchLabels:\r\n      app: #AppLabel\r\n  template:\r\n    metadata:\r\n      labels:\r\n        app: #AppLabel\r\n    spec:\r\n      containers:\r\n      - name: #ContainerName\r\n        image: nginx\r\n        ports:\r\n        - containerPort: 80\r\n        env:\r\n        - name: NODE_IP\r\n          valueFrom: {fieldRef: {fieldPath: \"status.hostIP\"}}\r\n        - name: NODE_NAME\r\n          valueFrom: {fieldRef: {fieldPath: \"spec.nodeName\"}}\r\n        - name: POD_NAME\r\n          valueFrom: {fieldRef: {fieldPath: \"metadata.name \"}}\r\n        - name: OKIND\r\n          value: #DeploymentName\r\n        - name: license\r\n          value: #licenseKey\r\n        - name: whatap.server.host\r\n          value: #proxyServer\r\n        - name: whatap.micro.enabled\r\n          value: \"true\"\n"
        })
      }), (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Roles of environment variables"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "NODE_IP"
              }), ": Collects the IP address of the node where the current Pod has been hosted."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "NODE_NAME"
              }), ": Collects the name of the node where the current Pod is running."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "POD_NAME"
              }), ": Collects the name of the current Pod."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "OKIND"
              }), " (optional): Groups applications for Pods. If set to a deployment name, the corresponding Pods are grouped together."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "license"
              }), ": Key for agent authentication."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "whatap.server.host"
              }), ": Host IP of the WhaTap collection server"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "whatap.micro.enabled"
              }), ": Enables integration with containers."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsx)(MDXContent, {})]
    })]
  });
}
function install_docker_java_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(install_docker_java_createMdxContent, {
      ...props
    })
  }) : install_docker_java_createMdxContent(props);
}



/***/ }),

/***/ 15947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TabItem)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabItem":"tabItem_Ymn6"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function TabItem({ children , hidden , className  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        role: "tabpanel",
        className: (0,clsx/* default */.A)(styles_module.tabItem, className),
        hidden,
        children: children
    });
};


/***/ }),

/***/ 74235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tabs)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(52204);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(56347);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(13321);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/historyUtils.js
var historyUtils = __webpack_require__(57641);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/jsUtils.js
var jsUtils = __webpack_require__(73094);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/storageUtils.js + 1 modules
var storageUtils = __webpack_require__(57237);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tabsUtils.js
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys1 = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys1 = ownKeys1.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys1.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




// A very rough duck type, but good enough to guard against mistakes while
// allowing customization
function isTabItem(comp) {
    const { props  } = comp;
    return !!props && typeof props === 'object' && 'value' in props;
}
function sanitizeTabsChildren(children) {
    var ref;
    var ref1;
    return (ref1 = (ref = react.Children.toArray(children).filter((child)=>child !== '\n').map((child)=>{
        if (!child || /*#__PURE__*/ (0,react.isValidElement)(child) && isTabItem(child)) {
            return child;
        }
        // child.type.name will give non-sensical values in prod because of
        // minification, but we assume it won't throw in prod.
        throw new Error(`Docusaurus error: Bad <Tabs> child <${// @ts-expect-error: guarding against unexpected cases
        typeof child.type === 'string' ? child.type : child.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`);
    })) === null || ref === void 0 ? void 0 : ref.filter(Boolean)) !== null && ref1 !== void 0 ? ref1 : [];
}
function extractChildrenTabValues(children) {
    return sanitizeTabsChildren(children).map(({ props: { value , label , attributes , default: isDefault  }  })=>({
            value,
            label,
            attributes,
            default: isDefault
        }));
}
function ensureNoDuplicateValue(values) {
    const dup = (0,jsUtils/* duplicates */.XI)(values, (a, b)=>a.value === b.value);
    if (dup.length > 0) {
        throw new Error(`Docusaurus error: Duplicate values "${dup.map((a)=>a.value).join(', ')}" found in <Tabs>. Every value needs to be unique.`);
    }
}
function useTabValues(props) {
    const { values: valuesProp , children  } = props;
    return (0,react.useMemo)(()=>{
        const values = valuesProp !== null && valuesProp !== void 0 ? valuesProp : extractChildrenTabValues(children);
        ensureNoDuplicateValue(values);
        return values;
    }, [
        valuesProp,
        children
    ]);
}
function isValidValue({ value , tabValues ,  }) {
    return tabValues.some((a)=>a.value === value);
}
function getInitialStateValue({ defaultValue , tabValues ,  }) {
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
    var ref;
    const defaultTabValue = (ref = tabValues.find((tabValue)=>tabValue.default)) !== null && ref !== void 0 ? ref : tabValues[0];
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
function getQueryStringKey({ queryString =false , groupId ,  }) {
    if (typeof queryString === 'string') {
        return queryString;
    }
    if (queryString === false) {
        return null;
    }
    if (queryString === true && !groupId) {
        throw new Error(`Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".`);
    }
    return groupId !== null && groupId !== void 0 ? groupId : null;
}
function useTabQueryString({ queryString =false , groupId ,  }) {
    const history = (0,react_router/* useHistory */.W6)();
    const key = getQueryStringKey({
        queryString,
        groupId
    });
    const value = (0,historyUtils/* useQueryStringValue */.aZ)(key);
    const setValue = (0,react.useCallback)((newValue)=>{
        if (!key) {
            return; // no-op
        }
        const searchParams = new URLSearchParams(history.location.search);
        searchParams.set(key, newValue);
        history.replace(_objectSpreadProps(_objectSpread({}, history.location), {
            search: searchParams.toString()
        }));
    }, [
        key,
        history
    ]);
    return [
        value,
        setValue
    ];
}
function useTabStorage({ groupId  }) {
    const key = getStorageKey(groupId);
    const [value, storageSlot] = (0,storageUtils/* useStorageSlot */.Dv)(key);
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
    const { defaultValue , queryString =false , groupId  } = props;
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
        const value = queryStringValue !== null && queryStringValue !== void 0 ? queryStringValue : storageValue;
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
    (0,useIsomorphicLayoutEffect/* default */.A)(()=>{
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
var useIsBrowser = __webpack_require__(12075);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabList":"tabList__CuJ","tabItem":"tabItem_LNqP"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js
function Tabs_defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function Tabs_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys1 = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys1 = ownKeys1.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys1.forEach(function(key) {
            Tabs_defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function Tabs_ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function Tabs_objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        Tabs_ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function TabList({ className , block , selectedValue , selectValue , tabValues  }) {
    const tabRefs = [];
    const { blockElementScrollPositionUntilNextRender  } = (0,scrollUtils/* useScrollPositionBlocker */.a_)();
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
                    var _nextTab;
                    focusElement = (_nextTab = tabRefs[nextTab]) !== null && _nextTab !== void 0 ? _nextTab : tabRefs[0];
                    break;
                }
            case 'ArrowLeft':
                {
                    const prevTab = tabRefs.indexOf(event.currentTarget) - 1;
                    var _prevTab;
                    focusElement = (_prevTab = tabRefs[prevTab]) !== null && _prevTab !== void 0 ? _prevTab : tabRefs[tabRefs.length - 1];
                    break;
                }
            default:
                break;
        }
        focusElement === null || focusElement === void 0 ? void 0 : focusElement.focus();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
        role: "tablist",
        "aria-orientation": "horizontal",
        className: (0,clsx/* default */.A)('tabs', {
            'tabs--block': block
        }, className),
        children: tabValues.map(({ value , label , attributes  })=>{
            /*#__PURE__*/ return (0,jsx_runtime.jsx)("li", Tabs_objectSpreadProps(Tabs_objectSpread({
                // TODO extract TabListItem
                role: "tab",
                tabIndex: selectedValue === value ? 0 : -1,
                "aria-selected": selectedValue === value,
                ref: (tabControl)=>tabRefs.push(tabControl),
                onKeyDown: handleKeydown,
                onClick: handleTabChange
            }, attributes), {
                className: (0,clsx/* default */.A)('tabs__item', styles_module.tabItem, attributes === null || attributes === void 0 ? void 0 : attributes.className, {
                    'tabs__item--active': selectedValue === value
                }),
                children: label !== null && label !== void 0 ? label : value
            }), value);
        })
    });
}
function TabContent({ lazy , children , selectedValue  }) {
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
            className: (0,clsx/* default */.A)('margin-top--md', selectedTabItem.props.className)
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
        className: (0,clsx/* default */.A)('tabs-container', styles_module.tabList),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabList, Tabs_objectSpread({}, tabs, props)),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabContent, Tabs_objectSpread({}, tabs, props))
        ]
    });
}
function Tabs(props) {
    const isBrowser = (0,useIsBrowser/* default */.A)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TabsComponent, Tabs_objectSpreadProps(Tabs_objectSpread({}, props), {
        children: sanitizeTabsChildren(props.children)
    }), String(isBrowser));
};


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