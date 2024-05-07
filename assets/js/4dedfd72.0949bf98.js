"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[36705],{

/***/ 54804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ install_aws_log_contentTitle),
  "default": () => (/* binding */ install_aws_log_MDXContent),
  frontMatter: () => (/* binding */ install_aws_log_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ install_aws_log_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./src/components/TR.js
var TR = __webpack_require__(21024);
;// CONCATENATED MODULE: ./docs/getting-started/_how-to-start-intro.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["와탭 모니터링 서비스를 사용하기 위해서는 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.whatap.io/ko/signup/",
        children: "회원 가입"
      }), " 후 프로젝트를 생성하고 대상 서버에 에이전트를 설치해야 합니다. 회원 가입에 관한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../account/account-manage",
        children: "다음 문서"
      }), "를 참조하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "권한"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["설치를 위해서 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "프로젝트 수정"
        }), " 권한이 필요합니다."]
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}


// EXTERNAL MODULE: ./docs/getting-started/_create-project-v2.mdx
var _create_project_v2 = __webpack_require__(29679);
// EXTERNAL MODULE: ./docs/getting-started/_accesskey.mdx
var _accesskey = __webpack_require__(75689);
;// CONCATENATED MODULE: ./docs/aws-log/install-aws-log.mdx


const install_aws_log_frontMatter = {
	id: 'install-aws-log',
	title: '설치하기',
	description: '와탭 AWS Log 서비스 이용을 위한 기본 설치 방법을 안내합니다.',
	tags: [
		'AWS Log',
		'설치하기'
	]
};
const install_aws_log_contentTitle = undefined;
const metadata = {
  "id": "aws-log/install-aws-log",
  "title": "설치하기",
  "description": "와탭 AWS Log 서비스 이용을 위한 기본 설치 방법을 안내합니다.",
  "source": "@site/docs/aws-log/install-aws-log.mdx",
  "sourceDirName": "aws-log",
  "slug": "/aws-log/install-aws-log",
  "permalink": "/whatap-docs/aws-log/install-aws-log",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/aws-log/install-aws-log.mdx",
  "tags": [
    {
      "label": "AWS Log",
      "permalink": "/whatap-docs/tags/aws-log"
    },
    {
      "label": "설치하기",
      "permalink": "/whatap-docs/tags/설치하기"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "install-aws-log",
    "title": "설치하기",
    "description": "와탭 AWS Log 서비스 이용을 위한 기본 설치 방법을 안내합니다.",
    "tags": [
      "AWS Log",
      "설치하기"
    ]
  },
  "sidebar": "awslogSidebar",
  "previous": {
    "title": "AWS Log 모니터링",
    "permalink": "/whatap-docs/aws-log/introduction"
  },
  "next": {
    "title": "VPC 설정하기",
    "permalink": "/whatap-docs/aws-log/install-aws-log-vpc"
  }
};
const assets = {

};

/*프로젝트 생성*/
/*사용자는 AWS 계정 당 할당 가능한 총 Function 개수에서 `ReservedConcurrency` 설정 값을 뺀 만큼 Function을 사용할 수 있습니다.*/
/*어떤 AWS 계정 ID로 생성된 자원에 대해 권한을 허용할지를 지정하고 직전에 생성한 IAM 정책을 매핑합니다.*/






const install_aws_log_toc = [...toc, {
  "value": "사전 확인",
  "id": "사전-확인",
  "level": 2
}, {
  "value": "CloudWatch Log Group",
  "id": "cloudwatch-log-group",
  "level": 4
}, {
  "value": "S3",
  "id": "s3",
  "level": 4
}, ..._create_project_v2/* toc */.RM, ..._accesskey/* toc */.RM, {
  "value": "WhaTap Forwarder 설치",
  "id": "install-whatap-forwarder",
  "level": 2
}, {
  "value": "CloudFormation Stack 설치",
  "id": "cloudformation-stack-설치",
  "level": 3
}, {
  "value": "WhaTap Forwarder의 ARN 확보",
  "id": "whatapforwarder-arn",
  "level": 3
}, {
  "value": "설치 실패 시 점검 사항",
  "id": "설치-실패-시-점검-사항",
  "level": 3
}, {
  "value": "권한 설정",
  "id": "권한-설정",
  "level": 4
}, {
  "value": "스택 이름",
  "id": "스택-이름",
  "level": 4
}, {
  "value": "AWS IAM 정책 및 역할 생성",
  "id": "aws-iam-정책-및-역할-생성",
  "level": 2
}, {
  "value": "IAM 정책 생성",
  "id": "create-iam-policy",
  "level": 3
}, {
  "value": "IAM 역할 생성",
  "id": "create-iam-role",
  "level": 3
}, {
  "value": "AWS Log 구독",
  "id": "aws-log-구독",
  "level": 2
}, {
  "value": "AWS CloudWatch Log 조회 및 구독",
  "id": "aws-cloudwatch-log-조회-및-구독",
  "level": 3
}, {
  "value": "AWS S3 Bucket 구독",
  "id": "aws-s3-bucket-구독",
  "level": 3
}, {
  "value": "모니터링 시작하기",
  "id": "모니터링-시작하기",
  "level": 2
}];
function install_aws_log_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Details, ImgLang, Youtube} = _components;
  if (!Details) _missingMdxReference("Details", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!Youtube) _missingMdxReference("Youtube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(MDXContent, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "설치 과정은 다음 동영상 가이드를 참조하세요."
    }), "\n", (0,jsx_runtime.jsx)(Youtube, {
      ko: "q4mJdUIPRlM",
      en: "-xfcaH3pQWw",
      ja: "-xfcaH3pQWw"
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "사전-확인",
        children: "사전 확인"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["AWS Log를 수집하려면 부가적인 자원이 필요합니다. 사용자의 AWS 환경에서 출력되는 로그 정보를 입수 후 와탭 수집 서버로 전송할 수 있도록 와탭은 AWS Lambda Function을 통해 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "WhaTap Forwarder"
        }), "를 제공합니다. AWS CloudFormation을 활용해 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "WhaTap Forwarder"
        }), "를 사용자의 AWS 환경에 구동합니다."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WhaTap Forwarder"
        }), "는 AWS Lambda Function의 Lifecycle에 의존적입니다. 제어 요소를 통해 동시성 제약을 극복할 수 있습니다. 사용자 환경에서 발생하는 로그량에 따라 다음과 같은 제어 요소를 조정합니다."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "ReservedConcurrency"
          }), ": 동시 실행 개수입니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "Timeout"
          }), ": Lambda Function으로 로그 유입이 없을 경우의 유지 시간입니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "Memory"
          }), ": Lambda Function에 할당될 메모리입니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "ConnectionTimeout"
          }), ": 와탭 수집 서버로 로그 전송 시 타임아웃입니다."]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(Details, {
        children: [(0,jsx_runtime.jsx)("summary", {
          children: "AWS Log가 지원하는 AWS Resource Log"
        }), (0,jsx_runtime.jsx)(_components.h4, {
          id: "cloudwatch-log-group",
          children: "CloudWatch Log Group"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "WAF"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["API Gateway: 로그 그룹의 이름을 ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "api-gateway/gateway resource"
              })
            }), "로 설정해야 정상적인 수집이 가능합니다."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RDS"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "DocumentDB"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "REDIS"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "EKS"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ECS"
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.h4, {
          id: "s3",
          children: "S3"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["VPC: Log가 수집되는 S3 Bucket 이름을 ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "VPC resource"
              })
            }), "로 설정해야 정상적인 수집이 가능합니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["CloudFront: Log 설정 시 접두사는 ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "cloudfront"
              })
            }), "가 기본값입니다. 파라미터 설정 시 변경 가능합니다."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ELB"
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsx)(_create_project_v2/* default */.Ay, {}), (0,jsx_runtime.jsx)(_accesskey/* default */.Ay, {}), (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "프로젝트 액세스 키"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["이미 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "프로젝트 액세스 키"
          }), "를 발급받았다면 버튼 대신 발급받은 키가 표시됩니다."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "install-whatap-forwarder",
        children: "WhaTap Forwarder 설치"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["로그 전송용 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "WhaTap Forwarder"
        }), "를 AWS Lambda Function으로 설치합니다. AWS CloudFormation에서 설치를 진행합니다. 와탭 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "에이전트 설치"
          })
        }), " > ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "설치 안내"
          })
        }), " 섹션의 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "WhaTap Forwarder 설치"
          })
        }), " 탭을 참조하세요. 다음의 설치 입력 정보가 필요합니다."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AWS Region"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "WhaTap Forwarder를 설치하게 될 AWS Region을 선택하세요. 수집 대상 자원과 동일한 Region이어야 합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CloudFormation Stack Name"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "WhaTap Forwarder의 설치 및 제거에 활용되는 CloudFormation Stack 이름을 지정합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ConnectionTimeOut"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "type",
              children: "Second"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "10"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "WhaTap Forwarder가 와탭 수집 서버에 접속 시 타임아웃 시간(초)을 지정합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "MemorySize"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "type",
              children: "Int"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "1024"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "WhaTap Forwarder 의 메모리 할당 사이즈(MB)를 지정합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Timeout"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "type",
              children: "Second"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "150"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "WhaTap Forwarder 의 휴지 기간(초)를 지정합니다. 로그 전송 요청이 없을 때 Lambda Function이 제거되기까지의 시간을 지정합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "UseReservedConcurrency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "type",
              children: "Boolean"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "로그의 안정적인 전송을 위해 WhaTap Forwarder에 할당할 최대 Function 개수의 지정 여부를 설정합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ReservedConcurrency"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "type",
              children: "Second"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "10"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "UseReservedConcurrency"
            }), "의 값이 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            }), "일 때 WhaTap Forwarder에 할당할 Function의 개수를 지정합니다. AWS 계정 당 디폴트로 할당 가능한 Function 수는 1,000개 입니다. 사용자가 사용할 수 있는 Function의 총 개수는 계정 당 총 할당 Function 개수(1,000)에서 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ReservedConcurrency"
            }), " 설정 값을 뺀 것으로 제한됩니다."]
          }), "\n", "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "cloudfrontPrefix"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "type",
              children: "String"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cloudfront"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "CloudFront에서 S3로 Log를 보낼 때 설정하는 접두사 값을 의미합니다."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "cloudformation-stack-설치",
        children: "CloudFormation Stack 설치"
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "aws-log-whatap-forwarder-install.png",
        desc: "WhaTap Forwarder"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "WhaTap Forwarder create stack",
          src: (__webpack_require__(91577)/* ["default"] */ .A) + "",
          width: "1518",
          height: "398"
        })
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "설치 안내"
              })
            }), " 섹션의 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "number 1",
              src: (__webpack_require__(15856)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "WhaTap Forwarder 설치"
              })
            }), " 탭에서 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "number 2",
              src: (__webpack_require__(29675)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "AWS Region"
              })
            }), "을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.img, {
              alt: "number 3",
              src: (__webpack_require__(55522)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "WhaTap Forwarder 설치 페이지"
              })
            }), " 버튼을 선택해 CloudFormation 실행 페이지로 이동하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "CloudFormation 실행 페이지에서 설치 옵션을 지정하세요. 기본 파라미터는 입력되어있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["하단에서 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "number 4",
              src: (__webpack_require__(893)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " 승인 ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "체크"
              })
            }), " 후 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "number 5",
              src: (__webpack_require__(79764)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Create stack"
              })
            }), " 버튼을 선택하세요. 설치에 약 2분이 소요됩니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "whatapforwarder-arn",
        children: "WhaTap Forwarder의 ARN 확보"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "WhaTap Forwarder arn1",
          src: (__webpack_require__(12736)/* ["default"] */ .A) + "",
          width: "1908",
          height: "2006"
        })
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["상단 오른쪽의 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "number 1",
              src: (__webpack_require__(15856)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "갱신"
              })
            }), " 버튼을 선택해 스택의 생성 진행 상태를 확인하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: ["스택 설치의 최종 단계인 WhaTapAWSLog 생성이 진행 중이라면 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "WhaTap Forwarder"
              }), "의 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ARN"
              }), "을 확보할 수 있습니다."]
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Logical ID가 WhaTapAWSLOG로 지정된 자원의 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "number 2",
              src: (__webpack_require__(29675)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Pyhsical ID"
              })
            }), "를 선택해 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "WhaTap Forwarder"
            }), "의 상세 화면으로 이동하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["상세 화면 오른쪽의 ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Description"
              })
            }), " 영역에서 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "number 3",
              src: (__webpack_require__(55522)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Function ARN"
              })
            }), "(", (0,jsx_runtime.jsx)(_components.strong, {
              children: "WhaTap Forwarder ARN"
            }), ")을 확인할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "다음 단계를 위해 복사하세요."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,jsx_runtime.jsx)(_components.h3, {
        id: "설치-실패-시-점검-사항",
        children: "설치 실패 시 점검 사항"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "권한-설정",
        children: "권한 설정"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "다음과 같은 에러 메시지 발생 시 권한 부여 여부를 확인하세요."
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "User {user name} is not authorized to perform\n"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "필요 권한"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "CloudFormation 설치를 위한 정책"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "AWS Log 코드를 가져오기 위한 정책"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "AWS Log를 생성하고 필요한 권한을 부여하기 위한 정책"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "AWS Log에 Policy를 생성하기 위한 정책"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title='AWS Log Required roles'",
              children: "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n      {\n          \"Sid\": \"VisualEditor0\",\n          \"Effect\": \"Allow\",\n          \"Action\": [\n              \"iam:GetRole\",\n              \"iam:GetRolePolicy\",\n              \"iam:CreateRole\",\n              \"iam:PutRolePolicy\",\n              \"iam:PassRole\",\n              \"iam:AttachRolePolicy\",\n              \"cloudformation:ListStacks\",\n              \"cloudformation:DescribeStackResource\",\n              \"cloudformation:GetTemplateSummary\",\n              \"cloudformation:DescribeStacks\",\n              \"cloudformation:DescribeStackEvents\",\n              \"cloudformation:CreateStack\",\n              \"cloudformation:GetTemplate\",\n              \"cloudformation:ValidateTemplate\",\n              \"lambda:CreateFunction\",\n              \"lambda:InvokeFunction\",\n              \"lambda:GetFunction\",\n              \"lambda:AddPermission\",\n              \"s3:CreateBucket\",\n              \"s3:GetObject\"\n          ],\n          \"Resource\": \"*\"\n      }\n  ]\n}\n"
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "스택-이름",
        children: "스택 이름"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "다음과 같은 에러 메시지 발생 시 CloudFormation 스택 이름을 변경하세요."
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "Stack {stack name} already exists\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "aws-iam-정책-및-역할-생성",
        children: "AWS IAM 정책 및 역할 생성"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["WhaTap Forwarder가 사용자의 AWS 환경 자원 로그를 전송받으려면 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "IAM 정책"
          })
        }), "과 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "IAM 역할"
          })
        }), "이 필요합니다. 이전에 WhaTap Forwarder 설정용 IAM 정책과 IAM 역할을 생성한 적이 없다면 신규 생성하세요."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "create-iam-policy",
        children: "IAM 정책 생성"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["접근 대상 자원에 대한 허용 여부를 지정합니다. 와탭 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "에이전트 설치"
          })
        }), " > ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "설치 안내"
          })
        }), " 섹션의 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "AWS IAM 정책 생성"
          })
        }), " 탭을 참조해 진행하세요. 누락된 정책이 있으면 설정이 정상적으로 이루어지지 않습니다."]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "aws-log-create-policy.png",
        desc: "IAM 정책 생성 sc"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "AWS Management Console에 로그인 후 IAM 콘솔을 여세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["IAM 콘솔에서 ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Policy"
              })
            }), " 탭을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Create Policy"
              })
            }), " 버튼을 선택하고 다음의 정책을  복사해 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "number 1",
              src: (__webpack_require__(15856)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "JSON"
              })
            }), " 탭에 붙여넣기 하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-json",
              metastring: "title='IAM policy'",
              children: "{\n    \"Version\": \"2012-10-17\",\n    \"Statement\": [\n        {\n            \"Sid\": \"VisualEditor0\",\n            \"Effect\": \"Allow\",\n            \"Action\": [\n                \"s3:List*\",\n                \"s3:PutBucketNotification\",\n                \"s3:GetBucketNotification\",\n                \"logs:PutSubscriptionFilter\",\n                \"logs:DescribeLogGroups\",\n                \"lambda:ListFunctions\",\n                \"logs:DescribeSubscriptionFilters\",\n                \"s3:GetBucketNotification\"\n            ],\n            \"Resource\": \"*\"\n        },\n        {\n            \"Effect\": \"Allow\",\n            \"Action\": \"lambda:UpdateFunctionCode\",\n            \"Resource\": \"*\",\n            \"Condition\": {\n                \"ForAllValues:StringEquals\": {\n                    \"aws:TagKeys\": \"WhaTapForwarder\"\n                }\n            }\n        },\n        {\n            \"Effect\": \"Allow\",\n            \"Action\": \"s3:GetObject\",\n            \"Resource\": [\n                \"arn:aws:s3:::whatapforwarder\",\n                \"arn:aws:s3:::whatapforwarder/whatap.zip\"\n            ]\n        }\n    ]\n}\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["하단의 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "number 2",
              src: (__webpack_require__(29675)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Review Policy"
              })
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.img, {
              alt: "number 3",
              src: (__webpack_require__(55522)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " 정책 이름을 지정하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["하단의 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "number 4",
              src: (__webpack_require__(893)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Create Policy"
              })
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "IAM 정책 내 권한"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "해당 IAM 정책에는 다음과 같은 권한이 지정되어 있습니다."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "S3 저장 목록 조회 권한"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "S3 버킷에 오브젝트 탑재 시 통지 취득 권한"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "CloudWatch Log 구독 필터 권한"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "CloudWatch Log 그룹 조회 권한"
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "create-iam-role",
        children: "IAM 역할 생성"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["생성된 자원에 대한 권한을 어떤 AWS 계정에 허용할지 지정하고 직전에 생성한 IAM 정책을 매핑합니다. 와탭 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "에이전트 설치"
          })
        }), " > ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "설치 안내"
          })
        }), " 섹션의 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "AWS IAM 역할 생성"
          })
        }), " 탭을 참조해 진행하세요."]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "AWS Management Console에 로그인 후 IAM 콘솔을 여세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["콘솔 탐색창에서 ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Roles"
              })
            }), "을 선택한 후 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "number 1",
              src: (__webpack_require__(15856)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Create role"
              })
            }), " 버튼을 선택하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              alt: "IAM Role 1",
              src: (__webpack_require__(51629)/* ["default"] */ .A) + "",
              width: "1708",
              height: "532"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Select type of trusted entity"
              })
            }), "에서 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "number 2",
              src: (__webpack_require__(29675)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "AWS account"
              })
            }), "를 선택하고 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "number 3",
              src: (__webpack_require__(55522)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Account ID"
              })
            }), "에 와탭 계정(", (0,jsx_runtime.jsx)(_components.strong, {
              children: "911937781722"
            }), ")을 입력하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              alt: "IAM Role 2",
              src: (__webpack_require__(74824)/* ["default"] */ .A) + "",
              width: "1709",
              height: "1010"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["하단의 ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Next"
              })
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#create-iam-policy",
              children: "기존 단계"
            }), "에서 생성한 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "number 4",
              src: (__webpack_require__(893)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "IAM 정책"
            }), "을 선택하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              alt: "IAM Role 3",
              src: (__webpack_require__(40467)/* ["default"] */ .A) + "",
              width: "1708",
              height: "302"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["하단의 ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Next"
              })
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["IAM 역할의 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "number 5",
              src: (__webpack_require__(79764)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " 이름을 입력하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              alt: "IAM Role 4",
              src: (__webpack_require__(55044)/* ["default"] */ .A) + "",
              width: "1708",
              height: "640"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Create Role"
              })
            }), "을 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["정보 탭에서 생성된 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "number 6",
              src: (__webpack_require__(1231)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "IAM Role ARN"
              })
            }), "을 확인할 수 있습니다."]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              alt: "IAM Role 5",
              src: (__webpack_require__(68308)/* ["default"] */ .A) + "",
              width: "1708",
              height: "492"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["다음 단계를 위해 ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "IAM Role ARN"
              })
            }), "을 복사하세요."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "aws-log-구독",
        children: "AWS Log 구독"
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "CloudWatch Log와 S3에 탑재되는 Archive Log를 구독할 수 있습니다."
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "aws-cloudwatch-log-조회-및-구독",
        children: "AWS CloudWatch Log 조회 및 구독"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["와탭 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "에이전트 설치"
          })
        }), " > ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "설치 안내"
          })
        }), " 섹션의 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "AWS Resource Log 조회 및 구독"
          })
        }), " 탭에서 상단의 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "AWS CloudWatch Log Group"
          })
        }), "을 선택해 진행하세요."]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "aws-log-cloudwatch-subs.png",
        desc: "AWS CloudWatch Log 조회 및 구독 sc"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["AWS Log가 설치된 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "number 1",
              src: (__webpack_require__(15856)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "AWS Region"
              })
            }), "을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#whatapforwarder-arn",
              children: "기존 단계"
            }), "에서 획득한 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "WhaTap Forwarder ARN"
            }), "을 복사 후", (0,jsx_runtime.jsx)(_components.img, {
              alt: "number 2",
              src: (__webpack_require__(29675)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "AWS IAM Role ARN"
              })
            }), "에 붙여넣기 하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.img, {
              alt: "number 3",
              src: (__webpack_require__(55522)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "조회"
              })
            }), " 버튼을 선택해 구독할 수 있는 AWS 자원을 조회하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["조회된 자원 중 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "number 4",
              src: (__webpack_require__(893)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " 구독할 대상을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.img, {
              alt: "number 5",
              src: (__webpack_require__(79764)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "등록"
              })
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "조회 및 구독 실패 시"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "IAM Role Policy"
              })
            }), "에 빠진 정책이 없는지 확인하세요."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "IAM Role"
              })
            }), " 생성 과정에서 신뢰 정책을 정확하게 설정했는지 확인하세요."]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "aws-s3-bucket-구독",
        children: "AWS S3 Bucket 구독"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["와탭 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "에이전트 설치"
          })
        }), " > ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "설치 안내"
          })
        }), " 섹션의 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "AWS Resource Log 조회 및 구독"
          })
        }), " 탭에서 상단의 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "AWS S3 Bucket"
          })
        }), "을 선택해 진행하세요."]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "aws-log-s3-subs.png",
        desc: "AWS S3 Bucket 조회 및 구독 sc"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["AWS Log가 설치된 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "number 1",
              src: (__webpack_require__(15856)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "AWS Region"
              })
            }), "을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#whatapforwarder-arn",
              children: "기존 단계"
            }), "에서 획득한 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "WhaTap Forwarder ARN"
            }), "을 복사 후 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "number 2",
              src: (__webpack_require__(29675)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "AWS IAM Role ARN"
              })
            }), "에 붙여넣기 하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.img, {
              alt: "number 3",
              src: (__webpack_require__(55522)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "조회"
              })
            }), " 버튼을 선택해 구독할 수 있는 AWS 자원을 조회하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["조회된 자원 중 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "number 4",
              src: (__webpack_require__(893)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " 구독할 대상을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.img, {
              alt: "number 5",
              src: (__webpack_require__(79764)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "등록"
              })
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "모니터링-시작하기",
        children: "모니터링 시작하기"
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "aws-log-start.png",
        desc: "AWS Log 모니터링 시작하기"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["설치를 완료한 뒤 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "관리"
          })
        }), " > ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "로그 설정"
          })
        }), " 메뉴로 이동하세요. ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "로그 모니터링 시작하기"
          })
        }), " 섹션에서 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "로그 모니터링 서비스 활성화"
          })
        }), " 토글 버튼을 선택해 AWS Log 모니터링을 시작하세요."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.img, {
            alt: "아이콘",
            src: (__webpack_require__(67107)/* ["default"] */ .A) + "",
            width: "32",
            height: "16"
          }), " 토글 버튼을 켜면 로그 모니터링이 활성화됩니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.img, {
            alt: "아이콘",
            src: (__webpack_require__(50335)/* ["default"] */ .A) + "",
            width: "32",
            height: "16"
          }), " 토글 버튼을 끄면 로그 모니터링이 비활성화됩니다. 로그를 더 이상 저장하지 않습니다."]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["모니터링이 활성화되면 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "대시보드"
          })
        }), " > ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "라이브 테일"
          })
        }), " 메뉴에서 유입되는 로그의 출력을 확인할 수 있습니다."]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["프로젝트에 대한 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "수정 권한"
          }), "이 있는 경우에만 로그 모니터링을 활성화할 수 있습니다. 권한에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../project/project-structure",
            children: "다음 문서"
          }), "를 참조하세요."]
        })
      })]
    })]
  });
}
function install_aws_log_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(install_aws_log_createMdxContent, {
      ...props
    })
  }) : install_aws_log_createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 75689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (/* binding */ MDXContent),
