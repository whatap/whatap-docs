// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const rehypeTableMerge = require("rehype-table-merge").rehypeTableMerge;

/** @type {import('@docusaurus/types').Config} */

// const config = {
module.exports = Promise.resolve({
  title: 'WhaTap Docs',
  tagline: '와탭 기술 문서 :: WhaTap, 와탭 기술 문서 페이지에 오신 것을 진심으로 환영합니다.',
  url: 'https://docs.whatap.io',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'warn',
  favicon: '/img/whatap-favicon.ico',
  i18n: {
    defaultLocale: 'ko',
    locales: [ 'ko', 'en', 'ja' ],
    localeConfigs: {
      ko: {
        label: 'KOR',
        direction: 'ltr',
        htmlLang: 'ko-KR',
      },
      en: {
        label: 'ENG',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      ja: {
        label: 'JPN',
        direction: 'ltr',
        htmlLang: 'ja-JP',
        path: 'ja',
      },
    }
  },
  // trailingSlash: false,
  // clientModules: [
  //   require.resolve('./static/js/rum.js')
  // ],
  scripts: [
    // {
    //   src: 'https://app.happyreact.com/widget/reactions.js',
    //   async: true,
    // },
  ],
  plugins: [
    [ './src/whatap-plugin-facebook', {}],
    [ './src/whatap-plugin-browser', {}],
    [ 'docusaurus-plugin-sass', {} ],
    [ 'docusaurus-plugin-pagemove', {} ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        // fromExtensions: ['html', 'htm'],
        redirects: [
          {
            to: '/java/introduction',
            from: '/apm/java/apm-introduction'
          },
          {
            to: '/java/introduction',
            from: '/apm/java-intro'
          },
          {
            to: '/server/introduction',
            from: '/server/server-intro'
          },
        ],
      }
    ],
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-E46TQ5VSCT',
        anonymizeIP: true,
      },
    ],
    [
      '@docusaurus/plugin-google-tag-manager',
      {
        containerId: 'GTM-WJSZDJR',
      },
    ],
    [
      '@whatap-docs/docusaurus-plugin-includes',
      {
        embeds: [
          {
            key: 'youtube',
            embedFunction: function(code) {
              return '<div class="video-container"><iframe width="800" height="500" type="text/html" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" src="https://www.youtube.com/embed/' + code + '"></iframe></div>'
            }      
          },
          {
            key: 'video',
            embedFunction: function(code) {
              return '<div class="video-container"><video type="video/mp4" autoplay="true" loop="true" muted="true" width="100%" height="auto" class="p-video"><source src="'+ code + '"/></video></div>'
            }
          }
        ]
      }
    ],
    [
      'docusaurus-plugin-enlarge-image', {}
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          rehypePlugins: [rehypeTableMerge],
          editUrl: 'undefined', // 'https://gitlab.whatap.io/whatap-inc/docs/-/blob/main/',
          include: [ '**/*.mdx' ],
          exclude: [ 'weaving/*.mdx', 'weaving/**/*.mdx', 'wip/*.mdx', 'common-items/*.mdx', '**/_*.mdx' ],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        sitemap: {
          changefreq: 'always',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        }
      },
    ],
  ],
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve("swc-loader"),
      options: {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
          target: "es2017",
        },
        module: {
          type: isServer ? "commonjs" : "es6",
        },
      },
    }),
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'https://www.whatap.io/img/og/whatap.png',
      mermaid: {
        theme: {light: 'neutral', dark: 'forest'},
      },
      // announcementBar: {
      //   id: 'moniday-banner',
      //   content: '<div id="moniday-banner">🎙️ 10월 19일, IT 현대화에 적합한 모니터링 플랫폼이 궁금하다면? <span id="bar"></span> <a class="btn-white-file" href="https://www.whatap.io/ko/moniDay" target="_blank">WhaTap Moni Day 신청하기</a></div>',
      //   backgroundColor: 'none',
      //   textColor: '#ffffff',
      //   isCloseable: true,
      // },
      metadata: [
        {
          name: 'keywords',
          content: 'WhaTap, 와탭, 매뉴얼, 사용법, WhaTap 사용법, WhaTap 매뉴얼, 기술 문서, APM, 애플리케이션 모니터링, 로그 모니터링, 쿠버네티스 모니터링, 서버 모니터링, 데이터베이스 모니터링, URL 모니터링, 클라우드 모니터링, 브라우저 모니터링, Browser monitoring, Application Monitoring, Log Monitoring, Kubernetes Monitoring, Server Monitoring, Database Monitoring, URL Monitoring, Cloud Monitoring, Manual, User Guide, Docs, WhaTap Manual, WhaTap Docs, WhaTap Documents, 트랜잭션, Transaction, 트레이싱, Tracing, 마스터, Master, 노드, Node, 데드락, Deadlock, 락 트리, Lock tree, 멀티 트랜잭션, Multi Trancsaction, 메트릭스, Metrics, 소프트웨어 프록시, Software proxy, 스택, Stack, 슬로우 쿼리, Slow query, 액티브 트랜잭션, Active transaction, 컨테이너, Container, 히트맵, Hitmap, Garbage Collection, GC, MXQL, Method 추적, Trace method, OOM Killed 컨테이너, OOM Killed Container, Oracle, Tibero, PostgreSQL, MySQL, MongoDB, SQL Server, CUBRID, Altibase, Redis, WebLogic, WebSphere',
        },
        {
          name: 'naver-site-verification',
          content: '0c21fc5664a467108fb762ade47a3f81ee9b88ed',
        },
        {
          name: 'google-site-verification',
          contnet: 'rIlfJkbbogFOIDc3DgJZmOGbUMJWytyvZSKEgV7EMsE',
        }
      ],
      docs: {
        sidebar: {
          autoCollapseCategories: false,
          hideable: false,
        }
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'WhaTap Docs',
          src: 'img/whatap-docs-logo.svg',
          width: 152,
          height: 28,
        },
        items: [
          {
            type: 'doc',
            docId: 'whatap-overview',
            label: '시작하기',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'learning-guides',
            label: '학습하기',
            position: 'left',
          },
          {
            type: 'dropdown',
            label: '상품별 문서 바로가기',
            position: 'left',
            items: [
              {
                type: 'doc',
                docId: 'java/introduction',
                label: 'Java',
              },
              {
                type: 'doc',
                docId: 'php/introduction',
                label: 'PHP',
              },
              {
                type: 'doc',
                docId: 'nodejs/introduction',
                label: 'Node.js',
              },
              {
                type: 'doc',
                docId: 'python/introduction',
                label: 'Python',
              },
              {
                type: 'doc',
                docId: 'dotnet/introduction',
                label: '.NET',
              },
              {
                type: 'doc',
                docId: 'golang/introduction',
                label: 'Go',
              },
              {
                type: 'doc',
                docId: 'server/introduction',
                label: 'Server',
              },
              {
                type: 'doc',
                docId: 'kubernetes/introduction',
                label: 'Kubernetes',
              },
              {
                type: 'doc',
                docId: 'postgresql/monitoring-intro',
                label: 'PostgreSQL',
              },
              {
                type: 'doc',
                docId: 'oracle/monitoring-intro',
                label: 'Oracle',
              },
              {
                type: 'doc',
                docId: 'mysql/monitoring-intro',
                label: 'MySQL',
              },
              {
                type: 'doc',
                docId: 'mssql/monitoring-intro',
                label: 'SQL Server',
              },
              {
                type: 'doc',
                docId: 'tibero/monitoring-intro',
                label: 'Tibero',
              },
              {
                type: 'doc',
                docId: 'cubrid/monitoring-intro',
                label: 'CUBRID',
              },
              {
                type: 'doc',
                docId: 'altibase/monitoring-intro',
                label: 'Altibase',
              },
              {
                type: 'doc',
                docId: 'redis/monitoring-intro',
                label: 'Redis',
              },
              {
                type: 'doc',
                docId: 'mongodb/monitoring-intro',
                label: 'MongoDB',
              },
              {
                type: 'doc',
                docId: 'url/url-intro',
                label: 'URL',
              },
              {
                type: 'doc',
                docId: 'browser',
                label: 'Browser',
              },
              {
                type: 'doc',
                docId: 'amazon-cloudwatch/install-agent',
                label: 'Amazon CloudWatch',
                className: 'narrow',
              },
              {
                type: 'doc',
                docId: 'amazon-ecs/introduction',
                label: 'Amazon ECS',
              },
              {
                type: 'doc',
                docId: 'aws-log/introduction',
                label: 'AWS Log',
              },
              {
                type: 'doc',
                docId: 'azure/install-agent',
                label: 'Azure Monitor',
              },
              {
                type: 'doc',
                docId: 'ncloud/install-agent',
                label: 'Naver Cloud Monitoring',
                className: 'narrow',
              },
              {
                type: 'doc',
                docId: 'oracle-cloud/install-agent',
                label: 'Oracle Cloud Monitor',
                className: 'narrow',
              },
              {
                type: 'doc',
                docId: 'npm/introduction',
                label: 'Network Performance Monitoring',
                className: 'narrow',
              },
              {
                type: 'doc',
                docId: 'log/introduction',
                label: 'Log',
              },
              {
                type: 'doc',
                docId: 'extensions',
                label: 'Extensions'
              },
            ]
          },
          // 여기부터 검색 시 문서 경로 표현을 위한 보이지 않는 메뉴
          {
            type: 'doc',
            docId: 'java/introduction',
            position: "left",
            label: 'Java 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'php/introduction',
            position: "left",
            label: 'PHP 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'nodejs/introduction',
            position: "left",
            label: 'Node.js 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'python/introduction',
            position: "left",
            label: 'Python 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'dotnet/introduction',
            position: "left",
            label: '.NET 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'golang/introduction',
            position: "left",
            label: 'Go 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'server/introduction',
            position: "left",
            label: 'Server 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'kubernetes/introduction',
            position: "left",
            label: 'Kubernetes 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'postgresql/monitoring-intro',
            position: "left",
            label: 'PostgreSQL V2 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'postgresql-v1/monitoring-intro',
            position: "left",
            label: 'PostgreSQL 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'oracle/monitoring-intro',
            position: "left",
            label: 'Oracle 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'mysql-v1/monitoring-intro',
            position: "left",
            label: 'MySQL 모니터링 V1',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'mysql/monitoring-intro',
            position: "left",
            label: 'MySQL 모니터링 V2',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'mssql/monitoring-intro',
            position: "left",
            label: 'SQL Server 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'tibero/monitoring-intro',
            position: "left",
            label: 'Tibero 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'cubrid/monitoring-intro',
            position: "left",
            label: 'CUBRID 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'altibase/monitoring-intro',
            position: "left",
            label: 'Altibase 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'redis/monitoring-intro',
            position: "left",
            label: 'Redis 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'mongodb/monitoring-intro',
            position: "left",
            label: 'MongoDB 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'url/url-intro',
            position: "left",
            label: 'URL 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'amazon-cloudwatch/install-agent',
            position: "left",
            label: 'Amazon CloudWatch',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'amazon-ecs/introduction',
            position: "left",
            label: 'Amazon ECS',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'aws-log/introduction',
            position: "left",
            label: 'AWS Log',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'azure/install-agent',
            position: "left",
            label: 'Azure Monitor',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'ncloud/install-agent',
            position: "left",
            label: 'Naver Cloud Monitoring',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'oracle-cloud/install-agent',
            position: "left",
            label: 'Oracle Cloud Monitor',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'log/introduction',
            position: "left",
            label: 'Log 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'browser',
            position: "left",
            label: 'Browser',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'npm/introduction',
            position: "left",
            label: 'NPM',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'extensions',
            position: 'left',
            label: '확장 도구',
            className: 'hidden'
          },
          {
            type: 'doc',
            docId: 'opentelemetry/introduction',
            position: 'left',
            label: 'OpenTelemetry',
            className: 'hidden'
          },
          // 여기까지 검색 시 문서 경로 표현을 위한 보이지 않는 메뉴 
          {
            type: 'doc',
            docId: 'manage',
            position: 'left',
            label: '관리 기능',
          },
          {
            type: 'doc',
            docId: 'openapi',
            position: 'left',
            label: 'Open API',
          },
          {
            type: 'doc',
            docId: 'license/licenses',
            position: 'left',
            label: '라이선스',
          },
          {
            type: 'doc',
            docId: 'reference',
            position: 'left',
            label: '참조 문서',
          },
          {
            type: 'doc',
            docId: 'release-notes',
            position: 'left',
            label: '릴리스 노트',
          },
          {
            type: 'localeDropdown',
            className: 'oneColumn localeDropdown',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [

        ],
        copyright: `Copyright © ${new Date().getFullYear()} WhaTap Labs Inc. All right reserved. Built with Docusaurus.`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
        // reference: https://prismjs.com/#supported-languages
        additionalLanguages: ['batch', 'apacheconf', 'docker', 'properties', 'java', 'ini', 'scala', 'sql', 'go', 'python', 'json', 'yaml', 'c', 'csharp', 'log' ],
        // 
      },
      zoom: {
        selector: '.markdown :not(em, div) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        config: {}
      },
    }),
});

// module.exports = config;
