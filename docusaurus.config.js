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
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: 'G-4QXE2TJTM0',
        anonymizeIP: true,
      },
    ],
    [
      '@docusaurus/plugin-sitemap',
      {
        changefreq: 'weekly',
        priority: 0.5,
        ignorePatterns: ['/tags/**'],
        filename: 'sitemap.xml',
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
      }),
    ],
    // [
    //   'redocusaurus',
    //   {
    //     specs: [
    //       {
    //         id: 'whatap-json',
    //         spec: 'openapi/whatap.json',
    //         route: '/examples/whatap-json/',
    //       },
    //     ],
    //     theme: {
    //       primaryColor: '#1890ff',
    //       options: {
    //         disableSearch: true
    //       },
    //       theme: {},
    //     }
    //   }
    // ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
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
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Docs',
          },
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
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'APM 모니터링',
                to: 'apm/application-intro',
              },
              {
                label: 'Server 모니터링',
                to: 'server/server-intro',
              },
              {
                label: 'DB 모니터링',
                to: 'db/db-monitoring-intro',
              },
              {
                label: 'Log 모니터링',
                to: 'log/log-intro',
              },
              {
                label: 'URL 모니터링',
                to: 'url/url-intro',
              },
              {
                label: 'AWS Log 모니터링',
                to: 'aws-log/install-aws-log',
              },
              {
                label: '인티그레이션',
                to: 'integration/integ-intro',
              },
              {
                label: 'RUM:브라우저 모니터링',
                to: 'rum/rum-intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCLjXEb1IhLuw4GspxHGmQPA',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/whatap.io',
              },
              {
                label: 'Indeed',
                href: 'https://www.linkedin.com/company/65662700/',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: '와탭 스토리',
                href: 'https://www.whatap.io/ko/blog/menu/index.html',
              },
              // {
              //   label: 'GitLab',
              //   href: 'https://github.com/facebook/docusaurus',
              // },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} WhaTap Labs Inc. All right reserved.`,
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
