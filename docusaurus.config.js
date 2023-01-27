// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const rehypeTableMerge = require("rehype-table-merge").rehypeTableMerge;

/** @type {import('@docusaurus/types').Config} */

const config = {
  title: 'WhaTap',
  tagline: '와탭 기술 문서 :: WhaTap, 와탭 기술 문서 페이지에 오신 것을 진심으로 환영합니다.',
  url: 'https://docs.whatap.io',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'warn',
  favicon: '/img/whatap-favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'WhaTap', // Usually your GitHub org/user name.
  // projectName: 'WhaTap Docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },
  clientModules: [
    // require.resolve('./static/js/channel_ko.js')
  ],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html', 'htm'],
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
          }
        ],
      }
    ],
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-4QXE2TJTM0',
        anonymizeIP: true,
      },
    ],
    [
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: 'G-4QXE2TJTM0',
        anonymizeIP: true,
      },
    ],
    [ 
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: [ 'ko' ],
        indexBlog: false,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchResultContextMaxLength: 50,
      }
    ],
    [
      'docusaurus-plugin-includes',
      {
        replacements: [
          { key: '{ProductName}', value: 'My long product name for XYZ' },
          { key: '{ShortName}', value: 'XYZ' },
        ],
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
  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          rehypePlugins: [rehypeTableMerge],
          editUrl: 'undefined',
            // 'https://gitlab.whatap.io/whatap-inc/docs/-/blob/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'always',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        }
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'keywords',
          content: 'WhaTap, 와탭, 매뉴얼, 사용법, WhaTap 사용법, WhaTap 매뉴얼, 기술 문서, APM, 애플리케이션 모니터링, 로그 모니터링, 쿠버네티스 모니터링, 서버 모니터링, 데이터베이스 모니터링, URL 모니터링, 클라우드 모니터링, Application Monitoring, Log Monitoring, Kubernetes Monitoring, Server Monitoring, Database Monitoring, URL Monitoring, Cloud Monitoring, Manual, User Guide, Docs, WhaTap Manual, WhaTap Docs, WhaTap Documents',
        },
        {
          name: 'naver-site-verification',
          content: '0c21fc5664a467108fb762ade47a3f81ee9b88ed',
        }
      ],
      docs: {
        sidebar: {
          autoCollapseCategories: false,
          hideable: true,
        }
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'html',
            value: '<a href="/" class="my-index"><svg viewBox="0 0 24 24"><path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" fill=""></path></svg></a>'
          },
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: '시작하기',
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
                label: 'Golang',
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
                label: 'MS SQL Server',
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
                docId: 'amazon-cloudwatch/install-agent',
                label: 'Amazon CloudWatch',
              },
              {
                type: 'doc',
                docId: 'amazon-ecs/introduction',
                label: 'Amazon ECS',
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
              },
              {
                type: 'doc',
                docId: 'oracle-cloud/install-agent',
                label: 'Oracle Cloud Monitor',
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
              }
              // {
              //   type: 'doc',
              //   docId: 'rum/introduction',
              //   label: '브라우저 모니터링(RUM)',
              // },
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
            label: 'Golang 모니터링',
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
            docId: 'mysql/monitoring-intro',
            position: "left",
            label: 'MySQL 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'mssql/monitoring-intro',
            position: "left",
            label: 'MS SQL Server 모니터링',
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
            docId: 'rum/introduction',
            position: "left",
            label: '브라우저 모니터링(RUM)',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'extensions',
            position: 'left',
            label: '확장 도구',
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
            docId: 'reference',
            position: 'left',
            label: '참조 문서',
          },
          {
            type: 'doc',
            docId: 'release-notes/release-notes',
            position: 'left',
            label: '릴리스 노트',
          },
        ],
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
        additionalLanguages: ['batch', 'apacheconf', 'docker', 'properties', 'java', 'ini', 'scala', 'sql', 'go' ],
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
};

module.exports = config;
