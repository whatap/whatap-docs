"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[61419],{

/***/ 22557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {
	id: 'gcae',
	title: 'Google Cloud App Engine',
	description: 'Google Cloud App Engine',
	tags: [
		'Google Cloud App Engine',
		'PHP'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "php/php-os/gcae",
  "title": "Google Cloud App Engine",
  "description": "Google Cloud App Engine",
  "source": "@site/docs/php/php-os/gcae.mdx",
  "sourceDirName": "php/php-os",
  "slug": "/php/php-os/gcae",
  "permalink": "/whatap-docs/php/php-os/gcae",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/php/php-os/gcae.mdx",
  "tags": [
    {
      "label": "Google Cloud App Engine",
      "permalink": "/whatap-docs/tags/google-cloud-app-engine"
    },
    {
      "label": "PHP",
      "permalink": "/whatap-docs/tags/php"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "gcae",
    "title": "Google Cloud App Engine",
    "description": "Google Cloud App Engine",
    "tags": [
      "Google Cloud App Engine",
      "PHP"
    ]
  },
  "sidebar": "phpSidebar",
  "previous": {
    "title": "Alpine Linux",
    "permalink": "/whatap-docs/php/php-os/alpine-linux"
  },
  "next": {
    "title": "AWS Elastic beanstalk",
    "permalink": "/whatap-docs/php/php-os/aws-eb"
  }
};
const assets = {

};

/*

방화벽 규칙 추가

![gae_firewall](https://img.whatap.io/media/agent_php/install/tinified/gae_firewall.png)
![gae_firewall_detail](https://img.whatap.io/media/agent_php/install/tinified/gae_firewall_detail.png)

앱 엔진 생성 인스턴스 확인

![gae_instance](https://img.whatap.io/media/agent_php/install/tinified/gae_instance.png)

*/


const toc = [{
  "value": "Custom Docker",
  "id": "custom-docker",
  "level": 2
}, {
  "value": "PHP 모니터링 에이전트 설치",
  "id": "php-모니터링-에이전트-설치",
  "level": 2
}, {
  "value": "방화벽 규칙 추가",
  "id": "방화벽-규칙-추가",
  "level": 2
}, {
  "value": "배포 및 인스턴스 확인",
  "id": "배포-및-인스턴스-확인",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "custom-docker",
        children: "Custom Docker"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "구글 앱 엔진(Google Cloud App Engine)에 PHP 모니터링 에이전트를 설치하기 위해서는 Custom docker를 이용해야 합니다."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["구글 앱 엔진 PHP의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "기본형은 PHP 확장형 모듈 및 서비스 데몬을 실행할 수 없습니다"
        }), ". Docker Container를 통해 설치하세요."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["구글 앱 엔진의 설정 파일인 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "app.yaml"
        }), " 파일에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "flex"
        }), " 환경, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "custom"
        }), " 런타임으로 설정하세요."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-yaml",
          metastring: "title=SH",
          children: "$ vi app.yaml\nenv: flex\nruntime: custom\n"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Custom Docker로 실행하기 위해서는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "flex"
        }), " 환경과 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "custom"
        }), " 런타임으로 설정된 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "app.yaml"
        }), " 파일과 동일한 위치에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "Dockerfile"
        }), "을 생성해야 합니다. 구글 앱 엔진의 기본 php Docker 이미지를 참조하세요."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-docker",
          metastring: "title=Docker",
          children: "# google-appengine php php56, php70, php71\nFROM gcr.io/google-appengine/php56\n"
        })
      }), "\n"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "php-모니터링-에이전트-설치",
        children: "PHP 모니터링 에이전트 설치"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "PHP 모니터링 에이전트를 설치하세요."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "라이브러리(wget)를 설치하세요."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-docker",
              children: "RUN apt-get install wget -y\n"
            })
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "php-fpm 실행 명령어 링크를 생성하세요."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-docker",
              children: "RUN ln -s /opt/php/sbin/php-fpm /usr/bin/php-fpm\n"
            })
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "whatap 리포지토리 및 whatap-php 패키지를 설치하세요."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-docker",
              children: "RUN wget http://repo.whatap.io/debian/release.gpg -O -| apt-key add -\nRUN wget http://repo.whatap.io/debian/whatap-repo_1.0_all.deb\nRUN dpkg -i whatap-repo_1.0_all.deb\nRUN apt-get update\nRUN apt-get install whatap-php\n"
            })
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "PHP 확장 모듈 및 whatap-php 서비스를 설정하세요."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-docker",
              children: "#RUN (echo \"[ 발급된 액세스 키 ]\"; echo \"[ 발급된 서버 IP ]\")|/usr/whatap/php/install.sh\nRUN (echo \"xxxxxxxx\"; echo \"1.1.1.1/2.2.2.2\")|/usr/whatap/php/install.sh\n"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
            type: "note",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["PHP 모니터링 프로젝트 생성 후 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "액세스 키"
              }), "와 서버 IP가 발급됩니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "/"
              }), " 구분자로 여러 개의 IP 발급이 가능합니다."]
            })
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "supervisor"
            }), "를 통해 whatap-php 서비스를 실행하세요."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-docker",
              children: "RUN echo \"[program:whatap-php]\" >> /etc/supervisor/conf.d/whatap.conf\nRUN echo \"command = /etc/init.d/whatap-php start\" >> /etc/supervisor/conf.d/whatap.conf\nRUN echo \"stdout_logfile = /dev/stdout\" >> /etc/supervisor/conf.d/whatap.conf\nRUN echo \"stdout_logfile_maxbytes=0\" >> /etc/supervisor/conf.d/whatap.conf\nRUN echo \"stderr_logfile = /dev/stderr\" >> /etc/supervisor/conf.d/whatap.conf\nRUN echo \"stderr_logfile_maxbytes=0\" >> /etc/supervisor/conf.d/whatap.conf\nRUN echo \"user = root\" >> /etc/supervisor/conf.d/whatap.conf\nRUN echo \"autostart = true\" >> /etc/supervisor/conf.d/whatap.conf\nRUN echo \"autorestart = true\" >> /etc/supervisor/conf.d/whatap.conf\nRUN echo \"priority = 10\" >> /etc/supervisor/conf.d/whatap.conf\n"
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "방화벽-규칙-추가",
        children: "방화벽 규칙 추가"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "구글 앱 엔진에서 사용하는 네트워크를 대상으로 방화벽 규칙을 추가하세요. 발급받은 서버 IP에 대해 6600 포트를 통한 TCP 송신을 허용해야 합니다."
      }), "\n"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "배포-및-인스턴스-확인",
        children: "배포 및 인스턴스 확인"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Google Cloud SDK를 통해서 설정된 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "app.yaml"
        }), " 파일과 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "Dockerfile"
        }), " 을 배포하세요."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=SH",
          children: "$ gcloud app deploy\n"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "구글 클라우드 콘솔에서 앱 엔진의 생성된 인스턴스를 확인하세요."
      }), "\n", "\n"]
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