/* harmony export */   RM: () => (/* binding */ toc)
/* harmony export */ });
/* unused harmony exports frontMatter, contentTitle */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "프로젝트 액세스 키 확인",
  "id": "check-accesskey",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    p: "p",
    section: "section",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "check-accesskey",
      children: "프로젝트 액세스 키 확인"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "프로젝트 액세스 키"
      }), "는 와탭 서비스 활성화를 위한 고유 ID입니다."]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["설치 안내 섹션에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "issue_project_access_key",
        className: "uitext"
      }), " 버튼을 선택하세요. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "프로젝트 액세스 키"
      }), "를 자동으로 발급 받은 후 다음 단계를 진행합니다."]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "tip",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["프로젝트를 생성한 다음에는 자동으로 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "agent_installation",
          className: "uitext"
        }), " 페이지로 이동합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "agent_installation",
          className: "uitext"
        }), " 페이지로 이동하지 않는다면 왼쪽 메뉴에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "all_projects",
          className: "uitext"
        }), "를 선택한 다음 새로 생성한 프로젝트를 선택하세요."]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 29679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (/* binding */ MDXContent),
/* harmony export */   RM: () => (/* binding */ toc)
/* harmony export */ });
/* unused harmony exports frontMatter, contentTitle */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "프로젝트 생성하기",
  "id": "create-project",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    em: "em",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "create-project",
      children: "프로젝트 생성하기"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "에이전트를 설치하기 전에 먼저 프로젝트를 생성하세요."
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://service.whatap.io",
            children: "와탭 모니터링 서비스"
          }), "로 이동한 다음 로그인하세요."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["프로젝트를 생성하려면 화면 왼쪽 사이드 메뉴에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "BTN07332",
            className: "uitext"
          }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "+"
            })
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "BTN06696",
            className: "uitext"
          }), " 버튼을 선택하세요."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "TTL07073",
            className: "uitext"
          }), " 화면에서 프로젝트에 설치할 상품을 선택하세요."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "project_name",
            className: "uitext"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "data_server_region",
            className: "uitext"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "project_time_zone",
            className: "uitext"
          }), " 항목을 차례로 설정하세요."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "create-project-v3.png",
          desc: "프로젝트 생성"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "TTL07727",
            className: "uitext"
          }), "에서 경고 알림 메시지의 언어를 선택하세요."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["모든 설정을 완료한 다음에는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "creating_a_project",
            className: "uitext"
          }), " 버튼을 선택하세요."]
        }), "\n"]
      }), "\n"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "data_server_region",
              className: "uitext"
            }), "은 리전(클라우드 서비스를 제공하기 위해 설치한 데이터 센터의 묶음)을 의미합니다. 특정 리전을 선택하면 해당 리전에 속한 데이터 센터에 사용자의 데이터를 저장합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "project_time_zone",
              className: "uitext"
            }), "은 알림, 보고서를 생성하는 기준 시간입니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["여러 개의 프로젝트를 그룹으로 묶어 관리하려면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "project_groups",
              className: "uitext"
            }), "에서 그룹을 선택하거나 그룹을 추가하세요. 그룹에 대한 자세한 설명은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../project/group",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["조직을 선택한 상태에서 프로젝트를 추가할 경우 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "group_of_organization",
              className: "uitext"
            }), "을 필수로 설정해야 합니다."]
          }), "\n"]
        }), "\n"]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 21024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ TR)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15418);



