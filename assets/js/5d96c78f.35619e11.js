"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["48142"], {
"6859": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_php_php_os_aws_eb_mdx_5d9_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-php-php-os-aws-eb-mdx-5d9.json
var site_docs_php_php_os_aws_eb_mdx_5d9_namespaceObject = JSON.parse('{"id":"php/php-os/aws-eb","title":"AWS Elastic beanstalk","description":"AWS Elastic beanstalk","source":"@site/docs/php/php-os/aws-eb.mdx","sourceDirName":"php/php-os","slug":"/php/php-os/aws-eb","permalink":"/php/php-os/aws-eb","draft":false,"unlisted":false,"editUrl":"undefined/docs/php/php-os/aws-eb.mdx","tags":[],"version":"current","frontMatter":{"id":"aws-eb","title":"AWS Elastic beanstalk","description":"AWS Elastic beanstalk","keywords":["AWS Elastic beanstalk","PHP"],"isTranslationMissing":false},"sidebar":"phpSidebar","previous":{"title":"Google Cloud App Engine","permalink":"/php/php-os/gcae"},"next":{"title":"Docker 환경 설치","permalink":"/php/install-agent-docker"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/php/php-os/aws-eb.mdx


const frontMatter = {
	id: 'aws-eb',
	title: 'AWS Elastic beanstalk',
	description: 'AWS Elastic beanstalk',
	keywords: [
		'AWS Elastic beanstalk',
		'PHP'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Elastic Beanstalk Configuration files"
      }), "(", (0,jsx_runtime.jsx)(_components.em, {
        children: ".ebextensions"
      }), ")를 통해서 설치합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: ".ebextensions"
      }), " 디렉터리에 아래 ", (0,jsx_runtime.jsx)(_components.em, {
        children: "config"
      }), " 파일을 추가한 후 신규 버전을 배포하세요. 그리고 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "commands"
      }), " 명령어를 실행하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["와탭 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "리포지토리"
          }), "를 등록하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "패키지"
          }), "를 설치하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "install.sh"
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "설정 스크립트"
          }), "를 통해서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "PHP 확장 모듈"
          }), "을 설정하세요."]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-java",
            metastring: "title=SH",
            children: "$ vi 01-WhaTap_install_repository_php.config\n\ncommands:\n  01_Install_whatap_repository:\n    command: sudo rpm --import http://repo.whatap.io/centos/release.gpg\n    ignoreErrors: true\n  02_Install_whatap_repository:\n    command: echo \"[whatap]\" | sudo tee /etc/yum.repos.d/whatap.repo > /dev/null\n    ignoreErrors: true\n  03_Install_whatap_repository:\n    command: echo \"name=whatap packages for enterprise linux\" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null\n    ignoreErrors: true\n  04_Install_whatap_repository:\n    command: echo \"baseurl=http://repo.whatap.io/centos/latest/\\$basearch\" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null\n    ignoreErrors: true\n  05_Install_whatap_repository:\n    command: echo \"enabled=1\" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null\n    ignoreErrors: true\n  06_Install_whatap_repository:\n    command: echo \"gpgcheck=0\" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null\n    ignoreErrors: true\n  07_Install_whatap_php:\n    command: sudo yum install -y whatap-php\n    ignoreErrors: true\n  08_Install_whatap_php_install.sh:\n    command: (echo \"[액세스 키 지정]\"; echo \"[서버 IP 지정(a.a.a.a/b.b.b.b)\")| sudo /usr/whatap/php/install.sh\n    ignoreErrors: true\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "액세스 키"
            }), "와 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "서버 IP"
            }), "는 ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "프로젝트 관리"
              })
            }), " > ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "에이전트 설치"
              })
            }), " 페이지에서 발급받고 확인할 수 있습니다."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Beanstalk에 새로운 버전을 배포하세요. PHP 모니터링 에이전트가 설치됩니다."
        }), "\n"]
      }), "\n"]
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