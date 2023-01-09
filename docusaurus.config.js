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
  favicon: 'https://guide.whatap.io/_/img/favicon.ico',

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
            to: '/url/url-intro',
            from: '/use_guide/url_monitoring/intro'
          },
          {
            to: '/url/url-intro',
            from: '/use_guide/url_monitoring/intro.html'
          },
          {
            to: '/server/server-intro',
            from: '/whatap_guide/install_agent/server/support_env.html'
          },
          {
            to: '/server/server-intro',
            from: '/whatap_guide/install_agent/server/support_env'
          },
          {
            to: '/kubernetes/kubernetes-intro',
            from: '/whatap_guide/install_agent/kubernetes/install.html',
          },
          {
            to: '/kubernetes/kubernetes-intro',
            from: '/whatap_guide/install_agent/kubernetes/install',
          },
          {
            to: 'db/db-monitoring-intro',
            from: '/whatap_guide/install_agent/db/install_process.html',
          },
          {
            to: 'db/db-monitoring-intro',
            from: '/whatap_guide/install_agent/db/install_process',
          },
          {
            to: '/db/install-db-agent',
            from: 'kr/agent_mysql'
          },
          {
            to: '/db/install-db-agent',
            from: 'kr/agent_mssql'
          },
          {
            to: '/db/install-db-agent',
            from: 'kr/agent_tibero'
          },
          {
            to: '/db/install-db-agent',
            from: 'kr/agent_postgresql/'
          }
        ]
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
            label: '제품별 문서 바로가기',
            position: 'left',
            items: [
              {
                type: 'doc',
                docId: 'apm/application-intro',
                label: '애플리케이션',
              },
              {
                type: 'doc',
                docId: 'server/server-intro',
                label: '서버',
              },
              {
                type: 'doc',
                docId: 'db/db-monitoring-intro',
                label: '데이터베이스',
              },
              {
                type: 'doc',
                docId: 'kubernetes/kubernetes-intro',
                label: '쿠버네티스',
              },
              {
                type: 'doc',
                docId: 'ref-cloud/cloud',
                label: '클라우드',
              },
              {
                type: 'doc',
                docId: 'log/log-intro',
                label: '로그',
              },
              {
                type: 'doc',
                docId: 'url/url-intro',
                label: 'URL',
              },
              {
                type: 'doc',
                docId: 'extensions',
                label: '확장 도구'
              }
              // {
              //   type: 'doc',
              //   docId: 'rum/rum-intro',
              //   label: '브라우저 모니터링(RUM)',
              // },
            ]
          },
          // 여기부터 검색 시 문서 경로 표현을 위한 보이지 않는 메뉴
          {
            type: 'doc',
            docId: 'apm/application-intro',
            position: "left",
            label: '애플리케이션 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'server/server-intro',
            position: "left",
            label: '서버 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'db/db-monitoring-intro',
            position: "left",
            label: '데이터베이스 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'kubernetes/kubernetes-intro',
            position: "left",
            label: '쿠버네티스 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'log/log-intro',
            position: "left",
            label: '로그 모니터링',
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
            docId: 'rum/rum-intro',
            position: "left",
            label: '브라우저 모니터링(RUM)',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'amazon-ecs/amazon-ecs-intro',
            position: "left",
            label: 'Amazon ECS',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'amazon-cloudwatch/amazon-cloudwatch-install',
            position: "left",
            label: 'Amazon Cloudwatch',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'azure/azure-monitor-install',
            position: "left",
            label: 'Azure Monitor',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'ncloud/ncloud-monitoring-install',
            position: "left",
            label: 'Naver Cloud Monitoring',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'oracle-cloud/oracle-cloud-monitor-install',
            position: "left",
            label: 'Oracle Cloud Monitoring',
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
          // {
          //   title: '모니터링 서비스',
          //   items: [
          //     {
          //       label: '애플리케이션',
          //       to: 'apm/application-intro',
          //     },
          //     {
          //       label: '서버',
          //       to: 'server/server-intro',
          //     },
          //     {
          //       label: '데이터베이스',
          //       to: 'db/db-monitoring-intro',
          //     },
          //     {
          //       label: '로그',
          //       to: 'log/log-intro',
          //     },
          //     {
          //       label: 'URL',
          //       to: 'url/url-intro',
          //     },
          //     {
          //       label: 'AWS Log',
          //       to: 'aws-log/install-aws-log',
          //     },
          //     {
          //       label: '인티그레이션',
          //       to: 'integration/integ-intro',
          //     },
          //     {
          //       label: '브라우저(RUM)',
          //       to: 'rum/rum-intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Youtube',
          //       href: 'https://www.youtube.com/channel/UCLjXEb1IhLuw4GspxHGmQPA',
          //     },
          //     {
          //       label: 'Facebook',
          //       href: 'https://www.facebook.com/whatap.io',
          //     },
          //     {
          //       label: 'Indeed',
          //       href: 'https://www.linkedin.com/company/65662700/',
          //     }
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: '와탭 스토리',
          //       href: 'https://www.whatap.io/ko/blog/menu/index.html',
          //     },
          //   ],
          // },
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
