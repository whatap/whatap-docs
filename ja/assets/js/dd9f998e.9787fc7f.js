"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[23681],{

/***/ 63745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {
	id: 'about-instance-performance-analysis',
	title: 'インスタンス性能管理の活用',
	description: 'アプリケーションモニタリングメニューの中でインスタンス性能管理メニューの主な機能と活用例を案内します。',
	keywords: [
		'アプリケーション',
		'アプリケーションモニタリング',
		'APM',
		'インスタンスの性能管理'
	],
	toc_max_heading_level: 2,
	displayed_sidebar: 'learningSidebar'
};
const contentTitle = undefined;
const metadata = {
  "id": "best-practice-guides/about-instance-performance-analysis",
  "title": "インスタンス性能管理の活用",
  "description": "アプリケーションモニタリングメニューの中でインスタンス性能管理メニューの主な機能と活用例を案内します。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/best-practice-guides/about-instance-performance-analysis.mdx",
  "sourceDirName": "best-practice-guides",
  "slug": "/best-practice-guides/about-instance-performance-analysis",
  "permalink": "/ja/best-practice-guides/about-instance-performance-analysis",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/best-practice-guides/about-instance-performance-analysis.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "about-instance-performance-analysis",
    "title": "インスタンス性能管理の活用",
    "description": "アプリケーションモニタリングメニューの中でインスタンス性能管理メニューの主な機能と活用例を案内します。",
    "keywords": [
      "アプリケーション",
      "アプリケーションモニタリング",
      "APM",
      "インスタンスの性能管理"
    ],
    "toc_max_heading_level": 2,
    "displayed_sidebar": "learningSidebar"
  },
  "sidebar": "learningSidebar",
  "previous": {
    "title": "데이터베이스",
    "permalink": "/ja/best-practice-guides/set-db-metric-warning-notice"
  },
  "next": {
    "title": "TCPポートモニタリングの活用",
    "permalink": "/ja/best-practice-guides/about-tcp-port"
  }
};
const assets = {

};

/*예를 들어 새로운 서비스 패턴 지정으로 추가적인 트랜잭션 시작점을 설정하여 응답 시간을 측정하는 등 트레이스 및 후킹과 관련된 와탭 설정 변경 시 해당 클래스를 목록에서 찾아 ![수정 아이콘](/img/ico-edit.svg) <Cmdname sid="redefine" className="uitext" />를 클릭하세요.*/
/*해당 기능을 선택 해 재정의

再定義機能はredefine関数

既に読み込みされたクラスを修正して新しいサービスパターンを指定し、追加のトランザクションの開始点を設定できます。 これにより、応答時間を追跡できます。

서비스 패턴을 새로 지정해 새로운 트랜잭션 시작점을 설정하여 응답시간을 추적하고자 할 때*/
/*으로 클래스간 충돌 방지, 디버깅, 성능 최적화 등을 도울 수 있습니다.*/
/*\* **클래스 충돌 방지**

サードパーティライブラリの様々なバージョンで、同じクラスが複数の*jar*ファイルに存在する可能性があります。 重複したクラスを識別し、優先順位を調整して衝突が発生する*jar*ファイルを明示的に除外または特定のファイルを含むなどの措置で、クラスの衝突を防止できます。*/
/*
この時、クラスが正確にどの*jar*ファイルで読み込みされていることを確認し、クラスの衝突を防止できます。 同じクラスが複数の*jar*ファイルで読み込みされるのを防止できます。
様々なバージョンのサードパーティライブラリが読み込みされるなど、同じクラスが複数の*jar*ファイルに存在する場合、クラスが正確にどのような*jar*ファイルで読み込みされていることを確認することで、クラスの衝突を防止できます。*/
/*\* **디버깅**

特定のクラスが意図しない*jar*ファイルからロードされた場合、予期しない動作やバグが発生する可能性があります。 特に、複雑なクラスパスやマルチモジュール環境では、正確にどの経路でロードされたかを確認して、容易なデバッグが可能です。*/
/*\* **성능 최적화**

クラスの読み込みが性能問題の原因になる可能性があります。 クラスがどの*jar*ファイルで過度に読み込みされるかを確認した後、よく使用されるクラスを含む*jar*ファイルが適切な位置で読み込みされるようにクラスパスを調整して、そのクラスの読み込み時間を最適化できます。*/
/*
クラスがどの*jar*ファイルで過剰に読み込みされるかを確認して、性能を最適化できます。
クラスローディング時に性能問題が発生する場合、どのような*jar*ファイルからクラスが過剰にロードされているかどうかを把握することで、性能を管理できます。*/
/*자바 애플리케이션의 다계층 구조 특성상 <Cmdname sid="resource" className="uitext" /> 정보 확인이 필요합니다.*/
/*스레드 목록을 보고 하는 중요한 행위-> 스레드 cpu 누적 시간 보여줌 -> 시계열 정보 확인 가능하다는 얘기를 추가하기*/
/*:::note

例のスレッドは`RequestQueue`で要素を読み込もうとして例外が発生して`wait`が呼び出された可能性があります。 スナップショット情報に基づいて待機状態が発生した原因を確認します。

- `RequestQueue.get`メソッドの58行目を確認し、どの条件で`wait`が呼び出されるか確認します。

- `ZipSendProxyThread.run`メソッドの54行目を確認し、どの状況で`RequestQueue.get`メソッドを呼び出されるか確認します。

:::*/


