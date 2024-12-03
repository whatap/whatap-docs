"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["18728"], {
"39013": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_account_ms_entra_id_mdx_e84_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ ms_entra_id_toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-account-ms-entra-id-mdx-e84.json
var site_docs_account_ms_entra_id_mdx_e84_namespaceObject = JSON.parse('{"id":"account/ms-entra-id","title":"Microsoft Entra ID 연동","description":"Microsoft Entra ID 연동을 통해서 하나의 아이디와 비밀번호를 이용해 간편하게 계정을 관리하세요.","source":"@site/docs/account/ms-entra-id.mdx","sourceDirName":"account","slug":"/account/ms-entra-id","permalink":"/account/ms-entra-id","draft":false,"unlisted":false,"editUrl":"undefined/docs/account/ms-entra-id.mdx","tags":[],"version":"current","frontMatter":{"id":"ms-entra-id","title":"Microsoft Entra ID 연동","description":"Microsoft Entra ID 연동을 통해서 하나의 아이디와 비밀번호를 이용해 간편하게 계정을 관리하세요.","keywords":["Microsoft Entra ID","계정","보안"],"displayed_sidebar":"manageSidebar","isTranslationMissing":false},"sidebar":"manageSidebar","previous":{"title":"Okta 연동","permalink":"/account/okta"},"next":{"title":"프로젝트 구조 및 멤버 권한","permalink":"/project/project-structure"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("67294");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/index.js + 3 modules
var TOCItems = __webpack_require__("76365");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCInline/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"tableOfContentsInline":"tableOfContentsInline_prmo"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCInline/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function TOCInline(param) {
    let { toc, minHeadingLevel, maxHeadingLevel } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: styles_module.tableOfContentsInline,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TOCItems/* default */.Z, {
            toc: toc,
            minHeadingLevel: minHeadingLevel,
            maxHeadingLevel: maxHeadingLevel,
            className: "table-of-contents",
            linkClassName: null
        })
    });
}

;// CONCATENATED MODULE: ./docs/account/ms-entra-id.mdx


