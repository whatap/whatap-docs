# Introduction

WhaTap Docs 문서 관리 플랫폼 Docusaurus 입니다.

## 빌드 방법 및 PDF 제작 방법

<https://www.notion.so/whatap/Docusaurus-b64bd9c10e484e89b302d5ad6ce2295f?pvs=4>

## 다국어 문서 수정 사항

* /\\_([a-z]) -> /_$1

* : \_ -> : _

* \[ -> [

* _trs-profile.mdx 주석 삭제

:::note null -> :::note

:::note\ -> :::note

<Version> -> {Version} 또는 &lt;Version&gt;

<version> -> {version}

<section>

server-list.mdx -> 주석 삭제

< > -> 부호 앞에 &lt;, &gt; 적용할 것

\<whatap-monitoring\> ->> &lt;whatap-monitoring&gt;

  ::: 탭 공백 확인해볼 것

  _sv-w-cpf.mdx 파일 수정

  ../../account/account-manage -> ../account/account-manage 경로 수정할 것

../../project/ -> ../project/

영문, 일본어에서 index(홈화면), reference 페이지의 pdf 다운로드 관련 내용 삭제할 것

일본어 괄호 부분 수정

[次の文書]\(..// account/account-manage) 관련 부분 수정

[次の文書]（trs-view#詳細-分析）

[次の記事] \(openapi-call-apm-stat-data)

）로 끝나는 부분 확인 => 정규식 \]\(([^>]+)）

\(<https://pypi.org/project/whatap-python/> #files)

```sql title='에이전트별 액티브TX 건수, <구간별> 건수, 최근 15초'
=> 한글로 들어간 부분 수정 필요