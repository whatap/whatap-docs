import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
  usePluralForm,
} from '@docusaurus/theme-common';
import Translate, {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import SearchMetadata from '@theme/SearchMetadata';
// Very simple pluralization: probably good enough for now
function useNDocsTaggedPlural() {
  const {selectMessage} = usePluralForm();
  return (count) =>
    selectMessage(
      count,
      translate(
        {
          id: 'theme.docs.tagDocListPageTitle.nDocsTagged',
          description:
            'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: 'One doc tagged|{count} docs tagged',
        },
        {count},
      ),
    );
}
function DocItem({doc}) {
  var parent;
  var hrefid = doc.permalink;
  if (hrefid.includes('java')) {
    parent = "Java 모니터링";
  } else if (hrefid.includes('php')) {
    parent = "PHP 모니터링";
  } else if (hrefid.includes('nodejs')) {
    parent = "Node.js 모니터링";
  } else if (hrefid.includes('python')) {
    parent = "Python 모니터링";
  } else if (hrefid.includes('dotnet')) {
    parent = ".NET 모니터링";
  } else if (hrefid.includes('golang')) {
    parent = "Golang 모니터링";
  } else if (hrefid.includes('server')) {
    parent = "Server 모니터링";
  } else if (hrefid.includes('kubernetes')) {
    parent = "Kubernetes 모니터링";
  } else if (hrefid.includes('k8s')) {
    parent = "Kubernetes 모니터링";
  } else if (hrefid.includes('postgresql')) {
    parent = "PostgreSQL 모니터링";
  } else if (hrefid.includes('oracle')) {
    parent = "Oracle 모니터링";
  } else if (hrefid.includes('mysql')) {
    parent = "MySQL 모니터링";
  } else if (hrefid.includes('mssql')) {
    parent = "MS SQL Server 모니터링";
  } else if (hrefid.includes('tibero')) {
    parent = "Tibero 모니터링";
  } else if (hrefid.includes('cubrid')) {
    parent = "CUBRID 모니터링";
  } else if (hrefid.includes('altibase')) {
    parent = "Altibase 모니터링";
  } else if (hrefid.includes('redis')) {
    parent = "Redis 모니터링";
  } else if (hrefid.includes('mongodb')) {
    parent = "MongoDB 모니터링";
  } else if (hrefid.includes('url')) {
    parent = "URL 모니터링";
  } else if (hrefid.includes('cloudwatch')) {
    parent = "Amazon CloudWatch";
  } else if (hrefid.includes('acw')) {
    parent = "Amazon CloudWatch";
  }else if (hrefid.includes('ecs')) {
    parent = "Amazon ECS";
  } else if (hrefid.includes('azure')) {
    parent = "Azure Moitor";
  } else if (hrefid.includes('ncloud')) {
    parent = "Naver Cloud Monitor";
  } else if (hrefid.includes('oracle-cloud')) {
    parent = "Oracle Cloud Monitor";
  } else if (hrefid.includes('log')) {
    parent = "Log 모니터링";
  } else if (hrefid.includes('rum')) {
    parent = "브라우저 모니터링(RUM)";
  } else if (hrefid.includes('telegraf')) {
    parent = "Telegraf";
  } else if (hrefid.includes('focus')) {
    parent = "Focus";
  } else if (hrefid.includes('ref-cloud')) {
    parent = "클라우드 모니터링";
  } else if (hrefid.includes('mxql')) {
    parent = "참조 문서 > MXQL";
  } else if (hrefid.includes('openapi')) {
    parent = "참조 문서 > Open API";
  } else if (hrefid.includes('glossary')) {
    parent = "용어 사전";
  }else if (hrefid.match(/billing|account|manage|group|maintenance|organization|project|rt-notification/g)) {
    parent = "관리 기능";
  } else {
    parent = '...'
  }
  return (
    <article className="margin-vert--lg">
      <Link to={doc.permalink}>
        <h2>{doc.title}</h2>
      </Link>
      {parent && <p><b>{parent}</b></p>}
      {doc.description && <p>{doc.description}</p>}
    </article>
  );
}

export default function DocTagDocListPage({tag}) {
  const nDocsTaggedPlural = useNDocsTaggedPlural();
  const title = translate(
    {
      id: 'theme.docs.tagDocListPageTitle',
      description: 'The title of the page for a docs tag',
      message: '{nDocsTagged} with "{tagName}"',
    },
    {nDocsTagged: nDocsTaggedPlural(tag.count), tagName: tag.label},
  );
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.docsPages,
        ThemeClassNames.page.docsTagDocListPage,
      )}>
      <PageMetadata title={title} />
      <SearchMetadata tag="doc_tag_doc_list" />
      <Layout>
        <div className="container margin-vert--lg">
          <div className="row">
            <main className="col col--8 col--offset-2">
              <header className="margin-bottom--xl">
                <h1>{title}</h1>
                <Link href={tag.allTagsPath}>
                  <Translate
                    id="theme.tags.tagsPageLink"
                    description="The label of the link targeting the tag list page">
                    View All Tags
                  </Translate>
                </Link>
              </header>
              <section className="margin-vert--lg">
                {tag.items.map((doc) => (
                  <DocItem key={doc.id} doc={doc} />
                ))}
              </section>
            </main>
          </div>
        </div>
      </Layout>
    </HtmlClassNameProvider>
  );
}
