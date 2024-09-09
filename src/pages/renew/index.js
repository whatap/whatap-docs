import React, {useState, createElement} from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import Head from '@docusaurus/Head';
import {
    meilisearchAutocompleteClient,
    getMeilisearchResults,
} from '@meilisearch/autocomplete-client';
import '@algolia/autocomplete-theme-classic';
import { Autocomplete } from './Autocomplete.js';
import { ProductItem } from './ProductItem.js';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx'; 
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

const searchClient = meilisearchAutocompleteClient({
    url: 'https://meilsearch.whatap.io',
    apiKey: 'dgoMBc2t6fVzILDGqhh63uBXACGOmJbKNnE_Xv8_Hqk',
})

function App() {
    const { i18n: {currentLocale} } = useDocusaurusContext();
    const lang = currentLocale;

    return (
        <div className={styles.appcontainer}>
            <Autocomplete
                openOnFocus={false}
                getSources={({ query }) => [
                    {
                        sourceId: 'products',
                        getItems() {
                            const description = getMeilisearchResults({
                                searchClient: searchClient,
                                queries: [
                                    {
                                        indexName: 'whatap',
                                        query,
                                        params: {
                                            hitsPerPage: 10,
                                            attributesToSnippet: ['description:10'],
                                            snippetEllipsisText: '...',
                                            filters: [`lang=${lang} AND hierarchy_lvl0!=Documentation`],
                                        },
                                    }
                                ],
                            })
                            return description
                        },
                        templates: {
                            item({ item, components }) {
                                return <ProductItem hit={item} components={components}/>;
                            },
                        },
                    },
                ]}
                onSubmit={(event) => {
                    // Code to run when the form submits
                    const Searchparam = event.state.query;
                    if (Searchparam) {
                        const searchUrl = `/search?whatap%5Bquery%5D=${encodeURIComponent(Searchparam)}`;
                        window.location.href = searchUrl;
                    }
                }}
            />
        </div>
    );
}

function Step({children, order}) {
    return (
        <div className={clsx('guide-col d-flex', styles.flexcolumn)}>
            <div className={styles.innercontent}>
                <img src={`/img/number-0${order}.png`} className={styles.iconumber} />
                {children}
            </div>
        </div>
    )
}
function RightArrow() {
    return (
        <div className={styles.rightarrowcontainer}>
            <svg className={styles.rightarrow} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0,0 L100,50 L0,100"></path></svg>
            {/* <svg class="d-block d-md-none down-arrow" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 0 L50 100 L100 0"></path></svg> */}
        </div>
    )
}
function Description({children}) {
    return (
        <p className={clsx(styles.textleft, styles.small)}>
            {children}
        </p>
    )
}
function ThereeSteps() {
    return (
        <section className={clsx('row guides', styles.justifycontentcenter)}>
            <Step order={1}>
                <Link to="quick-guide/#account"><Heading as="h5" className={styles.inline}>회원 가입</Heading></Link>
                <Description>
                    와탭 모니터링 서비스를 이용하려면 회원 가입을 진행하세요. 15일간 무료 체험할 수 있습니다.
                </Description>
            </Step>
            <RightArrow/>
            <Step order={2}>
                <Link to="quick-guide/#cproject"><Heading as="h5" className={styles.inline}>프로젝트 생성 및 에이전트 설치</Heading></Link>
                <Description>
                    프로젝트를 생성하고 액세스 키를 발급 받은 후 모니터링 대상에 에이전트를 설치하세요.
                </Description>
            </Step>
            <RightArrow/>
            <Step order={3}>
                <Link to="quick-guide/#dashboard"><Heading as="h5" className={styles.inline}>대시보드 조회하기</Heading></Link>
                <Description>
                    에이전트 설치 후 데이터가 와탭 서버로 전달되면 대시보드 메뉴에서 프로젝트의 전체 현황을 실시간으로 조회할 수 있습니다.
                </Description>
            </Step>
        </section>
    )
}

