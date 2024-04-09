"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[93193],{

/***/ 58670:
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
	id: 'set-aws-resource-options',
	title: 'AWS 리소스 정보 수집 옵션',
	description: 'AWS 환경에서 리소스 정보를 수집하여 토폴로지 화면에 표현할 수 있습니다.',
	tags: [
		'네트워크 성능 모니터링',
		'에이전트',
		'AWS',
		'Amazon Linux'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "npm/set-aws-resource-options",
  "title": "AWS 리소스 정보 수집 옵션",
  "description": "AWS 환경에서 리소스 정보를 수집하여 토폴로지 화면에 표현할 수 있습니다.",
  "source": "@site/docs/npm/set-aws-resource-options.mdx",
  "sourceDirName": "npm",
  "slug": "/npm/set-aws-resource-options",
  "permalink": "/whatap-docs/npm/set-aws-resource-options",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/npm/set-aws-resource-options.mdx",
  "tags": [
    {
      "label": "네트워크 성능 모니터링",
      "permalink": "/whatap-docs/tags/네트워크-성능-모니터링"
    },
    {
      "label": "에이전트",
      "permalink": "/whatap-docs/tags/에이전트"
    },
    {
      "label": "AWS",
      "permalink": "/whatap-docs/tags/aws"
    },
    {
      "label": "Amazon Linux",
      "permalink": "/whatap-docs/tags/amazon-linux"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "set-aws-resource-options",
    "title": "AWS 리소스 정보 수집 옵션",
    "description": "AWS 환경에서 리소스 정보를 수집하여 토폴로지 화면에 표현할 수 있습니다.",
    "tags": [
      "네트워크 성능 모니터링",
      "에이전트",
      "AWS",
      "Amazon Linux"
    ]
  },
  "sidebar": "npmsidebar",
  "previous": {
    "title": "에이전트 설치",
    "permalink": "/whatap-docs/npm/install-agent"
  },
  "next": {
    "title": "tagRule 설정하기",
    "permalink": "/whatap-docs/npm/set-tagrule"
  }
};
const assets = {

};



const toc = [{
  "value": "EC2 환경에서 AWS 리소스 권한 설정",
  "id": "set-aws-resource-ec2",
  "level": 2
}, {
  "value": "AWS IAM 설정하기",
  "id": "aws-iam-설정하기",
  "level": 3
}, {
  "value": "EKS 환경에서 AWS 리소스 권한 설정",
  "id": "set-aws-resource-eks",
  "level": 2
}, {
  "value": "AWS IAM 설정하기",
  "id": "aws-iam-설정하기-1",
  "level": 3
}, {
  "value": "Service Account 설정하기",
  "id": "service-account-설정하기",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "AWS 환경에서 네트워크 성능 모니터링을 사용하려면 각 리소스(LB 등)에 연결된 EC2 네트워크 인터페이스(ENI) 정보를 수집하여 토폴로지에 표현할 수 있습니다. AWS 요소에 에이전트를 직접 설치할 수 없기 때문에 수집된 IP 기준으로 연관된 ENI를 확인하여 표현합니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Example",
        src: (__webpack_require__(57648)/* ["default"] */ .A) + "",
        width: "800",
        height: "316"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["AWS의 ELB를 통해 내부에 트래픽이 인가되는 경우 그림과 같이 ENI에 표현된 정보를 통해 토폴로지에 표현할 수 있습니다. AWS ENI에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Description"
      }), " 필드를 기준으로 표현합니다. 만약 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Description"
      }), " 필드에 아무런 정보를 남기지 않은 경우 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NetworkInterfaceId"
      }), " 속성을 제공합니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "set-aws-resource-ec2",
      children: "EC2 환경에서 AWS 리소스 권한 설정"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["AWS EC2에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "NPM"
      }), " 에이전트를 설치할 경우 IAM 설정을 통해 AWS의 리소스 정보를 수집할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html",
          children: "AWS 설정 가이드"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "aws-iam-설정하기",
      children: "AWS IAM 설정하기"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["AWS IAM 정책 설정 과정에서 최소 권한을 지정하도록 요구하고 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "NPM"
      }), "에서 AWS 리소스 정보를 수집하려면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ec2:DescribeNetworkInterfaces"
      }), " 권한이 필요합니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-json",
        children: "{\n    \"Version\": \"2012-10-17\",\n    \"Statement\": [\n        {\n            \"Effect\": \"Allow\",\n            \"Action\": [\n              //...\n              \"ec2:DescribeNetworkInterfaces\"\n            ],\n            \"Resource\": \"*\"\n        }\n    ]\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["정책 및 권한에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#policy-syntax",
          children: "다음 링크"
        }), "를 참조하세요."]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "set-aws-resource-eks",
      children: "EKS 환경에서 AWS 리소스 권한 설정"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["AWS EKS에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "NPM"
      }), " 에이전트를 설치하는 경우 SeviceAccount를 통해 AWS의 리소스 정보를 수집할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html",
          children: "AWS 설정 가이드"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "aws-iam-설정하기-1",
      children: "AWS IAM 설정하기"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["AWS IAM 정책 설정 과정에서 최소 권한을 지정하도록 요구하고 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "NPM"
      }), "에서 AWS 리소스 정보를 수집하려면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ec2:DescribeNetworkInterfaces"
      }), " 권한이 필요 합니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-json",
        children: "{\n    \"Version\": \"2012-10-17\",\n    \"Statement\": [\n        {\n            \"Effect\": \"Allow\",\n            \"Action\": [\n              //...\n              \"ec2:DescribeNetworkInterfaces\"\n            ],\n            \"Resource\": \"*\"\n        }\n    ]\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["정책 및 권한에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#policy-syntax",
          children: "다음 링크"
        }), "를 참조하세요."]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "service-account-설정하기",
      children: "Service Account 설정하기"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["AWS EKS 설정 과정에서 IAM과 쿠버네티스의 Service Account를 연결해야 하고, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "NPM"
      }), "에서 AWS 리소스 정보를 수집하려면 IAM과 NPM의 Service Account를 연결해야 합니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "NPM"
      }), "에서는 다음의 Service Account를 사용하세요."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-yaml",
        children: "namespace : whatap-npm-ns\nservice_account : whatap-npm\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        metastring: "title='example'",
        children: "kubectl annotate serviceaccount -n whatap-npm-ns whatap-npm eks.amazonaws.com/role-arn=arn:aws:iam::$account_id:role/$role\n"
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

/***/ 57648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/npm-aws-resource-example-7283d5ee26552538c0cf9390ebac4d00.png");

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