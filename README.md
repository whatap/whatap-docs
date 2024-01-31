# Introduction

WhaTap Docs 문서 관리 플랫폼 Docusaurus 입니다.

## 빌드 방법 및 PDF 제작 방법

[https://github.com/whatap/whatap-docs/wiki](https://github.com/whatap/whatap-docs/wiki)

## 다국어 작업

### Crowdin CLI 설치

클라우딘 CLI 다운로드: `brew install crowdin@3`

참조: <https://crowdin.github.io/crowdin-cli/>

### 번역을 위한 클라우딘 업로드

참조. 번역 업로드 전 다음의 파일에 주석 삭제할 것

- about-apm-heap-memory.mdx
- kubernetes/dashboard.mdx

```
crowdin upload
# or
npm run crowdin upload
```

### 번역 다운로드

```
crowdin download
# or
npm run crowdin download
```

언어별 다운로드 `crowdin download -l en`

### 다국어 문서 수정 사항

- 번역 중 수동으로 수정한 사항이 있을 수 있습니다. 해당 건이 취소되지 않도록 이전 파일과 비교해 검토하세요.
- 일부는 이전 파일과 비교해 적용되지 말아야할 부분도 있을 수 있습니다. 예, Order list 번호, 인덴트 간격이 수정된 파일, 코드 블락에 적용된 수동 번역
- 향후 MDX 3 지원을 위해 외부 링크를 이전 파일 기준으로 적용해야 하는 부분도 있습니다. 예, <https://www.whatap.io> -> (x) \<<https://wwww.whatap.io\>>

정규표현식 찾아 바꾸기

- /\\_([a-z]) -> /_$1

일반 찾아바꾸기

- : \_ -> : _
- \[ -> [
- \: -> :

< > -> 부호 앞에 &lt;, &gt; 적용할 것

- \<whatap-monitoring\> ->> &lt;whatap-monitoring&gt;
- \<section> ->> &lt;section&gt;

문장 끝 / 으로 끝나는 부분 확인해볼 것

영문, 일본어에서 index(홈화면), reference 페이지의 pdf 다운로드 관련 내용 삭제할 것

일본어 괄호 부분 수정

[次の文書]\(..// account/account-manage) 관련 부분 수정

[次の文書]（trs-view#詳細-分析）

[次の記事] \(openapi-call-apm-stat-data)

）로 끝나는 부분 확인 => 정규식 \]\(([^>]+)）

\(<https://pypi.org/project/whatap-python/> #files)

code(```) sql title='에이전트별 액티브TX 건수, <구간별> 건수, 최근 15초'
=> 한글로 들어간 부분 수정 필요

[次の文書](..／billing) -> 슬래시 수정할 것

라이선스 페이지 국문과 맞출 것