function FlexCard({icons, product, type, url, children}) {
    if (type === 'document') {
        return (
            <div className={styles.flexProd}>
                <Link to={url} className={styles.alignCenter}>
                    <div className={styles.document}>
                        <div className={styles.logo}>
                            <img src={`/img/${icons}`} />
                        </div>
                        <div className={styles.title}>{children}</div>
                    </div>
                </Link>
            </div>
        )
    }
    return (
        <div className={styles.flexProd}>
            <Link to={url} className={styles.alignCenter}>
                <div className={styles.product}>
                    <div className={styles.logo}>
                        <img src={`/img/${icons}`} />
                    </div>
                    <div className={styles.desc}>
                        <div className={styles.title}>{product}</div>
                        <div className={styles.type}><code className={`${type}`}>{type}</code></div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default function pages() {

    return (
        <Layout>
        <Head>
        <meta name="robots" content="noindex, nofollow"/>
        </Head>
        <div className={styles.homehero}>
            <h1 className={styles.frontheading}>Welcome to the WhaTab Docs page</h1>
            <App />
        </div>
        <ThereeSteps />
        <section className={clsx('row nav-tiles', styles.justifycardcontent)}>
            <Heading as="h2" className={styles.textcenter}>시작하기 전에</Heading>
            
            <div className={styles.flexContainer}>
                <FlexCard icons="logo.svg" type="document" url="whatap-overview" >와탭 모니터링 서비스</FlexCard>

                <FlexCard icons="logo.svg" type="document" url="support-env" >지원 환경</FlexCard>

                <FlexCard icons="logo.svg" type="document" url="main-ui-intro-v2" >홈 화면 안내</FlexCard>

                <FlexCard icons="logo.svg" type="document" url="mobile-app" >모바일 앱</FlexCard>
            </div>
        </section>
        <section className={clsx('row nav-tiles', styles.justifycardcontent)}>
            <Heading as="h2" className={styles.textcenter}>상품</Heading>
            
            <div className={styles.flexContainer}>
                <FlexCard icons="index-icon/product-java-l.svg" product="Java" type="Application" url="java/introduction" />

                <FlexCard icons="index-icon/product-nodejs-l.svg" product="Node.js" type="Application" url="nodejs/introduction" />

                <FlexCard icons="index-icon/product-php-l.svg" product="PHP" type="Application" url="php/introduction" />

                <FlexCard icons="index-icon/product-python-l.svg" product="Python" type="Application" url="python/introduction" />

                <FlexCard icons="index-icon/product-dotnet-l.svg" product=".NET" type="Application" url="dotnet/introduction" />

                <FlexCard icons="index-icon/product-go-l.svg" product="Go" type="Application" url="golang/introduction" />

                <FlexCard icons="index-icon/product-server-l.svg" product="Server" type="Server" url="server/introduction" />

                <FlexCard icons="index-icon/product-kubernetes-l.svg" product="Kubernetes" type="Container" url="kubernetes/introduction" />

                <FlexCard icons="index-icon/product-postgresql-l.svg" product="PostgreSQL" type="Database" url="postgresql/monitoring-intro" />

                <FlexCard icons="index-icon/product-oracle-l.svg" product="Oracle" type="Database" url="oracle/monitoring-intro" />

                <FlexCard icons="index-icon/product-oracle-l.svg" product="Oracle Pro" type="Database" url="oracle-pro/monitoring-intro" />

                <FlexCard icons="index-icon/product-mysql-l.svg" product="MySQL" type="Database" url="mysql/monitoring-intro" />

                <FlexCard icons="index-icon/product-mssql-l.svg" product="SQL Server" type="Database" url="mssql/monitoring-intro" />

                <FlexCard icons="index-icon/product-tibero-l.svg" product="Tibero" type="Database" url="tibero/monitoring-intro" />

                <FlexCard icons="index-icon/product-cubrid-l.svg" product="CUBRID" type="Database" url="cubrid/monitoring-intro" />

                <FlexCard icons="index-icon/product-altibase-l.svg" product="Altibase" type="Database" url="altibase/monitoring-intro" />

                <FlexCard icons="index-icon/product-redis-l.svg" product="Redis" type="Database" url="redis/monitoring-intro" />

                <FlexCard icons="index-icon/product-mongodb-l.svg" product="Mongodb" type="Database" url="mongodb/monitoring-intro" />

                <FlexCard icons="index-icon/product-url-l.svg" product="URL" type="URL" url="url/url-intro" />

                <FlexCard icons="index-icon/product-rum-l.svg" product="Browser" type="browser" url="browser" />

                <FlexCard icons="index-icon/product-aws-l.svg" product="Amazon CloudWatch" type="AWS" url="amazon-cloudwatch/install-agent" />

                <FlexCard icons="index-icon/product-aws-ecs-l.svg" product="Amazon ECS" type="AWS" url="amazon-ecs/introduction" />

                <FlexCard icons="index-icon/product-aws-log-l.svg" product="AWS Log" type="AWS" url="aws-log/introduction" />

                <FlexCard icons="index-icon/product-azure-l.svg" product="Azure Monitor" type="AZURE" url="azure/install-agent" />

                <FlexCard icons="index-icon/product-naver-l.svg" product="Naver Cloud Monitoring" type="NCP" url="ncloud/install-agent" />

                <FlexCard icons="index-icon/product-oracle-l.svg" product="Oracle Cloud Monitor" type="OCI" url="oracle-cloud/install-agent" />

                <FlexCard icons="index-icon/product-npm-l.svg" product="Network Performance Monitoring" type="Network" url="npm/introduction" />

                <FlexCard icons="index-icon/product-feature-l.svg" product="Feature Project" type="Features" url="features/introduction" status="beta" />

            </div>
        </section>

        <section className={clsx('row nav-tiles', styles.justifycardcontent)}>
            <Heading as="h2" className={styles.textcenter}>관리</Heading>
            
            <div className={styles.flexContainer}>
                <FlexCard icons="logo.svg" type="document" url="account/account-manage" >계정 관리</FlexCard>

                <FlexCard icons="logo.svg" type="document" url="account/mfa" >멀티팩터 인증</FlexCard>

                <FlexCard icons="logo.svg" type="document" url="account/sso" >SSO 계정 연동</FlexCard>

                <FlexCard icons="logo.svg" type="document" url="management/billing" >결제</FlexCard>

                <FlexCard icons="logo.svg" type="document" url="project/project-manage" >프로젝트 관리</FlexCard>

                <FlexCard icons="logo.svg" type="document" url="project/integrated-manage" >통합 관리</FlexCard>

                <FlexCard icons="logo.svg" type="document" url="management/maintenance" >정비 계획</FlexCard>

                <FlexCard icons="logo.svg" type="document" url="management/userbehavior" >사용자 행위</FlexCard>
            </div>
        </section>

        <section className={clsx('row nav-tiles', styles.justifycardcontent)}>
            <Heading as="h2" className={styles.textcenter}>관리</Heading>
            
            <div className={styles.flexContainer}>
                <FlexCard icons="logo.svg" type="document" url="blog" >What's New</FlexCard>

                <FlexCard icons="logo.svg" type="document" url="release-notes" >릴리스 노트</FlexCard>
            </div>
        </section>

        <section className={clsx('row nav-tiles', styles.justifycardcontent)}>
            <Heading as="h2" className={styles.textcenter}>Reference</Heading>
            
            <div className={styles.flexContainer}>
                <FlexCard icons="logo.svg" type="document" url="openapi-spec" >Open API</FlexCard>

                <FlexCard icons="logo.svg" type="document" url="software-proxy" >소프트웨어 프록시</FlexCard>

                <FlexCard icons="logo.svg" type="document" url="welcome-to-whatapdocs" >기술 문서 안내</FlexCard>

                <FlexCard icons="logo.svg" type="document" url="license/licenses" >라이선스</FlexCard>

                <FlexCard icons="logo.svg" type="document" url="faq" >FAQ</FlexCard>
            </div>
        </section>

        <section className={clsx('row nav-tiles', styles.justifycardcontent)}>
            <Heading as="h2" className={styles.textcenter}>Learning</Heading>
            
            <div className={styles.flexContainer}>
                <FlexCard icons="logo.svg" type="document" url="learning-guides" >학습하기</FlexCard>

                <FlexCard icons="logo.svg" type="document" url="mxql/mxql-overview" >MXQL</FlexCard>

                <FlexCard icons="logo.svg" type="document" url="metrics/common-metrics-intro" >메트릭스</FlexCard>

                <FlexCard icons="logo.svg" type="document" url="glossary" >용어 사전</FlexCard>
            </div>
        </section>

        </Layout>
    );
}