const toc = [{
  "value": "ロード済クラス",
  "id": "advanced-use-loaded-classes",
  "level": 2
}, {
  "value": "再定義",
  "id": "再定義",
  "level": 4
}, {
  "value": "リソース",
  "id": "リソース",
  "level": 4
}, {
  "value": "スレッドリスト/ダンプ",
  "id": "advanced-use-thread-list-dump",
  "level": 2
}, {
  "value": "CPU使用量の高いスレッドの確認",
  "id": "cpu使用量の高いスレッドの確認",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h4: "h4",
    img: "img",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    section: "section",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), "メニューは、アプリケーションの環境を確認し、性能を管理するのに役立つ機能を提供します。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), "でよく使用する主要メニューの詳細及び活用例を次のように案内します。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "advanced-use-loaded-classes",
        children: "ロード済クラス"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["ホーム画面 > プロジェクト選択 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_agentsConfiguration",
          className: "uitext"
        }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_loadedClasses",
          className: "uitext"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_loadedClasses",
          className: "uitext"
        }), "メニューは、アプリケーションにロードされたクラスの構造とメソッドシグネチャーなどの詳細情報を提供し、また中断なくクラス動作を変更できるように", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "redefine",
          className: "uitext"
        }), "機能を提供します。"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "再定義",
        children: "再定義"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "redefine",
          className: "uitext"
        }), "は、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Instrumentation"
        }), "の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "redefineClasses"
        }), "メソッドを呼び出し、アプリケーションを中断させることなく、ランタイム中にすでにロードされたクラスの動作を変更できるようにします。 これは、運用中のサービスに対する修正や変更が必要な場合に役立ちます。 例えば、新しいサービスパターンの指定で追加のトランザクションの開始点を設定し、応答時間を測定しようとするとき、関連するWhaTap設定の変更後、そのクラスを", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_loadedClasses",
          className: "uitext"
        }), "リストから探し", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "修正アイコン",
          src: (__webpack_require__(63582)/* ["default"] */ .A) + "",
          width: "24",
          height: "24"
        }), "アイコンをクリックして", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "redefine",
          className: "uitext"
        }), "できます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/about-instance-loaded-class1.png",
        desc: "ロード済クラス 再定義"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "リソース",
        children: "リソース"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "resource",
          className: "uitext"
        }), "カラムを通じて、そのクラスが物理的にどのファイルからロードされたかを照会できます。 Javaアプリケーションの多階層構造の特性上、このような", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "resource",
          className: "uitext"
        }), "情報の確認が必要です。 複雑なアプリケーション環境では、クラスが正確にどのような", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "jar"
        }), "ファイルからロードされているかを把握することが重要です。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["特定のクラスが意図しない", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "jar"
        }), "ファイルからロードされた場合、予期しない動作やバグが発生する可能性があります。 特に、複雑なクラスパスやマルチモジュール環境では、正確にどの経路でロードされたかを確認して、容易なデバッグが可能です。"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "advanced-use-thread-list-dump",
        children: "スレッドリスト/ダンプ"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["ホーム画面 > プロジェクト選択 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_agentsConfiguration",
          className: "uitext"
        }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_threadList",
          className: "uitext"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_threadList",
          className: "uitext"
        }), "メニューは、現在実行中のスレッドのリストを確認し、そのスレッドの個々のスナップショット及び全体のスレッドダンプ情報を照会できます。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "hitmap",
          className: "uitext"
        }), "がトランザクション応答時間中心の最適化作業の核心であれば、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_threadList",
          className: "uitext"
        }), "はCPU最適化の核心要素と言えます。これはアプリケーションの性能最適化、問題診断、そして安定性維持に重要な役割を果たします。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["どのスレッドがCPUを多く使用しているかを把握することは、ボトルネックの発生原因を識別する上で重要です。 特に、特定の時間帯にCPU使用が急増したスレッド識別のために、時系列データを照会できる必要があります。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_threadList",
          className: "uitext"
        }), "メニューの", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "thread_cpu_time",
          className: "uitext"
        }), "は、当該スレッドがCPUを占有した合計累積時間を意味します。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "更新"
          })
        }), "時、現在のスレッドCPU時間と既存のスレッドCPU時間の差である", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL08126",
          className: "uitext"
        }), "を提供することで、照会時点で最も多くCPUを使用しているスレッドを特定できます。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL08126",
          className: "uitext"
        }), "カラムをクリックし、降順でのソートで増加量が最も高いスレッドを確認してみてください。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/about-instance-thread-list-dump3.png",
        desc: "スレッドリスト/ダンプ"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "このようにスレッドを特定した後、そのスレッドのスナップショットを確認して、頻繁に呼び出されたり、長く実行されるメソッドなどを確認できます。 これにより、異常な兆候を早期に発見し、対応してシステムを安定的に管理できます。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/about-instance-thread-list-dump4.png",
        desc: "スレッドリスト/ダンプ"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "cpu使用量の高いスレッドの確認",
        children: "CPU使用量の高いスレッドの確認"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "アプリケーションCPU使用量が急増した場合は、様々な原因に起因する可能性があります。 これを、ヒープメモリがいっぱいの場合、実際のリクエストが多い場合、そしてロジックの問題の場合の3つのタイプに分類できます。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["このとき、最初に確認するのは識別しやすいヒープメモリです。 ヒープメモリがいっぱいになった場合、JVMがGCを頻繁に実行し、CPU使用量が急増する可能性があります。 この場合、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "application_dashboard",
          className: "uitext"
        }), "の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "AA010",
          className: "uitext"
        }), "グラフで簡単に確認できます。 2つ目は、実際のリクエストが多いことで、アプリケーションが多い数のクライアントリクエストを処理し、CPU使用量が高くなった場合です。 各リクエストはJavaスレッドを生成して処理されるため、CPUが多くの作業を行うことになります。 この場合、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "application_dashboard",
          className: "uitext"
        }), "でTPS関連指標を通じて確認できます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["3つ目は、アプリケーションコードに非効率的なアルゴリズムや無限ループなどが含まれている場合、CPU使用率が異常に高くなる可能性があります。 この場合、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_threadList",
          className: "uitext"
        }), "メニューを通じてCPU使用量が高いスレッドを特定した後、該当スレッドダンプを確認して問題になるコードを確認できます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "thread_cpu_time",
            className: "uitext"
          }), "確認→ ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "refresh",
            className: "uitext"
          }), " → ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "TTL08126",
            className: "uitext"
          }), "基準でリストをソート→ ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "CPU使用量の高いスレッドの識別"
          })]
        })]
      })]
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

