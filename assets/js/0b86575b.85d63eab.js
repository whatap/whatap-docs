"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[85694],{

/***/ 86496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/release-notes/php/php-agent.json
const php_agent_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"https://docs.whatap.io/release-notes/php/php-2_8_2","ver":"v2.8.2","date":"2024-09-11","Lists":[{"ver":"v2.8.2","hash":"v282","product":"PHP Agent","type":"New","desc":"<p><code class=\\"New\\" type=\\"1\\">New</code> 에이전트 설정 파일(<em>whatap.ini</em>)보다 환경 변수를 우선 처리하는 옵션 추가</p>","details":"<ul>\\n<li>\\n<p>기존 에이전트 설정은 <em>whatap.ini</em>, 환경 변수 순서로 적용합니다.</p>\\n</li>\\n<li>\\n<p><code>use_env_first</code> (기본값 <code>false</code>) 옵션을 설정하면 <em>whatap.ini</em> 파일의 설정보다 환경 변수를 우선 적용합니다.</p>\\n<div class=\\"language-ini codeBlockContainer_Ckt0 theme-code-block\\" style=\\"--prism-color:#bfc7d5;--prism-background-color:#292d3e\\"><div class=\\"codeBlockTitle_Ktv7\\">whatap.ini</div><div class=\\"codeBlockContent_biex\\"><pre tabindex=\\"0\\" class=\\"prism-code language-ini codeBlock_bY9V thin-scrollbar\\" style=\\"color:#bfc7d5;background-color:#292d3e\\"><code class=\\"codeBlockLines_e6Vv\\"><span class=\\"token-line\\" style=\\"color:#bfc7d5\\"><span class=\\"token key attr-name\\" style=\\"color:rgb(255, 203, 107)\\">whatap.use_env_first</span><span class=\\"token punctuation\\" style=\\"color:rgb(199, 146, 234)\\">=</span><span class=\\"token value attr-value\\">true</span><br></span></code></pre><div class=\\"buttonGroup__atx\\"><button type=\\"button\\" aria-label=\\"클립보드에 코드 복사\\" title=\\"복사\\" class=\\"clean-btn\\"><span class=\\"copyButtonIcons_eSgA\\" aria-hidden=\\"true\\"><svg viewbox=\\"0 0 24 24\\" class=\\"copyButtonIcon_y97N\\"><path fill=\\"currentColor\\" d=\\"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z\\"></path></svg><svg viewbox=\\"0 0 24 24\\" class=\\"copyButtonSuccessIcon_LjdS\\"><path fill=\\"currentColor\\" d=\\"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z\\"></path></svg></span></button></div></div></div>\\n</li>\\n<li>\\n<p><code>WHATAP_USE_ENV_FIRST=true</code> 형식으로 환경 변수를 이용해 설정할 수 있습니다.</p>\\n</li>\\n</ul>"},{"ver":"v2.8.2","hash":"v282","product":"PHP Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\" type=\\"0\\">Fixed</code> <code>OKIND</code> 환경 변수 인식 오류 수정</p>","details":"<p><code>OKIND</code> 또는 <code>WHATAP_OKIND</code> 환경 변수로 <code>okind</code>를 설정할 수 있습니다.</p>"}]},{"url":"https://docs.whatap.io/release-notes/php/php-2_8_0","ver":"v2.8.0","date":"2024-06-19","Lists":[{"ver":"v2.8.0","hash":"v280","product":"PHP Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> linux aarch64 지원</p>"},{"ver":"v2.8.0","hash":"v280","product":"PHP Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> 기존 <em>paramkey.txt</em> 대신 <em>security.conf</em> 파일 사용</p>","details":"<p>기존 <em>security.conf</em> 파일의 <code>paramkey</code> 키의 값을 사용합니다. 기본값은 무작위값이 아닌 <code>WHATAP</code>으로 지정도록 변경합니다. <code>WHATAP</code> 지정되면 키 입력없이 복호화할 수 있습니다.</p>"},{"ver":"v2.8.0","hash":"v280","product":"PHP Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> SQL 문장의 정규화 옵션 설정 변경</p>","details":"<ul>\\n<li>\\n<p>SQL 문장에서 파라미터를 분리하여 정규화하는 기능을 항상 활성화하세요. <code>whatap.trace_sql_normalize_enabled</code> 옵션을 항상 <code>true</code>로 설정하세요.</p>\\n</li>\\n<li>\\n<p>이미 정규화 옵션을 비활성화(정규화 중지 설정)한 상태라면, 정규화해서 파라미터를 별도 표기하는 설정을 활성화하세요.</p>\\n<ul>\\n<li><code>whatap.profile_sql_param_enabled</code> 옵션을 <code>true</code>로 설정하세요.</li>\\n<li>정규화된 파라미터를 별도 암호화하여 수집합니다.</li>\\n<li><em>security.conf</em>의 <code>paramkey</code>로 복호화하여 데이터를 확인할 수 있습니다.</li>\\n</ul>\\n</li>\\n</ul>"}]},{"url":"https://docs.whatap.io/release-notes/php/php-2_7_2","ver":"v2.7.2","date":"2024-03-06","Lists":[{"ver":"v2.7.2","hash":"v272","product":"PHP Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> 로그 모니터링 파일 이름에 날짜 형식의 변수를 사용하도록 수정</p>","details":"<blockquote>\\n<p>Python <code>strftime()</code> 사용 기준으로 수정합니다. 예, 20240101: %Y%m%d</p>\\n</blockquote>"},{"ver":"v2.7.2","hash":"v272","product":"PHP Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> 설치 스크립트(<em>/usr/whatap/php/install.sh</em>) 안내 문구 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/php/php-2_8_1","ver":"v2.8.1","date":"2024-07-24","Lists":[{"ver":"v2.8.1","hash":"v281","product":"PHP Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> IP 주소별 트랜잭션 통계를 수집하는 에이전트 설정 옵션 추가</p>","details":"<blockquote>\\n<p><strong>whatap.stat_ipurl_enabled</strong> <span class=\\"type\\">Boolean</span>, 기본값 <code>false</code></p>\\n</blockquote>"},{"ver":"v2.8.1","hash":"v281","product":"PHP Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 통계 압축 전송을 설정하는 에이전트 설정 옵션 추가</p>","details":"<blockquote>\\n<p><strong>whatap.stat_zip_enabled</strong> <span class=\\"type\\">Boolean</span>, 기본값 <code>true</code></p>\\n</blockquote>"}]},{"url":"https://docs.whatap.io/release-notes/php/php-2_7_1","ver":"v2.7.1","date":"2024-01-24","Lists":[{"ver":"v2.7.1","hash":"v271","product":"PHP Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <code>whatap.onode</code> 옵션 설정 후 이름이 아닌 해쉬(숫자)값만 표기되는 오류 수정</p>"},{"ver":"v2.7.1","hash":"v271","product":"PHP Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Ubuntu 14 버전에서 whatap-php.service 파일이 인식 안되는 오류 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/php/php-2_7_0","ver":"v2.7.0","date":"2024-01-10","Lists":[{"ver":"v2.7.0","hash":"v270","product":"PHP Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> PHP 8.3 지원</p>"},{"ver":"v2.7.0","hash":"v270","product":"PHP Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 멀티 트랜잭션 추적에서 Trace context(W3C) 지원</p>","details":"<p>Trace context를 지원하는 <strong>OpenTelmetry</strong>와 멀티 트랜잭션 추적 연계를 지원합니다.</p>"},{"ver":"v2.7.0","hash":"v270","product":"PHP Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> SQL, Method, HTTP call의 리소스 지표 수집 수정</p>","details":"<p>트랜잭션 시작 시점의 리소스(cpu, memory)와 각 스탭 시작 시점의 리소스 차이를 수집합니다.</p>"},{"ver":"v2.7.0","hash":"v270","product":"PHP Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> 설정 파일(<em>whatap.conf</em>)이 없을 경우 새로 생성하도록 수정</p>"},{"ver":"v2.7.0","hash":"v270","product":"PHP Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 액티브 트랜잭션 목록에서 외부 호출 누적 건수가 누적 시간으로 잘못 수집되는 오류 수정</p>"},{"ver":"v2.7.0","hash":"v270","product":"PHP Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 리눅스 환경에서 whatap-php 서비스(<code>whatap-php.service</code>) 실행 오류 수정</p>"},{"ver":"v2.7.0","hash":"v270","product":"PHP Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> PHP 8.1.0 버전에서 8.1.2 버전까지 발생하는 segmentation 오류 수정(사용자 함수에 대한 수집 중지)</p>"}]}]');
;// CONCATENATED MODULE: ./docs/release-notes/php/index.mdx


const frontMatter = {
	id: 'index',
	title: 'PHP Agent Release Notes',
	displayed_sidebar: 'releaseSidebar',
	hide_table_of_contents: true,
	toc_min_heading_level: 2,
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/php/index",
  "title": "PHP Agent Release Notes",
  "description": "Release history for 2024",
  "source": "@site/docs/release-notes/php/index.mdx",
  "sourceDirName": "release-notes/php",
  "slug": "/release-notes/php/",
  "permalink": "/release-notes/php/",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/php/index.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "index",
    "title": "PHP Agent Release Notes",
    "displayed_sidebar": "releaseSidebar",
    "hide_table_of_contents": true,
    "toc_min_heading_level": 2,
    "isTranslationMissing": false
  },
  "sidebar": "releaseSidebar",
  "previous": {
    "title": "Java Batch Agent v2.2.19",
    "permalink": "/release-notes/java-batch/java-batch-2_2_19"
  },
  "next": {
    "title": "PHP Agent v2.8.2",
    "permalink": "/release-notes/php/php-2_8_2"
  }
};
const assets = {

};




const toc = [{
  "value": "Release history for 2024",
  "id": "release-history-for-2024",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    section: "section",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Head, ImportJson} = _components;
  if (!Head) _missingMdxReference("Head", true);
  if (!ImportJson) _missingMdxReference("ImportJson", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      children: (0,jsx_runtime.jsx)("meta", {
        name: "robots",
        content: "noindex, nofollow"
      })
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "release-history-for-2024",
        children: "Release history for 2024"
      }), (0,jsx_runtime.jsx)(ImportJson, {
        filePath: php_agent_namespaceObject,
        sort: "date",
        category: "agent"
      })]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
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