const frontMatter = {
	id: 'ms-entra-id',
	title: 'Microsoft Entra ID 연동',
	description: 'Microsoft Entra ID 연동을 통해서 하나의 아이디와 비밀번호를 이용해 간편하게 계정을 관리하세요.',
	keywords: [
		'Microsoft Entra ID',
		'계정',
		'보안'
	],
	displayed_sidebar: 'manageSidebar',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*Ientity, Applications, Enterprise applications*/



const ms_entra_id_toc = [{
  "value": "사용할 계정(email) 확인하기",
  "id": "사용할-계정email-확인하기",
  "level": 2
}, {
  "value": "와탭에 계정이 생성된 경우",
  "id": "와탭에-계정이-생성된-경우",
  "level": 3
}, {
  "value": "와탭에 계정이 없는 경우",
  "id": "noneaccount",
  "level": 3
}, {
  "value": "와탭에서 연동(SSO) 키 생성하기",
  "id": "와탭에서-연동sso-키-생성하기",
  "level": 2
}, {
  "value": "Microsoft Entra ID 엔터프라이즈 애플리케이션 생성하기",
  "id": "microsoft-entra-id-엔터프라이즈-애플리케이션-생성하기",
  "level": 2
}, {
  "value": "애플리케이션에 사용자 할당하기",
  "id": "애플리케이션에-사용자-할당하기",
  "level": 2
}, {
  "value": "Microsoft Entra ID 인증 설정하기",
  "id": "microsoft-entra-id-인증-설정하기",
  "level": 2
}, {
  "value": "와탭에서 메타데이터 등록하기",
  "id": "와탭에서-메타데이터-등록하기",
  "level": 2
}, {
  "value": "연동 테스트하기",
  "id": "연동-테스트하기",
  "level": 2
}, {
  "value": "엔터프라이즈 애플리케이션에서 와탭 계정 관리하기",
  "id": "엔터프라이즈-애플리케이션에서-와탭-계정-관리하기",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmdname, ImgLang, Title} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!Title) _missingMdxReference("Title", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Microsoft Entra ID"
      }), "를 기준으로 와탭 모니터링 서비스 계정과 연동하는 방법을 안내합니다. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Microsoft Entra ID"
      }), " 계정으로 와탭 모니터링 서비스에 로그인할 수 있고, 사용자에게 주어진 권한 내에서 와탭 모니터링 서비스를 이용할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Microsoft Entra ID"
      }), " 계정과 와탭 모니터링 서비스를 연동하는 순서는 다음과 같습니다."]
    }), "\n", "\n", (0,jsx_runtime.jsx)(TOCInline, {
      toc: ms_entra_id_toc,
      maxHeadingLevel: 2
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Microsoft Entra ID"
        }), "에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://learn.microsoft.com/entra/fundamentals/whatis",
          children: "다음 링크"
        }), "를 참조하세요."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "사용할-계정email-확인하기",
        children: "사용할 계정(email) 확인하기"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "시작하기 전에 와탭과 Microsoft Entra 서비스에 계정이 있는지 확인하세요."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "와탭에-계정이-생성된-경우",
        children: "와탭에 계정이 생성된 경우"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Microsoft Entra ID에서 사용할 계정이 와탭에 이미 생성되어 있는 경우 다음 사항을 참조하세요."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "다음 예시와 같이 각 서비스에서 사용하는 계정의 이름이 서로 같아야 연동할 수 있습니다."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["와탭: ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "mailto:monitoring1@abc.com",
                  children: "monitoring1@abc.com"
                })]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Microsoft Entra: ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "mailto:monitoring1@abc.com",
                  children: "monitoring1@abc.com"
                })]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "다음 예시와 같이 각 서비스에서 사용하는 계정의 이름이 서로 다르면 연동할 수 없습니다."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["와탭: ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "mailto:monitoring2@abc.com",
                  children: "monitoring2@abc.com"
                })]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Microsoft Entra: ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "mailto:monitoring3@abc.com",
                  children: "monitoring3@abc.com"
                })]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "noneaccount",
        children: "와탭에 계정이 없는 경우"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Microsoft Entra ID에서 사용하는 계정이 와탭에 없다면, 사용자 확인을 위해 최초 1회의 인증 연동이 필요합니다."
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["회사 또는 학교 계정으로 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "myapp_portal",
              className: "b600",
              entra: true
            }), "에 로그인하세요. 사용할 수 있는 조직 소유의 모든 클라우드 기반 앱을 보여 주는 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "myapps",
              className: "b600",
              entra: true
            }), " 페이지가 나타납니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "entraAppDashboard",
              className: "b600",
              entra: true
            }), "에서 기존에 등록된 엔터프라이즈 애플리케이션을 통해서 와탭(WhaTap) 서비스에 접속하세요."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "ms-account-manage-02.png",
            desc: "My account"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "접속한 화면에서 이름과 회사 정보를 입력해 인증을 연동하세요."
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              alt: "Sign up",
              src: (__webpack_require__(1192)/* ["default"] */.Z) + "",
              width: "400",
              height: "377"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["에러 페이지가 나타나면 해당 페이지를 닫고, ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "entraAppDashboard",
              className: "b600",
              entra: true
            }), "에서 다시 와탭(WhaTap) 애플리케이션을 클릭하면 정상 로그인 처리됩니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "와탭에서-연동sso-키-생성하기",
        children: "와탭에서 연동(SSO) 키 생성하기"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["와탭 모니터링 서비스 화면에서 SSO 키를 발급받는 방법을 안내합니다. 발급 받은 SSO 키를 통해 Microsoft Entra ID와 연동할 수 있습니다. 최초로 Microsoft Entra ID 연동을 설정하는 경우 반드시 와탭 계정을 생성해야 합니다. 와탭 계정이 없다면 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#noneaccount",
          children: "다음 문서"
        }), "를 참조하세요."]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Microsoft Entra ID와 연동을 설정할 계정으로 와탭 모니터링 서비스에 로그인하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "화면 오른쪽 위에 프로필 아이콘을 선택하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["팝업 메뉴가 나타나면 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "MNU07360",
              className: "uitext"
            }), "를 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["화면 왼쪽 메뉴에서 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "ssoIntegrations",
              className: "uitext"
            }), "을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Service provider ID (WhaTap)"
              })
            }), " 섹션의 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "BTN07473",
              className: "uitext"
            }), "에서 Key Name을 입력하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Key Name은 사용자가 임의로 입력할 수 있습니다."
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "sso-service-key.png",
            desc: "Service provider ID"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "BTN07473",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "TTL07478",
              className: "uitext"
            }), "에서 ", (0,jsx_runtime.jsx)("span", {
              class: "uitext",
              children: "EntityID"
            }), "와 ", (0,jsx_runtime.jsx)("span", {
              class: "uitext",
              children: "Sign-On URL"
            }), " 항목의 값을 확인하고 복사하세요."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "sso-check-sso-info.png",
            desc: "sso-info"
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "SSO 키는 최대 5개까지 발급할 수 있으며 각각 고유의 인증 정보 값을 가지고 있습니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmdname, {
                sid: "BTN07476",
                className: "uitext"
              }), " 버튼을 선택해 SSO 키를 추가하고 이후의 과정을 진행하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["추가된 SSO 정보는 ", (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Key Name"
                })
              }), " 항목에서 목록 상자를 선택해 확인할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "microsoft-entra-id-엔터프라이즈-애플리케이션-생성하기",
        children: "Microsoft Entra ID 엔터프라이즈 애플리케이션 생성하기"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://entra.microsoft.com/#home",
          children: "Microsoft Entra 관리 센터"
        }), " 서비스로 이동해 로그인한 후 다음 순서에 따라 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "entraEntApp",
          className: "b600",
          entra: true
        }), "을 생성합니다."]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "entraIdentity",
              className: "b600",
              entra: true
            }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "entraApplication",
              className: "b600",
              entra: true
            }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "entraEntApp",
              className: "b600",
              entra: true
            }), " 메뉴에서 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "entraNewApp",
              className: "b600",
              entra: true
            }), "을 클릭하세요. "]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "ms-entraid-enterprise-application-01.png",
            desc: "Entra ID",
            className: "width-800"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "entraCreateMyApp",
              className: "b600",
              entra: true
            }), "을 클릭하세요."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "ms-entraid-enterprise-application-02.png",
            desc: "Entra ID",
            className: "width-800"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["오른쪽에 앱 이름 설정 화면이 나타나면 앱 이름을 입력한 후 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "entraOtherApp",
              className: "b600",
              entra: true
            }), " 옵션을 클릭하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["화면 하단의 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "entrabtnCreate",
              className: "b600",
              entra: true
            }), " 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "애플리케이션에-사용자-할당하기",
        children: "애플리케이션에 사용자 할당하기"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "새로 만들어진 엔터프라이즈 애플리케이션 화면에서 연동할 사용자를 할당합니다."
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "entraAssignUsergroup",
              className: "b600",
              entra: true
            }), "을 클릭하세요."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "ms-entraid-enterprise-application-assign-01.png",
            desc: "Entra ID",
            className: "width-800"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "entraAddUsergroup",
              className: "b600",
              entra: true
            }), "를 클릭하세요."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "ms-entraid-enterprise-application-assign-02.png",
            desc: "Entra ID",
            className: "width-800"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "entraAddAssign",
              className: "b600",
              entra: true
            }), " 화면에서 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "entraNoneAssign",
              className: "b600",
              entra: true
            }), "을 클릭하세요."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "ms-entraid-enterprise-application-assign-03.png",
            desc: "Entra ID",
            className: "width-800"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자 목록에서 연동할 사용자를 선택한 후 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "entraSelect",
              className: "b600",
              entra: true
            }), " 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["화면 하단의 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "entraAssign",
              className: "b600",
              entra: true
            }), " 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "microsoft-entra-id-인증-설정하기",
        children: "Microsoft Entra ID 인증 설정하기"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "사용자가 Microsoft Entra 자격 증명을 사용하여 애플리케이션에 로그인할 수 있도록 설정합니다."
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["엔터프라이즈 애플리케이션의 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "entraOverview",
              className: "b600",
              entra: true
            }), "를 선택해 초기 화면으로 이동한 후 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "entraSignonset",
              className: "b600",
              entra: true
            }), "을 클릭하세요."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "ms-entraid-enterprise-application-sso-01.png",
            desc: "Entra ID",
            className: "width-800"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "entraSelectsso",
              className: "b600",
              entra: true
            }), "에서 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "entraSaml",
              className: "b600",
              entra: true
            }), "을 클릭하세요."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "ms-entraid-enterprise-application-sso-02.png",
            desc: "Entra ID",
            className: "width-800"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "entraBasicSaml",
              className: "b600",
              entra: true
            }), "에서 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "entraBtnEdit",
              className: "b600",
              entra: true
            }), "을 클릭하세요."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "ms-entraid-enterprise-application-sso-03.png",
            desc: "Entra ID",
            className: "width-800"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["와탭의 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "ssoIntegrations",
              className: "uitext"
            }), " 화면에서 생성한 SSO 정보를 입력하세요."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "ms-entraid-enterprise-application-sso-04.png",
            desc: "Entra ID",
            className: "width-800"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.em, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "EntityID"
                  })
                }), " 항목의 값을 복사한 후, ", (0,jsx_runtime.jsx)(Cmdname, {
                  sid: "entraAddId",
                  className: "b600",
                  entra: true
                }), " 버튼을 클릭하고 ", (0,jsx_runtime.jsx)(Cmdname, {
                  sid: "entraAddIdfiedl",
                  className: "b600",
                  entra: true
                }), "에 붙여넣기하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.em, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Sign-On URL"
                  })
                }), " 항목의 값을 복사한 후, ", (0,jsx_runtime.jsx)(Cmdname, {
                  sid: "entraAddurl",
                  className: "b600",
                  entra: true
                }), " 버튼을 클릭하고 ", (0,jsx_runtime.jsx)(Cmdname, {
                  sid: "entraAddurlfield",
                  className: "b600",
                  entra: true
                }), "에 붙여넣기하세요."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "entraBtnsave",
              className: "b600",
              entra: true
            }), " 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "entraAttrclaim",
              className: "b600",
              entra: true
            }), "에서 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "entraBtnEdit",
              className: "b600",
              entra: true
            }), "을 클릭하세요."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "ms-entraid-enterprise-application-sso-05.png",
            desc: "Entra ID",
            className: "width-800"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "entraUniqueId",
              className: "b600",
              entra: true
            }), "를 클릭하세요."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "ms-entraid-enterprise-application-sso-06.png",
            desc: "Entra ID",
            className: "width-800"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "entraSourceattr",
              className: "b600",
              entra: true
            }), "에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "user.mail"
            }), "을 선택한 다음 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "entraBtnsave",
              className: "b600",
              entra: true
            }), "을 클릭하세요."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "ms-entraid-enterprise-application-sso-07.png",
            desc: "Entra ID",
            className: "width-800"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "entraSamlCerti",
              className: "b600",
              entra: true
            }), "에서 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "entraMetadata",
              className: "b600",
              entra: true
            }), " 항목의 값을 복사하세요."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "ms-entraid-enterprise-application-sso-08.png",
            desc: "Entra ID",
            className: "width-800"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "와탭에서-메타데이터-등록하기",
        children: "와탭에서 메타데이터 등록하기"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Microsoft Entra ID에서 발급 받은 메타데이터를 등록해 인증 정보를 연동합니다."
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["와탭 모니터링 서비스에서 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "ssoIntegrations",
              className: "uitext"
            }), " 메뉴로 이동하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "TTL07484",
              className: "uitext"
            }), " 섹션에서 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "BTN07491",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "sso-externalidp-button.png",
            desc: "External IdP"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "BTN07491",
              className: "uitext"
            }), " 창이 나타나면 ", (0,jsx_runtime.jsx)("b", {
              children: "Microsoft Entra ID"
            }), "에서 복사한 메타데이터 값을 ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Metadata"
              })
            }), " 항목에 붙여넣기하세요."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "ms-entraid-enterprise-application-whatap-externalidp.png",
            desc: "Metadata"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["인증 데이터를 자동 변환하기 위해 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "BTN07494",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "save",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "연동-테스트하기",
        children: "연동 테스트하기"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Microsoft Entra ID 화면으로 돌아와 Single Sign On이 작동하는지 테스트합니다."
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "entraTest",
              className: "b600",
              entra: true
            }), "에서 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "entraBtnTest",
              className: "b600",
              entra: true
            }), " 버튼을 클릭하세요."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "ms-entraid-enterprise-application-sso-test-01.png",
            desc: "Test"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "entraBtnLogtest",
              className: "b600",
              entra: true
            }), " 버튼을 클릭하세요."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "ms-entraid-enterprise-application-sso-test-02.png",
            desc: "Login test"
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "와탭 계정이 있다면 와탭 모니터링 서비스 화면으로 정상 이동합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "와탭 계정이 없다면 인증 연동을 통해 신규 계정을 생성할 수 있습니다."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "엔터프라이즈-애플리케이션에서-와탭-계정-관리하기",
        children: "엔터프라이즈 애플리케이션에서 와탭 계정 관리하기"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Microsoft Entra ID의 엔터프라이즈 애플리케이션에서 와탭 계정을 관리하려면 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://myapplications.microsoft.com/",
          children: "다음 링크"
        }), "로 이동하세요."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["엔터프라이즈 애플리케이션에 초대된 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "myAccount",
              className: "b600",
              entra: true
            }), " 정보"]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "ms-account-manage-01.png",
            desc: "My account"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["초대된 계정의 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "myapps",
              className: "b600",
              entra: true
            }), " 정보"]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "ms-account-manage-02.png",
            desc: "My account"
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(Title, {
        level: 2,
        hashid: "removessokey",
        children: "SSO 키 삭제하기"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["와탭 모니터링 서비스에서 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "ssoIntegrations",
              className: "uitext"
            }), " 메뉴로 이동하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Service provider ID (WhaTap)"
              })
            }), " 섹션의 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "TTL07478",
              className: "uitext"
            }), "에서 삭제하려는 ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Key Name"
              })
            }), "을 선택하세요."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "sso-delete-sso-key.png",
            desc: "Delete SSO Key"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "BTN07481",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["삭제 확인 창이 나타나면 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "BTN07481",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(Title, {
        level: 2,
        hashid: "editexternalidp",
        children: "External Idp 정보 수정/삭제하기"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["와탭 모니터링 서비스에서 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "ssoIntegrations",
              className: "uitext"
            }), " 메뉴로 이동하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "TTL07484",
              className: "uitext"
            }), " 섹션에서 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "BTN07490",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "BTN07491",
              className: "uitext"
            }), " 창이 나타나면 ", (0,jsx_runtime.jsx)("b", {
              children: "Microsoft Entra ID"
            }), "에서 복사한 메타데이터 값을 ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Metadata"
              })
            }), " 항목에 붙여넣기하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["인증 데이터를 자동 변환하기 위한 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "BTN07494",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "save",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "tip",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "External Idp"
          }), " 정보를 삭제하려면 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "BTN07490",
            className: "uitext"
          }), " 버튼을 클릭한 다음 팝업 창에서 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "delete",
            className: "uitext"
          }), " 버튼을 선택하세요."]
        })
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
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



}),
"1192": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ms2whatap-signup-61784c7e9952bd01740c7ac68eaf2e23.png");

}),
"76365": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ TOCItems)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("67294");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__("30140");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tocUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function treeifyTOC(flatTOC) {
    const headings = flatTOC.map((heading)=>({
            ...heading,
            parentIndex: -1,
            children: []
        }));
    // Keep track of which previous index would be the current heading's direct
    // parent. Each entry <i> is the last index of the `headings` array at heading
    // level <i>. We will modify these indices as we iterate through all headings.
    // e.g. if an ### H3 was last seen at index 2, then prevIndexForLevel[3] === 2
    // indices 0 and 1 will remain unused.
    const prevIndexForLevel = Array(7).fill(-1);
    headings.forEach((curr, currIndex)=>{
        // Take the last seen index for each ancestor level. the highest index will
        // be the direct ancestor of the current heading.
        const ancestorLevelIndexes = prevIndexForLevel.slice(2, curr.level);
        curr.parentIndex = Math.max(...ancestorLevelIndexes);
        // Mark that curr.level was last seen at the current index.
        prevIndexForLevel[curr.level] = currIndex;
    });
    const rootNodes = [];
    // For a given parentIndex, add each Node into that parent's `children` array
    headings.forEach((heading)=>{
        const { parentIndex, ...rest } = heading;
        if (parentIndex >= 0) {
            headings[parentIndex].children.push(rest);
        } else {
            rootNodes.push(rest);
        }
    });
    return rootNodes;
}
/**
 * Takes a flat TOC list (from the MDX loader) and treeifies it into what the
 * TOC components expect. Memoized for performance.
 */ function useTreeifiedTOC(toc) {
    return useMemo(()=>treeifyTOC(toc), [
        toc
    ]);
}
function filterTOC(param) {
    let { toc, minHeadingLevel, maxHeadingLevel } = param;
    function isValid(item) {
        return item.level >= minHeadingLevel && item.level <= maxHeadingLevel;
    }
    return toc.flatMap((item)=>{
        const filteredChildren = filterTOC({
            toc: item.children,
            minHeadingLevel,
            maxHeadingLevel
        });
        if (isValid(item)) {
            return [
                {
                    ...item,
                    children: filteredChildren
                }
            ];
        }
        return filteredChildren;
    });
}
/**
 * Takes a flat TOC list (from the MDX loader) and treeifies it into what the
 * TOC components expect, applying the `minHeadingLevel` and `maxHeadingLevel`.
 * Memoized for performance.
 *
 * **Important**: this is not the same as `useTreeifiedTOC(toc.filter(...))`,
 * because we have to filter the TOC after it has been treeified. This is mostly
 * to ensure that weird TOC structures preserve their semantics. For example, an
 * h3-h2-h4 sequence should not be treeified as an "h3 > h4" hierarchy with
 * min=3, max=4, but should rather be "[h3, h4]" (since the h2 heading has split
 * the two headings and they are not parent-children)
 */ function useFilteredAndTreeifiedTOC(param) {
    let { toc, minHeadingLevel, maxHeadingLevel } = param;
    return (0,react.useMemo)(()=>filterTOC({
            toc: treeifyTOC(toc),
            minHeadingLevel,
            maxHeadingLevel
        }), [
        toc,
        minHeadingLevel,
        maxHeadingLevel
    ]);
} //# sourceMappingURL=tocUtils.js.map

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useTOCHighlight.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

