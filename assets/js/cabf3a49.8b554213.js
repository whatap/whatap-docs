"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[57086],{

/***/ 911:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28453);
/* harmony import */ var _site_src_components_CustomListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48530);
/* harmony import */ var _site_src_components_ChangelogComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74979);


const frontMatter = {
	slug: 'overview',
	title: '서비스 개요',
	authors: 'ysj',
	date: '2024-10-23T15:30',
	toc_max_heading_level: 2,
	tags: [
		'새로운 기능',
		'서비스 개요'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/whatap-docs/blog/overview",
  "editUrl": "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/overview.mdx",
  "source": "@site/blog/overview.mdx",
  "title": "서비스 개요",
  "description": "New Feature Overview",
  "date": "2024-10-23T15:30:00.000Z",
  "tags": [
    {
      "inline": true,
      "label": "새로운 기능",
      "permalink": "/whatap-docs/blog/tags/새로운-기능"
    },
    {
      "inline": true,
      "label": "서비스 개요",
      "permalink": "/whatap-docs/blog/tags/서비스-개요"
    }
  ],
  "hasTruncateMarker": true,
  "authors": [
    {
      "name": "TW J",
      "email": "ysjo@whatap.io",
      "title": "테크니컬 라이터",
      "imageURL": "./img/teamtwj.svg",
      "key": "ysj",
      "page": null
    }
  ],
  "frontMatter": {
    "slug": "overview",
    "title": "서비스 개요",
    "authors": "ysj",
    "date": "2024-10-23T15:30",
    "toc_max_heading_level": 2,
    "tags": [
      "새로운 기능",
      "서비스 개요"
    ],
    "isTranslationMissing": false
  },
  "unlisted": false,
  "nextItem": {
    "title": "3분기 안내",
    "permalink": "/whatap-docs/blog/2024-3q-summary"
  }
};
const assets = {
"authorsImageUrls": [(__webpack_require__(82799)/* ["default"] */ .A)],
};

/*와탭의 서비스 히스토리 개요를 한 눈에 살펴보세요.*/




const toc = [];
function _createMdxContent(props) {
  const _components = {
    img: "img",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "New Feature Overview",
        src: (__webpack_require__(37884)/* ["default"] */ .A) + "",
        width: "934",
        height: "161"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "와탭이 제공하는 서비스 새로운 기능 개요를 한 눈에 살펴보세요."
    }), "\n"]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
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

/***/ 82799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/teamtwj-8ca548071cd575b2056335d511c4c2fc.svg");

/***/ }),

/***/ 74979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);

// 일단 오버뷰랑 서비스 버전 디스플레이 가리고 br 없애기 (0718 이거 씀)


const ChangelogComponent = ({ children  })=>{
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangelogComponent);


/***/ }),

/***/ 48530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
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


function CustomListItem({ children , overview , date , service  }) {
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", _objectSpreadProps(_objectSpread({}, listItemProps), {
        children: children
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomListItem);


/***/ }),

/***/ 37884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/new_feature_overview_txt-ee61ae3ec473e9be0678e02bdd89b0b9.png");

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