function TR({ sid }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        id: sid
    });
}


/***/ }),

/***/ 91577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/aws-log-create-stack-fc6910b267af3b770ffd5068ebeca5d8.png");

/***/ }),

/***/ 74824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/aws-log-iam-role-account-d372962e232fcd1d0dad65c4acd5016f.png");

/***/ }),

/***/ 68308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/aws-log-iam-role-arn-c-26c49ed229c9a4319bb2c625892b1c14.png");

/***/ }),

/***/ 51629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/aws-log-iam-role-create-a742d1063448fd5c7cb8beaa7a924fd6.png");

/***/ }),

/***/ 55044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/aws-log-iam-role-name-7b98f031ae48903a602c01ea1919b69a.png");

/***/ }),

/***/ 40467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/aws-log-iam-role-policy-704f92d91e5f869f69efb62c83300374.png");

/***/ }),

/***/ 12736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/aws-log-whatap-forwarder-arn-7608a3412b0fc7f6ea5565447c965234.png");

/***/ }),

/***/ 50335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAzMiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIzMSIgaGVpZ2h0PSIxNSIgcng9IjcuNSIgZmlsbD0iIzk5OTk5OSIgc3Ryb2tlPSIjOTk5OTk5Ii8+CjxjaXJjbGUgY3g9IjguMDAwMTYiIGN5PSI3Ljk5OTkyIiByPSI2LjY2NjY3IiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K");

