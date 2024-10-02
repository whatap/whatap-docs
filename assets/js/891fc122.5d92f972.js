"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[12059],{

/***/ 84765:
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
;// CONCATENATED MODULE: ./docs/release-notes/dotnet/dotnet-agent.json
const dotnet_agent_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"https://docs.whatap.io/release-notes/dotnet/dotnet-2_3_3","ver":"v2.3.3","date":"2024-09-25","Lists":[{"ver":"v2.3.3","hash":"v233","product":".NET Agent","type":"New","desc":"<p><code class=\\"New\\" type=\\"1\\">New</code> .NET Core에서 SQL 파라미터 모니터링 지원 추가</p>"},{"ver":"v2.3.3","hash":"v233","product":".NET Agent","type":"New","desc":"<p><code class=\\"New\\" type=\\"1\\">New</code> .NET Core에서 Stored Procedure 모니터링 지원 추가</p>"},{"ver":"v2.3.3","hash":"v233","product":".NET Agent","type":"New","desc":"<p><code class=\\"New\\" type=\\"1\\">New</code> <code>System.Net.Http.HttpClient.SendAsync</code> 모니터링 지원 추가</p>"},{"ver":"v2.3.3","hash":"v233","product":".NET Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\" type=\\"0\\">New</code> .NET Core 버전의 에이전트를 설치한 후 삭제하지 않은 상태에서, .NET Framework 버전을 추가로 설치하면 액티브 스택이 수집되지 않는 버그 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/dotnet/dotnet-2_2_5","ver":"v2.2.5","date":"2024-05-08","Lists":[{"ver":"v2.2.5","hash":"v225","product":".NET Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 서버의 CPU 성능에 여유가 없을 때 모니터링 메시지가 지연되어 쌓이면서 병목을 가속하는 오류 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/dotnet/dotnet-2_3_2","ver":"v2.3.2","date":"2024-09-05","Lists":[{"ver":"v2.3.2","hash":"v232","product":".NET Agent","type":"New","desc":"<p><code class=\\"New\\" type=\\"1\\">New</code> 트랜잭션 수집에서 제외할 URL의 접미사(suffix)를 설정할 수 있는 에이전트 옵션 추가</p>","details":"<p><strong>trace_ignore_url_suffix</strong> <span class=\\"type\\">String</span></p>"},{"ver":"v2.3.2","hash":"v232","product":".NET Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\" type=\\"0\\">Fixed</code> Parameterized Query 추적 기능 추가</p>"},{"ver":"v2.3.2","hash":"v232","product":".NET Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\" type=\\"0\\">Fixed</code> REST API 트랜잭션의 상태 코드(status code) 표시에서 발생하는 오류 수정</p>"},{"ver":"v2.3.2","hash":"v232","product":".NET Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\" type=\\"0\\">Fixed</code> <code>System.Data.Common.DbCommand</code> 관련 메서드 중 모니터링에 포함되지 않았던 메서드 추가</p>"}]},{"url":"https://docs.whatap.io/release-notes/dotnet/dotnet-2_2_8","ver":"v2.2.8","date":"2024-06-19","Lists":[{"ver":"v2.2.8","hash":"v228","product":".NET Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> .NET 6, 7, 8 버전 추가 지원</p>","details":"<ul>\\n<li>\\n<p>ASP.NET core 지원</p>\\n</li>\\n<li>\\n<p>HTTP Call, Redis, WCF client, 사용자 로그, Active Stack, SQL 지원</p>\\n</li>\\n<li>\\n<p>별도의 설치 링크로 다운로드하세요. <a href=\\"https://repo.whatap.io/windows/whatap_dotnet_core.exe\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">whatap_dotnet_core.exe</a></p>\\n</li>\\n</ul>"},{"ver":"v2.2.8","hash":"v228","product":".NET Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <code>trace_http_client_ip_header_key</code> 옵션의 기본값을 <code>X-Forwarded-For</code>로 변경</p>"}]},{"url":"https://docs.whatap.io/release-notes/dotnet/dotnet-2_3_0","ver":"v2.3.0","date":"2024-07-31","Lists":[{"ver":"v2.3.0","hash":"v230","product":".NET Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\" type=\\"0\\">Fixed</code> <a href=\\"/release-notes/dotnet/dotnet-2_2_9\\">v2.2.9</a>에서 SQL, HTTP 모니터링이 누락되는 문제 수정</p>"},{"ver":"v2.3.0","hash":"v230","product":".NET Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\" type=\\"0\\">Fixed</code> 패킷 처리가 지연될 때 UDP 패킷이 변조되는 문제 개선</p>"}]},{"url":"https://docs.whatap.io/release-notes/dotnet/dotnet-2_2_6","ver":"v2.2.6","date":"2024-05-24","Lists":[{"ver":"v2.2.6","hash":"v226","product":".NET Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 에이전트 옵션 추가</p>","details":"<ul>\\n<li>\\n<p><strong>trace_ignore_url_set</strong> <span class=\\"type\\">String</span></p>\\n<p>트랜잭션 추적에서 제외할 URL을 설정합니다. 2개 이상의 값을 설정하려면 쉼표(,)를 구분자로 이용하세요.</p>\\n</li>\\n<li>\\n<p><strong>trace_ignore_url_prefix</strong> <span class=\\"type\\">String</span></p>\\n<p>트랜잭션 수집 예외 URL prefix를 설정합니다. 설정한 값과 앞부분이 일치하는 url은 트랜잭션 성능을 수집하지 않습니다. 2개 이상의 값을 설정하려면 쉼표(,)를 구분자로 이용하세요.</p>\\n</li>\\n</ul>"},{"ver":"v2.2.6","hash":"v226","product":".NET Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <code>System.Data.Common.DbCommand</code> 모니터링 여부를 에이전트 설정 옵션으로 선택하도록 변경</p>","details":"<ul>\\n<li>\\n<p>일부 고객의 경우 오래된 어셈블리의 영향으로 오류가 발생하는 현상을 발견했습니다. 오류를 재현할 완벽한 원인을 찾지 못해서 모니터링 대상에서 제외했습니다.</p>\\n</li>\\n<li>\\n<p>모니터링 대상에 추가하기 위해서는 다음 에이전트 옵션을 설정하고 IIS를 재시작하세요.</p>\\n<div class=\\"theme-admonition theme-admonition-tip admonition_xJq3 alert alert--success\\"><div class=\\"admonitionHeading_Gvgb\\"><span class=\\"admonitionIcon_Rf37\\"><svg viewbox=\\"0 0 12 16\\"><path fill-rule=\\"evenodd\\" d=\\"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z\\"></path></svg></span>팁</div><div class=\\"admonitionContent_BuS1\\"><p><strong>trace_db_command_methods</strong> <span class=\\"type\\">String</span></p><p>모니터링할 메소드 이름을 입력하세요. 2개 이상의 값을 설정하려면 쉼표(,)를 구분자로 이용하세요. 모든 메소드를 모니터링하려면 아래와 같이 적용하세요.</p><div class=\\"language-ini codeBlockContainer_Ckt0 theme-code-block\\" style=\\"--prism-color:#bfc7d5;--prism-background-color:#292d3e\\"><div class=\\"codeBlockTitle_Ktv7\\">whatap.conf</div><div class=\\"codeBlockContent_biex\\"><pre tabindex=\\"0\\" class=\\"prism-code language-ini codeBlock_bY9V thin-scrollbar\\" style=\\"color:#bfc7d5;background-color:#292d3e\\"><code class=\\"codeBlockLines_e6Vv\\"><span class=\\"token-line\\" style=\\"color:#bfc7d5\\"><span class=\\"token key attr-name\\" style=\\"color:rgb(255, 203, 107)\\">trace_db_command_methods</span><span class=\\"token punctuation\\" style=\\"color:rgb(199, 146, 234)\\">=</span><span class=\\"token value attr-value\\">ExecuteReader, ExecuteReaderAsync, ExecuteNonQuery, ExecuteNonQueryAsync, ExecuteScalar, ExecuteScalarAsync</span><br></span></code></pre><div class=\\"buttonGroup__atx\\"><button type=\\"button\\" aria-label=\\"클립보드에 코드 복사\\" title=\\"복사\\" class=\\"clean-btn\\"><span class=\\"copyButtonIcons_eSgA\\" aria-hidden=\\"true\\"><svg viewbox=\\"0 0 24 24\\" class=\\"copyButtonIcon_y97N\\"><path fill=\\"currentColor\\" d=\\"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z\\"></path></svg><svg viewbox=\\"0 0 24 24\\" class=\\"copyButtonSuccessIcon_LjdS\\"><path fill=\\"currentColor\\" d=\\"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z\\"></path></svg></span></button></div></div></div></div></div>\\n</li>\\n</ul>"}]},{"url":"https://docs.whatap.io/release-notes/dotnet/dotnet-2_2_9","ver":"v2.2.9","date":"2024-07-05","Lists":[{"ver":"v2.2.9","hash":"v229","product":".NET Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 멀티트랜잭션 모니터링 지원: 와탭 모니터링 플랫폼의 프로젝트로 등록된 애플리케이션 서비스 간의 호출을 추적할 수 있습니다.</p>"}]},{"url":"https://docs.whatap.io/release-notes/dotnet/dotnet-2_3_1","ver":"v2.3.1","date":"2024-08-26","Lists":[{"ver":"v2.3.1","hash":"v231","product":".NET Agent","type":"New","desc":"<p><code class=\\"New\\" type=\\"1\\">New</code> 트랜잭션 외부에서 일어나는 트레이스 정보 수집 기능 추가</p>","details":"<ul>\\n<li>\\n<p><strong>expand_transaction_level</strong> <span class=\\"type\\">Boolean</span></p>\\n<p>기본값 <code>false</code></p>\\n<p>옵션값을 <code>true</code>로 설정하면 트랜잭션 외부에서 발생하는 SQL, HTTP 호출을 트랜잭션으로 취급해서 히트맵에 표시합니다.</p>\\n</li>\\n<li>\\n<p><strong>expand_transaction_basetime</strong> <span class=\\"type\\">Int</span></p>\\n<p>기본값 <code>1000</code>(1초) / 최소값 <code>100</code>(0.1초)</p>\\n<p><code>expand_transaction_level</code> 옵션이 <code>true</code>인 경우, 설정한 시간보다 응답 시간이 오래 걸릴 때에만 데이터를 수집합니다. 초당 최대 100건까지 수집합니다.</p>\\n</li>\\n</ul>"},{"ver":"v2.3.1","hash":"v231","product":".NET Agent","type":"New","desc":"<p><code class=\\"New\\" type=\\"1\\">New</code> DB 연결 정보 표시: 데이터베이스를 사용하는 트랜잭션은 데이터베이스 연결 정보를 표시하는 기능 추가</p>"},{"ver":"v2.3.1","hash":"v231","product":".NET Agent","type":"Changed","desc":"<p><code class=\\"Changed\\" type=\\"1\\">Changed</code> 오류가 아닌 경우에도 트랜잭션의 상태 코드를 표시하도록 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/dotnet/dotnet-2_2_2","ver":"v2.2.2","date":"2024-04-18","Lists":[{"ver":"v2.2.2","hash":"v222","product":".NET Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> DataAdapter.Fill() 메소드 모니터링 추가</p>"},{"ver":"v2.2.2","hash":"v222","product":".NET Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> WebForm 모니터링 지원, 페이지 이동 이벤트를 트랜잭션으로 처리</p>"},{"ver":"v2.2.2","hash":"v222","product":".NET Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 에이전트 옵션 <code>trace_http_client_ip_header_key</code> 추가, 자세한 내용은 <a href=\\"/dotnet/agent-number-of-user#trace_http_client_ip_header_key\\">다음 문서</a>를 참조하세요.</p>"},{"ver":"v2.2.2","hash":"v222","product":".NET Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> IP 주소 표시 오류로 동시 접속자가 제대로 표시되지 않는 현상 수정</p>"},{"ver":"v2.2.2","hash":"v222","product":".NET Agent","type":"Deprecated","desc":"<p><code class=\\"Deprecated\\">Deprecated</code> 에이전트가 body를 읽는 동안 충돌이 일어날 가능성이 있어 <code>profile_http_body_enabled</code> 옵션 지원 중단</p>"}]},{"url":"https://docs.whatap.io/release-notes/dotnet/dotnet-2_2_3","ver":"v2.2.3","date":"2024-04-24","Lists":[{"ver":"v2.2.3","hash":"v223","product":".NET Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Rest API 모니터링 중 특정 조건에서 CPU 사용률이 증가하는 버그 수정</p>","details":"<ul>\\n<li>\\n<p>특정 고객에게서 CPU 사용량이 증가하는 이슈가 발생해 해당 버그를 수정합니다.</p>\\n</li>\\n<li>\\n<p>증상이 나타나지 않는 고객이라도 에이전트를 업그레이드할 것을 권장합니다. 성능 향상에 도움이 됩니다.</p>\\n</li>\\n</ul>"}]},{"url":"https://docs.whatap.io/release-notes/dotnet/dotnet-2_2_7","ver":"v2.2.7","date":"2024-06-10","Lists":[{"ver":"v2.2.7","hash":"v227","product":".NET Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> 지원 환경 분석 툴(<a href=\\"https://repo.whatap.io/windows/WhaTapDotnetScan.exe\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">WhaTapDotnetScan.exe</a>) 개선</p>","details":"<ul>\\n<li>\\n<p>닷넷이 설치되지 않은 환경에서도 실행될 수 있도록 개선</p>\\n</li>\\n<li>\\n<p>낮은 버전의 닷넷 런타임을 사용하거나 닷넷 런타임이 설치되지 않은 경우 발생하는 오류 수정</p>\\n</li>\\n</ul>"},{"ver":"v2.2.7","hash":"v227","product":".NET Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 처리 허용량을 넘어선 트랜잭션을 제거하는 과정에서 시작 시점만 남고 종료 시점이 삭제되는 버그 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/dotnet/dotnet-2_2_4","ver":"v2.2.4","date":"2024-04-30","Lists":[{"ver":"v2.2.4","hash":"v224","product":".NET Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 바이트 코드 처리 프로세스 성능 개선</p>"},{"ver":"v2.2.4","hash":"v224","product":".NET Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 로그 처리 프로세스 성능 개선</p>"},{"ver":"v2.2.4","hash":"v224","product":".NET Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> UDP 패킷 프로세스 성능 개선</p>"},{"ver":"v2.2.4","hash":"v224","product":".NET Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <a href=\\"http://ASP.NET\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ASP.NET</a> MVC 라이브러리 처리 프로세스 성능 개선</p>"}]},{"url":"https://docs.whatap.io/release-notes/dotnet/dotnet-2_2_1","ver":"v2.2.1","date":"2024-04-09","Lists":[{"ver":"v2.2.1","hash":"v221","product":".NET Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 에이전트 옵션 추가</p>","details":"<ul>\\n<li>\\n<p><strong>prepend_app_pool_name</strong> <span class=\\"type\\">Boolean</span></p>\\n<p>기본값 <code>false</code></p>\\n<p>옵션값을 <code>true</code>로 설정하면 트랜잭션의 URL 앞에 애플리케이션의 전체 이름을 표시합니다.</p>\\n</li>\\n</ul>"},{"ver":"v2.2.1","hash":"v221","product":".NET Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> 오래된 버전의 호환성을 높이기 위해서 설치 파일 분리</p>","details":"<ul>\\n<li>\\n<p>.NET 4.6.1 버전 이상의 런타임을 사용하는 경우: <a href=\\"https://repo.whatap.io/windows/whatap_dotnet.exe\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">whatap_dotnet.exe</a></p>\\n</li>\\n<li>\\n<p>.NET 4.6.1 버전 미만의 런타임을 사용하거나 Windows Server 2012 미만의 경우: <a href=\\"https://repo.whatap.io/windows/whatap_dotnet_450.exe\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">whatap_dotnet_450.exe</a></p>\\n<div class=\\"theme-admonition theme-admonition-note admonition_xJq3 alert alert--secondary\\"><div class=\\"admonitionHeading_Gvgb\\"><span class=\\"admonitionIcon_Rf37\\"><svg viewbox=\\"0 0 14 16\\"><path fill-rule=\\"evenodd\\" d=\\"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z\\"></path></svg></span>노트</div><div class=\\"admonitionContent_BuS1\\"><p>Windows Server 2008부터 지원합니다.</p></div></div>\\n</li>\\n</ul>"},{"ver":"v2.2.1","hash":"v221","product":".NET Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <code>webservice_method_enabled</code> 옵션: 메소드가 중첩으로 실행되는 경우 모니터링되지 않는 버그 수정</p>"},{"ver":"v2.2.1","hash":"v221","product":".NET Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 32비트 닷넷 런타임에서 <em>whatap.conf</em> 파일을 찾지 못하는 문제 수정</p>"}]}]');
;// CONCATENATED MODULE: ./docs/release-notes/dotnet/index.mdx


const frontMatter = {
	id: 'index',
	title: '.NET Agent Release Notes',
	displayed_sidebar: 'releaseSidebar',
	hide_table_of_contents: true,
	toc_min_heading_level: 2,
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/dotnet/index",
  "title": ".NET Agent Release Notes",
  "description": "Release history for 2024",
  "source": "@site/docs/release-notes/dotnet/index.mdx",
  "sourceDirName": "release-notes/dotnet",
  "slug": "/release-notes/dotnet/",
  "permalink": "/whatap-docs/release-notes/dotnet/",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/dotnet/index.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "index",
    "title": ".NET Agent Release Notes",
    "displayed_sidebar": "releaseSidebar",
    "hide_table_of_contents": true,
    "toc_min_heading_level": 2,
    "isTranslationMissing": false
  },
  "sidebar": "releaseSidebar",
  "previous": {
    "title": "Python Agent 지난 버전",
    "permalink": "/whatap-docs/release-notes/python/python-previous"
  },
  "next": {
    "title": ".NET Agent v2.3.4",
    "permalink": "/whatap-docs/release-notes/dotnet/dotnet-2_3_4"
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
        filePath: dotnet_agent_namespaceObject,
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