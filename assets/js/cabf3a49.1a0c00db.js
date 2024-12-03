"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["97315"], {
"95349": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: function() { return assets; },
  contentTitle: function() { return contentTitle; },
  "default": function() { return MDXContent; },
  frontMatter: function() { return frontMatter; },
  metadata: function() { return /* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_overview_mdx_0fc_json__WEBPACK_IMPORTED_MODULE_0__; },
  toc: function() { return toc; }
});
/* ESM import */var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_overview_mdx_0fc_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35830);
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50065);
/* ESM import */var _site_src_components_CustomListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23719);
/* ESM import */var _site_src_components_ChangelogComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23727);


const frontMatter = {
	slug: 'overview',
	title: '서비스 개요',
	authors: 'ysj',
	date: '2024-11-27T19:30',
	toc_max_heading_level: 2,
	tags: [
		'새로운 기능',
		'서비스 개요'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [(__webpack_require__(23771)/* ["default"] */.Z)],
};

/*와탭의 서비스 히스토리 개요를 한 눈에 살펴보세요.*/




const toc = [];
function _createMdxContent(props) {
  const _components = {
    img: "img",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__/* .useMDXComponents */.a)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "New Feature Overview",
        src: (__webpack_require__(79555)/* ["default"] */.Z) + "",
        width: "934",
        height: "161"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "와탭이 제공하는 서비스 새로운 기능 개요를 한 눈에 살펴보세요."
    }), "\n"]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__/* .useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



}),
"23771": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/teamtwj-8ca548071cd575b2056335d511c4c2fc.svg");

}),
"79555": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/new_feature_overview_txt-ee61ae3ec473e9be0678e02bdd89b0b9.png");

}),
"23727": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
// 일단 오버뷰랑 서비스 버전 디스플레이 가리고 br 없애기 (0718 이거 씀)



const ChangelogComponent = (param)=>{
    let { children } = param;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // 중복된 changelog-overview, changelog-date, changelog-service 묶음을 체크하기 위한 Set
        const seenCombinations = new Set();
        // 중복된 날짜를 체크하기 위한 Set
        const seenDates = new Set();
        // 모든 changelog-overview 요소 선택
        const overviewElements = document.querySelectorAll('.changelog-overview');
        overviewElements.forEach((overviewEl)=>{
            // changelog-overview 다음에 위치한 changelog-date, changelog-service 요소 선택
            const dateEl = overviewEl.nextElementSibling;
            const serviceEl = dateEl.nextElementSibling;
            if (overviewEl && dateEl && serviceEl) {
                // 각 요소의 텍스트 내용 추출 및 조합
                const overview = overviewEl.textContent.trim();
                const date = dateEl.textContent.trim();
                const service = serviceEl.textContent.trim();
                const combination = `${overview}::${date}::${service}`;
                // 이미 존재하는 조합인 경우 해당 요소들을 숨김 처리
                if (seenCombinations.has(combination)) {
                    overviewEl.style.display = 'none'; // changelog-overview 숨김
                    serviceEl.style.display = 'none'; // changelog-service 숨김
                    overviewEl.classList.add('changelog-overview-dup'); // 중복 표시 클래스 추가
                    serviceEl.classList.add('changelog-service-dup'); // 중복 표시 클래스 추가
                    // changelog-service-dup 다음의 <br> 요소가 있으면 제거
                    const brElement = serviceEl.nextElementSibling;
                    if (brElement && brElement.tagName === 'BR') {
                        brElement.remove();
                    }
                } else {
                    seenCombinations.add(combination); // 새로운 조합 추가
                }
            }
        });
        // 중복된 날짜 체크
        const dateElements = document.querySelectorAll('.changelog-date');
        dateElements.forEach((el)=>{
            const dateText = el.textContent.trim();
            if (seenDates.has(dateText)) {
                el.classList.add('changelog-date-dup'); // 중복 표시 클래스 추가
                el.setAttribute('data-dup', 'true'); // 데이터 속성 설정
            } else {
                seenDates.add(dateText); // 새로운 날짜 추가
            }
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        children: children
    });
};
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangelogComponent);


}),
"23719": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);


function CustomListItem(param) {
    let { children, overview, date, service } = param;
    const listItemProps = {};
    if (overview) {
        listItemProps['data-overview'] = overview;
    }
    if (date) {
        listItemProps['data-date'] = date;
    }
    if (service) {
        listItemProps['data-service'] = service;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
        ...listItemProps,
        children: children
    });
}
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomListItem);


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
"35830": (function (module) {
module.exports = JSON.parse('{"permalink":"/blog/overview","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/overview.mdx","source":"@site/blog/overview.mdx","title":"서비스 개요","description":"New Feature Overview","date":"2024-11-27T19:30:00.000Z","tags":[{"inline":true,"label":"새로운 기능","permalink":"/blog/tags/새로운-기능"},{"inline":true,"label":"서비스 개요","permalink":"/blog/tags/서비스-개요"}],"hasTruncateMarker":true,"authors":[{"name":"TW J","email":"ysjo@whatap.io","title":"테크니컬 라이터","imageURL":"./img/teamtwj.svg","key":"ysj","page":null}],"frontMatter":{"slug":"overview","title":"서비스 개요","authors":"ysj","date":"2024-11-27T19:30","toc_max_heading_level":2,"tags":["새로운 기능","서비스 개요"],"isTranslationMissing":false},"unlisted":false,"nextItem":{"title":"3분기 안내","permalink":"/blog/2024-3q-summary"}}')

}),

}]);