/***/ }),

/***/ 67107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAzMiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjE2IiByeD0iOCIgZmlsbD0iIzAwQjU0MyIvPgo8ZWxsaXBzZSBjeD0iMjQuMDAwMiIgY3k9IjcuOTk5OTIiIHJ4PSI2LjY2NjY3IiByeT0iNi42NjY2NyIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ 15856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Yzg0YmZlYjgtYTgzZS00NTU3LWFiNGYtODQ3ZTFjMGQ5MjNlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTJEQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTJDQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTZlMmZhMDktMjhmZS00ZGUxLTg3NGQtNDQwYjgxNTBmMzI4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmM4NGJmZWI4LWE4M2UtNDU1Ny1hYjRmLTg0N2UxYzBkOTIzZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppgo9sAAAAJPSURBVHjazJhNSBtBGIYnNiejFDwIzUEbKh5U0FsPWqOFSlTw5EFEpbeSgxdRUZFSi4rgMZS0p2KrICKiWIN6kPgH7cnfgAcl6EEhCErbQKGV9v3MDG6XxMwmu5t94cGom+Fhdubbb9YWXWZa4gQNoBqUgQKQB/6CK3AKQmAdBMCFlsFtkjK1oBe8AA8kx74BNPo4l0uarCT/LwIrYA14NIgwfm0jCIIl8CQdmZdgF9Sx9EO3dg+0a5WxgWHwETiYfqGxPoHXiS6wx/nbKOhjxmWI/3ybbGY6DBZRCrXeJ0OL1c/My3vgSiTzDmSbKJMLfPFknmvZNdFfjM2hcpRjvzk8MVIMbf1n6gXcLfPNr6it/nnGZjd1naEesClmxik7K+eXuotQ6kG+mJlG2cpajCfR5/7Y5619xj4s6SJj50IT9MEt+60yVwwRnWQoNSRDt6mUZT4lYs0UWkDGJWQeWkAmV6aFMDUkc20Bjx9C5swCMmEhc2ABmZCQ2bCATFDIUOn6k0GR37xxvy3FdJxY5X1q4puKq3yzd78fqVZal6IZ6GxG4XgkLUOTEVEeVdxiqhLlEEvsqVdu9G/+/x8bSVIFtpV1Zl1MlclZFCLqQxy1nTsgxySR76BCbGt1BT4GXpNE6Dj8SikS73EwqThKGJkBMC1ziHtjoBDNyCAY03K8JaE28FPnNdICRlI5a0/xBRbQadfQWDPpvIU44T0yvY/5orFSU2VdAJWgSb1Y03k/I5LPK7Wbt6uPRWPE24Awf+gFed2KGPGyyJT8E2AAc7l5zWfLLegAAAAASUVORK5CYII=");

