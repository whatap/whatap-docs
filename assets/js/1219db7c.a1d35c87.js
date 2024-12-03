"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["13293"], {
"48619": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_amazon_cloudwatch_dashboard_mdx_121_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-amazon-cloudwatch-dashboard-mdx-121.json
var site_docs_amazon_cloudwatch_dashboard_mdx_121_namespaceObject = JSON.parse('{"id":"amazon-cloudwatch/dashboard","title":"아이템별 대시보드","description":"와탭 모니터링 대시보드는 프로젝트의 전체 현황을 한 눈에 파악하기 위한 기능을 제공합니다.","source":"@site/docs/amazon-cloudwatch/dashboard.mdx","sourceDirName":"amazon-cloudwatch","slug":"/amazon-cloudwatch/dashboard","permalink":"/amazon-cloudwatch/dashboard","draft":false,"unlisted":false,"editUrl":"undefined/docs/amazon-cloudwatch/dashboard.mdx","tags":[],"version":"current","frontMatter":{"id":"dashboard","title":"아이템별 대시보드","description":"와탭 모니터링 대시보드는 프로젝트의 전체 현황을 한 눈에 파악하기 위한 기능을 제공합니다.","keywords":["클라우드","Amazon CloudWatch","대시보드","UI"],"isTranslationMissing":false},"sidebar":"amazoncloudwatchSidebar","previous":{"title":"설치하기","permalink":"/amazon-cloudwatch/install-agent"},"next":{"title":"Flex 보드","permalink":"/amazon-cloudwatch/flexboard"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/amazon-cloudwatch/dashboard.mdx


const frontMatter = {
	id: 'dashboard',
	title: '아이템별 대시보드',
	description: '와탭 모니터링 대시보드는 프로젝트의 전체 현황을 한 눈에 파악하기 위한 기능을 제공합니다.',
	keywords: [
		'클라우드',
		'Amazon CloudWatch',
		'대시보드',
		'UI'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Amazon CloudWatch",
  "id": "amazon-cloudwatch",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    em: "em",
    h2: "h2",
    li: "li",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {ImgLang} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["와탭 모니터링 서비스 초기 화면에서 프로젝트를 선택한 다음 ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "프로젝트 메뉴"
        })
      }), " 하위에 ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Amazon CloudWatch"
        })
      }), " 메뉴에서 아이템별 대시보드에 진입하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "amazon-cloudwatch",
        children: "Amazon CloudWatch"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "EC2"
              })
            }), ", ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "EBS"
              })
            }), ", ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "ELB"
              })
            }), ", ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "AutoScaling"
              })
            }), ", ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "ElasticBeanstalk"
              })
            }), ", ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "ElastiCache"
              })
            }), " 서비스 대시보드를 제공합니다."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "aws-cloudwatch-ec2.png",
            desc: "cloudwatch ec2"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["네임스페이스는 와탭 메트릭스 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "카테고리"
            }), "로 수집됩니다. 표기 형식은 Amazon CloudWatch 네임스페이스를 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "소문자"
            }), "로 변경 후 '/'를 '", (0,jsx_runtime.jsx)(_components.strong, {
              children: "_"
            }), "'로 변경합니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["예, AWS/EC2 → ", (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "aws_ec2"
                })
              })]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["지표는 와탭 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "메트릭스"
            }), "로 수집됩니다. 표기 형식은 'CloudWatchMetric.Stat' 입니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["예, ", (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "CPUUtilization.Average"
                })
              })]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["수집되는 Amazon CloudWatch 지표는 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://docs.aws.amazon.com/ko_kr/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["와탭이 제공하는 템플릿 대시보드 외에 사용자 정의형 통합 대시보드인 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "flexboard",
              children: "Flex 보드"
            }), "를 생성해 활용해 보세요."]
          }), "\n"]
        })
      })]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
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