/***/ 63582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtZWRpdDwvdGl0bGU+IC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbi1TZXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJXaGFUYXBfSWNvbl9TZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02OC4wMDAwMDAsIC0xMzk1LjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgICA8ZyBpZD0iZWRpdG9yLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDEzNTAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtZWRpdCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjguMDAwMDAwLCA0NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjAwMDAwMCwgMS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIwLDE4IEwyMCwyMCBMMCwyMCBMMCwxOCBMMjAsMTggWiBNMTIuOTM5MzM5OCwxIEwxNy45MzMyMTA4LDYuMDA2NDA3NzggTDE3LjkwMSw2LjAzOCBMMTcuOTAzNzA4NSw2LjA0IEw4LjAwNDIxMzU2LDE1LjkzOTQ5NDkgTDgsMTUuOTM1IEw4LDE1Ljk0IEwzLDE1Ljk0IEwzLDEwLjk0IEwzLjAwNSwxMC45NCBMMywxMC45MzU1MzM5IEwxMi44OTk0OTQ5LDEuMDM2MDM4OTcgTDEyLjkwMSwxLjAzOCBMMTIuOTM5MzM5OCwxIFogTTEyLjkzNSwzLjgyOCBMNSwxMS43NjMgTDUsMTMuOTQgTDcuMTc1LDEzLjk0IEwxNS4xMDgsNi4wMDYgTDEyLjkzNSwzLjgyOCBaIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

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