/***/ }),

/***/ 29675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NjVlMjMwYmYtMTI4OS00ODUyLWE3NjYtZDU2NzhlZjdkZWE5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTI5QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTI4QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWUyNmRlM2EtZTU1MS00YTNhLTg5ODUtNTliOTQzOTNkMTg0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY1ZTIzMGJmLTEyODktNDg1Mi1hNzY2LWQ1Njc4ZWY3ZGVhOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plwn9wAAAALTSURBVHjaxJhLSFRRGMe/sYLADDdJUlST7YapaNXTsVWa0QujqMCIoCg0CKPsaQ8rGpIwIiIX0TtyIT00KQiNaKJNaLbSLFoU2cKygWAW9f+653OuecVz7r1z+8NvHtx7zvznnO9853w3lHxMJpoESkAMREAYZKtrSdALOkE7aAHfTDoPaZpZCPaCUjBOs+8UeAjOgoROg6xRrs8ED8ALsNrACKl714CXoAlM92JmI3gDVpB3rQIdYJ0bM0fATZBD/mkiuAsOmpg5Co5RZhQCJ8F+HTObQQ1lXqecpsxuZha4RMGIR6hBpQZHM/Vggk5Pff1EV5FFymuRZIot9lwgevLaOIbOO+WZQtCm0wP/YNVFou4vztdPbyOqLDMytViljsGR2afTKtGFZHM4bSQWJdpear2LqhuMR6jKPk35YJlOq2gBUdkS6/P1aqLmOFFdhfXOIyJqSRiZ4ayeJ9PE3VzRbZn8hc2nh2h+ZHgczdhgu89szysH17JUvGgre/xwI3930FxPq6tIpinqx1rlkRHJVBooImam+WHm9tP056XzjJuHxUyuVyO9n61VNBiRC4y7yNE5QmgF9K669HdeZW7jh81892Jm5zlky850rKyNuepmQMx8dGukvpGo8bna2CZjh93qfqbFzFu3RuxxchmH0nC+azPvxEybVyNNJ5xzj4GeSQbm//MJjNEJVo4RmRqJk4IpRP0DQ++djQPJlhLtg/tU8HUsXrAwqRUsH61V66uhRlj/fhfxBqqpZjZiX9px+n+KO9VNXHQVB2yEy6CVTie9ClUVBqUfYPdIx85usCMgI785rCS/jFQd3MhgmWLXAXBHp26qUbVTpkbkEDhjUlEeB5vAT59jZD2odVNr3wJzwSMfjNwHc8A9L08helThX6g6TBkYSKmnD4tU4f/Br+czojyVi4psD4uk8OMpfQ+61H7HeasvEw+LAtEfAQYAv2+q6mxeFyYAAAAASUVORK5CYII=");