// TODO make the hardcoded theme-classic classnames configurable (or add them
// to ThemeClassNames?)
/**
 * If the anchor has no height and is just a "marker" in the DOM; we'll use the
 * parent (normally the link text) rect boundaries instead
 */ function getVisibleBoundingClientRect(element) {
    const rect = element.getBoundingClientRect();
    const hasNoHeight = rect.top === rect.bottom;
    if (hasNoHeight) {
        return getVisibleBoundingClientRect(element.parentNode);
    }
    return rect;
}
/**
 * Considering we divide viewport into 2 zones of each 50vh, this returns true
 * if an element is in the first zone (i.e., appear in viewport, near the top)
 */ function isInViewportTopHalf(boundingRect) {
    return boundingRect.top > 0 && boundingRect.bottom < window.innerHeight / 2;
}
function getAnchors(param) {
    let { minHeadingLevel, maxHeadingLevel } = param;
    const selectors = [];
    for(let i = minHeadingLevel; i <= maxHeadingLevel; i += 1){
        selectors.push(`h${i}.anchor`);
    }
    return Array.from(document.querySelectorAll(selectors.join()));
}
function getActiveAnchor(anchors, param) {
    let { anchorTopOffset } = param;
    // Naming is hard: The "nextVisibleAnchor" is the first anchor that appear
    // under the viewport top boundary. It does not mean this anchor is visible
    // yet, but if user continues scrolling down, it will be the first to become
    // visible
    const nextVisibleAnchor = anchors.find((anchor)=>{
        const boundingRect = getVisibleBoundingClientRect(anchor);
        return boundingRect.top >= anchorTopOffset;
    });
    if (nextVisibleAnchor) {
        const boundingRect = getVisibleBoundingClientRect(nextVisibleAnchor);
        // If anchor is in the top half of the viewport: it is the one we consider
        // "active" (unless it's too close to the top and and soon to be scrolled
        // outside viewport)
        if (isInViewportTopHalf(boundingRect)) {
            return nextVisibleAnchor;
        }
        // If anchor is in the bottom half of the viewport, or under the viewport,
        // we consider the active anchor is the previous one. This is because the
        // main text appearing in the user screen mostly belong to the previous
        // anchor. Returns null for the first anchor, see
        // https://github.com/facebook/docusaurus/issues/5318
        return anchors[anchors.indexOf(nextVisibleAnchor) - 1] ?? null;
    }
    // No anchor under viewport top (i.e. we are at the bottom of the page),
    // highlight the last anchor found
    return anchors[anchors.length - 1] ?? null;
}
function getLinkAnchorValue(link) {
    return decodeURIComponent(link.href.substring(link.href.indexOf('#') + 1));
}
function getLinks(linkClassName) {
    return Array.from(document.getElementsByClassName(linkClassName));
}
function getNavbarHeight() {
    // Not ideal to obtain actual height this way
    // Using TS ! (not ?) because otherwise a bad selector would be un-noticed
    return document.querySelector('.navbar').clientHeight;
}
function useAnchorTopOffsetRef() {
    const anchorTopOffsetRef = (0,react.useRef)(0);
    const { navbar: { hideOnScroll } } = (0,useThemeConfig/* useThemeConfig */.L)();
    (0,react.useEffect)(()=>{
        anchorTopOffsetRef.current = hideOnScroll ? 0 : getNavbarHeight();
    }, [
        hideOnScroll
    ]);
    return anchorTopOffsetRef;
}
/**
 * Side-effect that applies the active class name to the TOC heading that the
 * user is currently viewing. Disabled when `config` is undefined.
 */ function useTOCHighlight(config) {
    const lastActiveLinkRef = (0,react.useRef)(undefined);
    const anchorTopOffsetRef = useAnchorTopOffsetRef();
    (0,react.useEffect)(()=>{
        if (!config) {
            // No-op, highlighting is disabled
            return ()=>{};
        }
        const { linkClassName, linkActiveClassName, minHeadingLevel, maxHeadingLevel } = config;
        function updateLinkActiveClass(link, active) {
            if (active) {
                if (lastActiveLinkRef.current && lastActiveLinkRef.current !== link) {
                    lastActiveLinkRef.current.classList.remove(linkActiveClassName);
                }
                link.classList.add(linkActiveClassName);
                lastActiveLinkRef.current = link;
            // link.scrollIntoView({block: 'nearest'});
            } else {
                link.classList.remove(linkActiveClassName);
            }
        }
        function updateActiveLink() {
            const links = getLinks(linkClassName);
            const anchors = getAnchors({
                minHeadingLevel,
                maxHeadingLevel
            });
            const activeAnchor = getActiveAnchor(anchors, {
                anchorTopOffset: anchorTopOffsetRef.current
            });
            const activeLink = links.find((link)=>activeAnchor && activeAnchor.id === getLinkAnchorValue(link));
            links.forEach((link)=>{
                updateLinkActiveClass(link, link === activeLink);
            });
        }
        document.addEventListener('scroll', updateActiveLink);
        document.addEventListener('resize', updateActiveLink);
        updateActiveLink();
        return ()=>{
            document.removeEventListener('scroll', updateActiveLink);
            document.removeEventListener('resize', updateActiveLink);
        };
    }, [
        config,
        anchorTopOffsetRef
    ]);
} //# sourceMappingURL=useTOCHighlight.js.map

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__("83012");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/Tree.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


