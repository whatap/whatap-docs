# Introduction

WhaTap Docs 문서 관리 플랫폼 Docusaurus 입니다.

## 빌드 방법 및 PDF 제작 방법

<https://www.notion.so/whatap/Docusaurus-b64bd9c10e484e89b302d5ad6ce2295f?pvs=4>

## 다국어 문서 수정 사항

* /\\_([a-z]) -> /_$1

* : \_ -> : _

* \[ -> [

* \: -> :
* _trs-profile.mdx 주석 삭제

:::note null -> :::note

:::note\ -> :::note

<Version> -> {Version} 또는 &lt;Version&gt;

<version> -> {version}

<section>

server-list.mdx -> 주석 삭제

< > -> 부호 앞에 &lt;, &gt; 적용할 것

\<whatap-monitoring\> ->> &lt;whatap-monitoring&gt;
\<section> ->> &lt;section&gt;

  ::: 탭 공백 확인해볼 것

  _sv-w-cpf.mdx 파일 수정

  ../../account/account-manage -> ../account/account-manage 경로 수정할 것

../../project/ -> ../project/

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

_metrics-intro-v2.mdx -> 링크 경로 모두 수정 필요

_db-instance-monitoring-basic-usage.mdx 파일에 코드 수정 필요

_php-extension-whatap.mdx 문서 수정 필요

redhat-centos.mdx, freebsd.mdx, amazon-linux.mdx 노트 원문 추가

php/agent-transaction.mdx(_php-trs-profile.mdx) 탭 공백 수정 필요

aws-log-lt.mdx

라이선스 페이지 국문과 맞출 것

i18n/ja/docusaurus-plugin-content-docs/current/telegraf/introduction.mdx 국문 파일 인덴트 수정

license-open-sources -> ``` 삭제할 것

install-aws-log-vpc.mdx -> 인덴트 확인 필요