/***/ }),

/***/ 55522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MjNjODFkMGUtOTAzMy00NmVhLWI3MzQtZWVmNzY0Y2U4ODY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRCRDFDMjg4QjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRCRDFDMjg3QjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODNkOGM4MWEtNWE2MS00MmRiLTk2YTgtYTc1NjI2MTU1MDg1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIzYzgxZDBlLTkwMzMtNDZlYS1iNzM0LWVlZjc2NGNlODg2NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhIBdIgAAAMcSURBVHjazFh9aI1hFD93KIw1hZDkZn+oOyklFLar5ONiSzNqUmqF+UqakFmjKMWSiCSaj3wlaXcmaV8YKQ2bf0xL/rDIR1uTYvE73ee573vf3bud5953b0792t37cd7fe57zO885r6+nlv4bG2p4/XhgOZALBICpQAbwF+gGOoA2oB64D3w2ce4TRmYBsAdYavACv4Ea4BjwVHJD2gDnpwFhoBFYYRjJYUAe8AS4B/hTIVMEtKhlSdVWKl+FyZCpAK4Ao1zMT86t68ABEzKHgIODJBgfcBjYKyGzHijzQMVHgHX9kckCznpUUjhC55xJbVfHKSBd4unLD0ismajuJdHtpsixAog/OIsoNI9oXKY4h04Cq5x1hotYncTDnQZk90Wi9s7457MmEF0tJ8r2i6M0X8k/ukylkrt6fsUS4QdvCkWioo3PFVVErhVaqT0yE/H3IzBEcmfHJ6KtJ4iKUQJX51jHH74gyrel/l1oZvFscaWezFsH50xISoTND+q38KD04bHHnQ/u/mlUqXmbqeJlWmgqBScRndR2mzTWyGWuVtOMVDTKJFreEVXetI5xHs0NGLkJaDJTkiHRimZhzpa+x0/vJFoTNHbn12rKdKuS5SDGGSPjL+MANlqrqVfQSsRdnqZXRF1I1NftKKdh6xxL/cxuI1JcCEYwmW/4MSbVqLDk8/dZNehoMdGOAvm7cRfJEfngxhKx5Hettf6vfW72LjpnWk0jIKmuDW+MyLzVZBqldzAJXoqS4xE1OUlW3oiVt4HVa2lz6vVKqvCF6khOMHi3ZvVMR2H42mXt3toKF4mJ/FGTRHTXDkt6XY5M2flY5cQzg32JVLOeZyfD7/FIejdvis2Yjp61WbmRRD9jH4MeO+cm/rXE4yEyrEagPm3nNl4JD4nwBLo9UQ+MOkolHpLZrOtLoumgiounB0R4FLommZv2q9lmsKw8kf+0fphvdDmH2NcGNSQaz9qXgJnAAxeI1Chfl1P5CvFe9adBW6WWGl9brVrKkPLlyveZaGsLLOM+CshWXaJuP76rDkB/LOJodJo4/yfAABNxzftn0khZAAAAAElFTkSuQmCC");