// Recursive component rendering the toc tree
function TOCItemTree(param) {
    let { toc, className, linkClassName, isChild } = param;
    if (!toc.length) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
        className: isChild ? undefined : className,
        children: toc.map((heading)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                        to: `#${heading.id}`,
                        className: linkClassName ?? undefined,
                        // Developer provided the HTML, so assume it's safe.
                        dangerouslySetInnerHTML: {
                            __html: heading.value
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TOCItemTree, {
                        isChild: true,
                        toc: heading.children,
                        className: className,
                        linkClassName: linkClassName
                    })
                ]
            }, heading.id))
    });
}
// Memo only the tree root is enough
/* ESM default export */ const Tree = (/*#__PURE__*/react.memo(TOCItemTree));

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function TOCItems(param) {
    let { toc, className = 'table-of-contents table-of-contents__left-border', linkClassName = 'table-of-contents__link', linkActiveClassName = undefined, minHeadingLevel: minHeadingLevelOption, maxHeadingLevel: maxHeadingLevelOption, ...props } = param;
    const themeConfig = (0,useThemeConfig/* useThemeConfig */.L)();
    const minHeadingLevel = minHeadingLevelOption ?? themeConfig.tableOfContents.minHeadingLevel;
    const maxHeadingLevel = maxHeadingLevelOption ?? themeConfig.tableOfContents.maxHeadingLevel;
    const tocTree = useFilteredAndTreeifiedTOC({
        toc,
        minHeadingLevel,
        maxHeadingLevel
    });
    const tocHighlightConfig = (0,react.useMemo)(()=>{
        if (linkClassName && linkActiveClassName) {
            return {
                linkClassName,
                linkActiveClassName,
                minHeadingLevel,
                maxHeadingLevel
            };
        }
        return undefined;
    }, [
        linkClassName,
        linkActiveClassName,
        minHeadingLevel,
        maxHeadingLevel
    ]);
    useTOCHighlight(tocHighlightConfig);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Tree, {
        toc: tocTree,
        className: className,
        linkClassName: linkClassName,
        ...props
    });
}


}),
"50065": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return MDXProvider; },
  a: function() { return useMDXComponents; }
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
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


}),

}]);