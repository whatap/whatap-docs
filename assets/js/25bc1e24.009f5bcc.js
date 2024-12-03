"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["28903"], {
"92599": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_java_scale_in_auto_delete_mdx_25b_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-java-scale-in-auto-delete-mdx-25b.json
var site_docs_java_scale_in_auto_delete_mdx_25b_namespaceObject = JSON.parse('{"id":"java/scale-in-auto-delete","title":"Scale In에서 에이전트 자동 삭제","description":"Auto Scale 환경에서 자동으로 확장된 시스템이 Scale In을 실행할 때, 자바(Java) 에이전트를 자동 삭제하는 방법을 안내합니다. 에이전트는 특정 파일 생성을 통해 SILENT_SHUTDOWN 이벤트를 서버에 전송하며, 이를 통해 에이전트가 자동으로 목록에서 제거됩니다. 이 과정은 시스템의 자동 축소 시점에 맞춰 에이전트 관리를 용이하게 하며, 추가적인 운영자 개입 없이 리소스를 효율적으로 관리할 수 있습니다.","source":"@site/docs/java/scale-in-auto-delete.mdx","sourceDirName":"java","slug":"/java/scale-in-auto-delete","permalink":"/java/scale-in-auto-delete","draft":false,"unlisted":false,"editUrl":"undefined/docs/java/scale-in-auto-delete.mdx","tags":[],"version":"current","frontMatter":{"id":"scale-in-auto-delete","title":"Scale In에서 에이전트 자동 삭제","description":"Auto Scale 환경에서 자동으로 확장된 시스템이 Scale In을 실행할 때, 자바(Java) 에이전트를 자동 삭제하는 방법을 안내합니다. 에이전트는 특정 파일 생성을 통해 SILENT_SHUTDOWN 이벤트를 서버에 전송하며, 이를 통해 에이전트가 자동으로 목록에서 제거됩니다. 이 과정은 시스템의 자동 축소 시점에 맞춰 에이전트 관리를 용이하게 하며, 추가적인 운영자 개입 없이 리소스를 효율적으로 관리할 수 있습니다.","keywords":["Java","에이전트"],"isTranslationMissing":false},"sidebar":"javaSidebar","previous":{"title":"AES 256 암호화","permalink":"/java/aes-256-encryption"},"next":{"title":"대시보드","permalink":"/java/dashboard-intro"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/java/scale-in-auto-delete.mdx


const frontMatter = {
	id: 'scale-in-auto-delete',
	title: 'Scale In에서 에이전트 자동 삭제',
	description: 'Auto Scale 환경에서 자동으로 확장된 시스템이 Scale In을 실행할 때, 자바(Java) 에이전트를 자동 삭제하는 방법을 안내합니다. 에이전트는 특정 파일 생성을 통해 SILENT_SHUTDOWN 이벤트를 서버에 전송하며, 이를 통해 에이전트가 자동으로 목록에서 제거됩니다. 이 과정은 시스템의 자동 축소 시점에 맞춰 에이전트 관리를 용이하게 하며, 추가적인 운영자 개입 없이 리소스를 효율적으로 관리할 수 있습니다.',
	keywords: [
		'Java',
		'에이전트'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*관련 https://desk.channel.io/#/channels/6280/user_chats/63bfcb1a3962bededb99*/


const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Auto Scale 환경에서 에이전트 이름을 자동 부여하면 Scale Out이 발생할 경우 운영자 개입이 필요 없습니다. 시스템을 자동으로 확장합니다. 반면 Scale In이 발생하면 시스템이 정상적인 Shut down으로 인식해야 합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["에이전트 자동 삭제를 위해 와탭 서버는 자바 에이전트로부터 메시지를 받아야 합니다. 에이전트는 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "${WHATAP_HOME}"
      }), "에 Java 프로세스의 ", (0,jsx_runtime.jsxs)(_components.em, {
        children: ["whatap_", (0,jsx_runtime.jsx)(_components.code, {
          children: "{java-process-pid}"
        }), ".shutdown"]
      }), " 파일이 나타나면 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SILENT_SHUTDOWN"
      }), " 이벤트를 와탭 서버에 전송합니다. 전송은 5초 이내로 완료합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SILENT_SHUTDOWN"
      }), " 이벤트를 와탭 서버에 전송하고 1분 이내에 에이전트가 셧다운 되면 와탭 서버는 목록에서 해당 Java 에이전트를 바로 제거합니다. inactive 이벤트도 발생시키지 않습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["Tomcat의 경우 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "shutdown.sh"
        }), " 파일에 설정할 수 있습니다."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=$TOMCAT_HOME/bin/shutdown.sh",
          children: "touch $WHATAP_HOME/whatap_{java-process-pid}.shutdown\n"
        })
      })]
    }), "\n"]
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