/***/ }),

/***/ 893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NzViZDMyNzctMzBhNS00ZGFjLWEyOTItYzZlNDYwMGIxNzhjIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRCRDFDMjg0QjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRCRDFDMjgzQjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OWVmMWZkYmQtM2FiMS00MDBiLWEyYjAtZjU4ZGNmNjZkY2NiIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc1YmQzMjc3LTMwYTUtNGRhYy1hMjkyLWM2ZTQ2MDBiMTc4YyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjAb6dMAAAJ4SURBVHjaYvy6g2HQABYS1YsBsRcQOwCxNhArADEfEP8H4s9AfB+IrwLxASDeDsSvSDGckciQsQXiMiD2IMEDv4F4GxB3AfExYjQwEZBXBuKtQHwIiH1IDElWIPYH4qNAvAmIFSlxTDQQX4BGC6XAF2pWGDmOaQTiJUDMQ8X0CUpbK4C4hhTHNAFxHY0yDCMQNwNxBTGOiQHiWjrk4jYgjsDnGBUgnkGnIgUUQjPREzVy7pgMxNykmnr/OQODTiKqGJHFBSgNTQRiP/SQcYCWISSDhnkU5zJrdMeUkmPSuoMMDGsOUxxlpciOkQRid1JN+PoDmP/nQ9jp3hQ5xgtazYAdAzKKmVQT5m5hYLjzAsL2tKDIMaywJAJyjB2puq8Aq8PKORC2vS4Dg6spxVHlAHOMLqk6u5ch2F1ZVMnq2jDHyJGbaMuBxZaOIlUcowhzjACxOl5/QCRaFQkGhswAqhWCvMQ0IVDA9A2IRFsPLOhEBRioCkAl8EcgFiSmpO1cgeAfuQTB2EDRZAjdl0u0Oz7DWnrngbQBMTnIPJPEsoj49vUpIDYHRdOVQdAWvwaLpkPQpgNeAMo1+HzK7UFWiMDAAVgCBrVx/w5gqPyB9iTAjnkGxDsH0DHbYF0aWNbuHUDHdGPrN+0gp/amEGyFdoEwmp05oLRHR4eAypZcXG3gO0CcRUfHZEC7wzh7B4uAuJ0ODgF1hZYR02+qgvZtaAXqcZnPhMfliVROQyCz4qCdRJL72guAWJ9KZdA2qFmLKRmFuAttnzqSUVKD1G6BNim9oWZRZXwGBqRA7W9Q0xdUXUFbibDmx3sgfog0WAQKjRekGA4QYAC/W4cAbCK1hAAAAABJRU5ErkJggg==");

/***/ }),

/***/ 79764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NzViZDMyNzctMzBhNS00ZGFjLWEyOTItYzZlNDYwMGIxNzhjIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRCRDFDMjgwQjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI5Q0REM0UwQjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NGZkZTk4ZTUtMTdkMS00ZjdhLWE1NDYtMWVjNjk1MWNkMjFkIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTE2ZmVkZDktZDVhNy1kYzQ3LWIzMzYtNzY5N2JiY2UyZDJjIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+GR8qLwAAAvVJREFUeNrMWE1IVFEUPmMJ5ZRkQmZFJLUInHIpmNXUxsxKF1JBEQZCVlYUWBlpZJAQtJAIFVpIRrQoCGmsiGiwsiKSFtrKGKygSKQfEYKS+k5zb29+muc9M28eHvh4982797xvzj33/DzPxD2aNjJTOH8BsBnwA4XAMiAb+A2MAyFgCAgCd4HPEuUeQ8usBY4DmwR/4CfQC1wA+k0WZEzxfDkQAPqALUJLZgKVwFOgByhIhcwu4LXallRlq9K1PRkyZ4FrwBwH/ZN96wZwWkKmBWhO04HxAOeAkyZkdgNNLpzi88BOOzIrgA6XQgpbqDPWqSNPxyXAa6LpGGZ2BuznvGgn8hVM6UNtwLZYy/hVDHFb+JStibVMg0TDw1fWuBrhMDc7fo53lrG6BhWL/kbgfFzfAzNMV3sjbOhAbuNIvYRTB29ThYRIGiRTuwiTWTcNErZfk1klWTXxwxqvx8qWrvC2FdWEx4OhpMgUap8Zw3W+6Sp+WfF++zmttUSHq0VkRrk8YcvMk6zKywmfIJZ98LbuRqLLRxAxF1pzGq8QPR8SkZmrLTNpUErESegjwmd+9PaV1BENfwrfn0Cwb64xVsebP5tJfEtmkyOJ6LhydId1fysoUjeuHXjEsRohyxprC5kaWpMZlJ4m3qL/yYdRa8z+JJA3mkyfZNVFlEdVcNoHL6N/53t2XC2lq0VkgtqBF+H6ziQK8wurmqLjzMqlRGPfiW4+jqhFcLL6O4zz0y9gMacD3R0ETGvdLjQgB9sSP2cit1vjHdxGelTh/q9V2cjJ2DhCfQX7Z0SPBiyLcOypLCUqKxZlbN0GPYntm3hU5nJOCqgWKK7srOfD4iIRji2HEtXAw8ABF8nU6fiSqDu4ynnOBSLcCl036ZtOqd4mXXImkf4MG+Z7HfYh1rVHNYniXhulEhUB9x0g0qt0dafyFeKtqk83qGM4KSDAc++okrJC6XLk+4wWTh3lnAkAH4BkQDnq2RdVAeiPRWwNUe7+I8AARDiqkQLMxlkAAAAASUVORK5CYII=");

/***/ }),

/***/ 1231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NzViZDMyNzctMzBhNS00ZGFjLWEyOTItYzZlNDYwMGIxNzhjIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI5Q0REM0REQjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI5Q0REM0RDQjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YjQ0MDY0NmQtZDc5OS00MzcxLThkYTUtMTUzMWUyMTUyMTEzIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6Y2YxZjhkZDgtYTkwMy0yZTQ3LTk5ZWYtZWExODlhMGIyYzIyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+iFZGSwAAAxtJREFUeNrMWF1IVEEUPmsJlREFGakRLfm2bj5E0IObm9HfWhQlEvSDQVBk9bZRUUkKBVEP1kMJhaIVPRSIuOoS0SYVWgRBWhCG5UPGFvQjC0JJfYed2Xt322v3tNelAx87y9xz7jdz5vzMdcV66L+R6cLnFwABwA94gCXAHOAXMAYMA4NABOgGohLjLps74wOOAhsEC/gBdAHngSd2FHL+Mr8UCAG9wCbhTuYCW4DHQAfgzoTMTuCFckumslnZqv4XMmeAG8BsB88nn63bwEkJmXrg9BQFjAtoAI7ZIbMLOJWFKD4L7JiMTDFwNUsphXeoKfVQm8lcBvIkFodHiS7dISqtgSKCPhAkakF2+fTV9hlqTJdnOIk9kBC594xoq4VDixdi2SC20mPLVJkK/8TOBCVE+gaTiZR7ifZXxkmwDH1EGM6ybS5oLgcFwHoJmfoWY3xuH9GRKuM/u6loPlGJ27a5gCozUSaDNdE0ya48fBkfV/mSibDUbBQf5lxVZlrZTaskmk9fm/LAOseiy6/d5JVovRs1HdRFxm59+ExUCPd4Uc3yZojJeDSZxRKtplCKw4OG23QkXaglWrtCRMatQ3vCRvVOCOcT84s5ctLJQDPeUGCbzDgwMydTZ9+/SMS5KtoeD28tbWG5LSbzTaKgcwnLzTojsfE5Ob7bmLsbEfEY02TeS7TWLLeey59rjK3cZ1VZNJkBiVbZMmP8ZiR5LjaefgdtyCtNplei5Ss1dWDNyQTC/cZ4u19EJqKjqRC/I5IszCm/ttGoS9UVRN9jODPXjGf6r9guCT+BIi4HumqHJL0u78b1zuSXm6W9QZRnOlTjnmghKjhKpaHIbUR3HxSfY2n58cjaVi4qkvoa9Cj13tQjrd4OSEhdgf7o9A6xB7JIhHPLYau2cwg4mEUyB3R+sbodtHK/lAUifBW6ZefedELdbaZK6qzs50zCfK/DZ4ht7VGXRPFdmztdzrdhB4h0KVttmXyFeKv609UqDCcEBPjZTtVSVipbjnyf0cKlg1tupDYqUV3iPDX3RXUA+mMR74aodv8WYACKXLbvvXLw3AAAAABJRU5ErkJggg==");

/***/ }),

/***/ 28453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
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


/***/ })

}]);