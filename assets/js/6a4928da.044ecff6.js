"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[92194],{

/***/ 81098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// NAMESPACE OBJECT: ./src/components/Autocomplete/icons.js
var icons_namespaceObject = {};
__webpack_require__.r(icons_namespaceObject);
__webpack_require__.d(icons_namespaceObject, {
  API: () => (API),
  Account: () => (Account),
  Billing: () => (Billing),
  Book: () => (Book),
  Bookexpand: () => (Bookexpand),
  Docs: () => (Docs),
  FAQ: () => (FAQ),
  Home: () => (Home),
  IntegratedManage: () => (IntegratedManage),
  MXQL: () => (MXQL),
  Metrics: () => (Metrics),
  Mobile: () => (Mobile),
  Multifactor: () => (Multifactor),
  Newfunc: () => (Newfunc),
  Notes: () => (Notes),
  Project: () => (Project),
  Proxy: () => (Proxy),
  Support: () => (Support),
  Tools: () => (Tools),
  UserBehavior: () => (UserBehavior),
  WhaTaplogo: () => (WhaTaplogo)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 66 modules
var Layout = __webpack_require__(38103);
;// CONCATENATED MODULE: ./src/pages/renew/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"frontheading":"frontheading_rzmP","homehero":"homehero_IZR1","appcontainer":"appcontainer_AqcP","aa-Autocomplete":"aa-Autocomplete_fHFR","justifycontentcenter":"justifycontentcenter_eHCM","justifycardcontent":"justifycardcontent_aJwH","flexcolumn":"flexcolumn_iXJh","flexContainer":"flexContainer_lnPo","textcenter":"textcenter_kKjR","flexProd":"flexProd_iGTO","document":"document_e86O","textleft":"textleft_I9dL","product":"product_OzUz","type":"type_I67K","alignCenter":"alignCenter_Dwgg","logo":"logo_HIFU","doculogo":"doculogo_fIUg","logoDocu":"logoDocu_bWKh","desc":"desc_ehOV","title":"title_VoOx","rightarrowcontainer":"rightarrowcontainer_f7eH","rightarrow":"rightarrow_aZnU","innercontent":"innercontent_I0dQ","small":"small_UU3X","inline":"inline_kcFA","iconumber":"iconumber_wGmr"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(3248);
// EXTERNAL MODULE: ./node_modules/@meilisearch/autocomplete-client/dist/autocomplete-client.umd.js
var autocomplete_client_umd = __webpack_require__(61237);
// EXTERNAL MODULE: ./node_modules/@algolia/autocomplete-theme-classic/dist/theme.min.css
var theme_min = __webpack_require__(58160);
// EXTERNAL MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/autocomplete.js + 74 modules
var autocomplete = __webpack_require__(42960);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
;// CONCATENATED MODULE: ./src/components/Autocomplete/Autocomplete.js
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}




function Autocomplete(props) {
    const containerRef = (0,react.useRef)(null);
    const panelRootRef = (0,react.useRef)(null);
    const rootRef = (0,react.useRef)(null);
    (0,react.useEffect)(()=>{
        if (!containerRef.current) {
            return undefined;
        }
        const search = (0,autocomplete/* autocomplete */.n)(_objectSpread({
            container: containerRef.current,
            renderer: {
                createElement: react.createElement,
                Fragment: react.Fragment,
                render: ()=>{}
            },
            render ({ children  }, root) {
                if (!panelRootRef.current || rootRef.current !== root) {
                    var ref;
                    rootRef.current = root;
                    (ref = panelRootRef.current) === null || ref === void 0 ? void 0 : ref.unmount();
                    panelRootRef.current = (0,client.createRoot)(root);
                }
                panelRootRef.current.render(children);
            }
        }, props));
        return ()=>{
            search.destroy();
        };
    }, [
        props
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ref: containerRef,
        className: "searchbox"
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(28618);
;// CONCATENATED MODULE: ./src/components/Autocomplete/ProductItem.js




function ProductItem({ hit , components  }) {
    const docsURL = "https://docs.whatap.io";
    const titles = [
        hit.hierarchy_radio_lvl0,
        hit.hierarchy_radio_lvl1,
        hit.hierarchy_radio_lvl2,
        hit.hierarchy_radio_lvl3,
        hit.hierarchy_radio_lvl4,
        hit.hierarchy_radio_lvl5
    ];
    const title = titles.filter((element, i)=>element !== null);
    const durl = hit.url.replace(docsURL, "").replace("#__docusaurus_skipToContent_fallback", "");
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "aa-ItemContent",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "aa-ItemTitle",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.A, {
                        to: durl,
                        target: "_blank",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                children: title[0]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "hit-breadcrums",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "hit-name lvl0",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(components.Highlight, {
                                            attribute: "hierarchy_lvl0",
                                            hit: hit
                                        })
                                    }),
                                    hit.hierarchy_lvl1 && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "hit-name",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(components.Highlight, {
                                            attribute: "hierarchy_lvl1",
                                            hit: hit
                                        })
                                    }),
                                    hit.hierarchy_lvl2 && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "hit-name",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(components.Highlight, {
                                            attribute: "hierarchy_lvl2",
                                            hit: hit
                                        })
                                    }),
                                    hit.hierarchy_lvl3 && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "hit-name",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(components.Highlight, {
                                            attribute: "hierarchy_lvl3",
                                            hit: hit
                                        })
                                    }),
                                    hit.hierarchy_lvl4 && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "hit-name",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(components.Highlight, {
                                            attribute: "hierarchy_lvl4",
                                            hit: hit
                                        })
                                    }),
                                    hit.hierarchy_lvl5 && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "hit-name last",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(components.Highlight, {
                                            attribute: "hierarchy_lvl5",
                                            hit: hit
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    hit.content && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "content",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(components.Snippet, {
                            attribute: "content",
                            hit: hit
                        })
                    })
                ]
            }, hit.id)
        })
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(90062);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(61917);
;// CONCATENATED MODULE: ./src/components/Autocomplete/icons.js


function Bookexpand() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "27",
        viewBox: "0 0 32 27",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M16.3977 5.67045C16.3977 4.46492 16.8766 3.30877 17.729 2.45633C18.5815 1.60389 19.7376 1.125 20.9432 1.125H30.0341C30.3355 1.125 30.6245 1.24472 30.8376 1.45783C31.0507 1.67094 31.1704 1.95998 31.1704 2.26136V20.4432C31.1704 20.7446 31.0507 21.0336 30.8376 21.2467C30.6245 21.4598 30.3355 21.5795 30.0341 21.5795H20.9432C19.7376 21.5795 18.5815 22.0584 17.729 22.9109C16.8766 23.7633 16.3977 24.9195 16.3977 26.125",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M1.625 20.4432C1.625 20.7446 1.74472 21.0336 1.95783 21.2467C2.17094 21.4598 2.45998 21.5795 2.76136 21.5795H11.8523C13.0578 21.5795 14.214 22.0584 15.0664 22.9109C15.9188 23.7633 16.3977 24.9195 16.3977 26.125V5.67045C16.3977 4.46492 15.9188 3.30877 15.0664 2.45633C14.214 1.60389 13.0578 1.125 11.8523 1.125H2.76136C2.45998 1.125 2.17094 1.24472 1.95783 1.45783C1.74472 1.67094 1.625 1.95998 1.625 2.26136V20.4432Z",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            })
        ]
    });
}
function Metrics() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "29",
        height: "25",
        viewBox: "0 0 29 25",
        fill: "none",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M28.5398 14.2699C28.5398 18.5223 26.6798 22.3402 23.7289 24.9545L21.8853 23.1199C23.7448 21.5184 25.094 19.3409 25.6559 16.8644H22.7021V14.2699H25.9452C25.9452 11.8462 25.2067 9.59493 23.9424 7.72896L21.6081 10.0633L19.7735 8.22869L22.2525 5.7497C20.4612 4.07076 18.1402 2.95021 15.5672 2.66578V6.48631H12.9726V2.66578C10.3995 2.95022 8.07847 4.07083 6.28715 5.74986L8.76597 8.22868L6.93137 10.0633L4.59724 7.72916C3.33301 9.59509 2.59452 11.8462 2.59452 14.2699H5.83768V16.8644H2.88384C3.45055 19.3619 4.81793 21.5554 6.70185 23.1606L4.86244 25C1.88171 22.3846 0 18.547 0 14.2699C0 6.38885 6.38885 0 14.2699 0C22.1509 0 28.5398 6.38885 28.5398 14.2699ZM19.4639 10.8283C19.8476 11.212 19.8476 11.8241 19.4639 12.2078L16.7765 14.8952C16.8339 15.1095 16.8644 15.3347 16.8644 15.5672C16.8644 17.0001 15.7028 18.1617 14.2699 18.1617C12.837 18.1617 11.6754 17.0001 11.6754 15.5672C11.6754 14.1342 12.837 12.9726 14.2699 12.9726C14.5023 12.9726 14.7276 13.0032 14.942 13.0605L17.5946 10.4079C17.9918 10.0107 18.6463 10.0107 19.0435 10.4079L19.4639 10.8283Z",
            fill: "currentColor"
        })
    });
}
function MXQL() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "75",
        height: "25",
        viewBox: "0 0 75 25",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M63.1497 20.2514V0.307312H65.6636V18.0168H74.3787V20.2514H63.1497Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M58.7289 10.2514C58.7289 11.8715 58.5054 13.3426 58.0585 14.6648C57.6302 15.987 56.9877 17.1043 56.1311 18.0168C55.2745 18.9292 54.2037 19.5996 52.9188 20.0279L57.6953 25H54.092L50.2372 20.5028C50.1255 20.5028 50.0045 20.5028 49.8741 20.5028C49.7624 20.5214 49.6507 20.5307 49.5389 20.5307C47.9747 20.5307 46.6153 20.2886 45.4607 19.8045C44.3061 19.3017 43.3471 18.6034 42.5836 17.7095C41.8201 16.797 41.2521 15.7076 40.8797 14.4413C40.5073 13.175 40.321 11.7691 40.321 10.2235C40.321 8.17505 40.6562 6.38734 41.3266 4.86034C41.997 3.33333 43.0119 2.14153 44.3713 1.28492C45.7493 0.428305 47.4812 0 49.5669 0C51.5594 0 53.2354 0.428305 54.5948 1.28492C55.9542 2.12291 56.9784 3.31471 57.6674 4.86034C58.375 6.38734 58.7289 8.18436 58.7289 10.2514ZM42.9747 10.2514C42.9747 11.9274 43.2075 13.3706 43.673 14.581C44.1386 15.7914 44.8555 16.7225 45.8238 17.3743C46.8108 18.0261 48.0492 18.352 49.5389 18.352C51.0473 18.352 52.2764 18.0261 53.2261 17.3743C54.1944 16.7225 54.9114 15.7914 55.3769 14.581C55.8425 13.3706 56.0752 11.9274 56.0752 10.2514C56.0752 7.73743 55.5538 5.77281 54.511 4.35754C53.4682 2.92365 51.8201 2.2067 49.5669 2.2067C48.0585 2.2067 46.8108 2.53259 45.8238 3.18436C44.8555 3.81751 44.1386 4.73929 43.673 5.94972C43.2075 7.14153 42.9747 8.57542 42.9747 10.2514Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M39.0532 20.2514H36.204L30.9247 11.5922L25.5616 20.2514H22.908L29.5281 9.86039L23.327 0.307312H26.1202L31.0085 8.12854L35.9247 0.307312H38.5784L32.4052 9.80452L39.0532 20.2514Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M8.96295 20.2514L2.3987 2.76541H2.28697C2.32421 3.13785 2.35214 3.61271 2.37077 4.18999C2.40801 4.76728 2.43594 5.40042 2.45457 6.08944C2.47319 6.75983 2.4825 7.44884 2.4825 8.15648V20.2514H0.164062V0.307312H3.87915L10.0244 16.6481H10.1361L16.3931 0.307312H20.0803V20.2514H17.5942V7.98888C17.5942 7.33711 17.6035 6.69465 17.6222 6.0615C17.6408 5.40973 17.6687 4.80452 17.706 4.24586C17.7432 3.66858 17.7711 3.18441 17.7898 2.79335H17.678L11.03 20.2514H8.96295Z",
                fill: "currentColor"
            })
        ]
    });
}
function FAQ() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "25",
        height: "25",
        viewBox: "0 0 25 25",
        fill: "none",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M0 12.5C0 5.59625 5.5975 0 12.5 0C19.4025 0 25 5.59625 25 12.5C25 15.1163 24.1938 17.5425 22.82 19.55L25 25L19.55 22.82C17.5425 24.1938 15.1163 25 12.5 25C5.5975 25 0 19.4037 0 12.5ZM12.5 22.5C14.8544 22.5 17.0188 21.6863 18.7273 20.3249L21.3137 21.1982L20.4096 18.6195C21.72 16.9282 22.5 14.8052 22.5 12.5C22.5 6.97715 18.0228 2.5 12.5 2.5C6.97715 2.5 2.5 6.97715 2.5 12.5C2.5 18.0228 6.97715 22.5 12.5 22.5ZM17.287 11.8848C17.287 13.0078 17.1093 13.9803 16.7539 14.8022C16.4108 15.596 15.9905 16.0157 15.5333 16.4723L15.4844 16.5212L17.54 18.0697L15.9605 19.5508L13.4377 17.557C13.1068 17.6275 12.7514 17.6628 12.3716 17.6628C11.4168 17.6628 10.5636 17.4281 9.81221 16.9588C9.0608 16.4895 8.48029 15.8209 8.07068 14.9528C7.66106 14.0847 7.45355 13.0838 7.44812 11.9499V11.2826C7.44812 10.1269 7.65293 9.10699 8.06254 8.22266C8.47216 7.33832 9.04995 6.66152 9.79594 6.19222C10.5419 5.72293 11.3951 5.48828 12.3553 5.48828C13.3319 5.48828 14.1932 5.72021 14.9392 6.18408C15.6852 6.64795 16.2616 7.31526 16.6685 8.18604C17.0754 9.05681 17.2816 10.07 17.287 11.2256V11.8848ZM14.6668 11.4014V11.9184C14.6668 13.034 14.4663 13.8821 14.0652 14.4626C13.6642 15.0431 13.0891 15.3334 12.3402 15.3334C11.6001 15.3334 11.025 15.0318 10.6151 14.4286C10.2052 13.8254 10.0002 12.9887 10.0002 11.9184V11.3402C10.009 10.2789 10.2184 9.45695 10.6284 8.87418C11.0383 8.29141 11.6045 8.00003 12.3269 8.00003C13.0714 8.00003 13.6475 8.28801 14.0553 8.86398C14.463 9.43994 14.6668 10.2857 14.6668 11.4014Z",
            fill: "currentColor"
        })
    });
}
function Book() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "31",
        height: "25",
        viewBox: "0 0 31 25",
        fill: "none",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M27.7778 0H2.77778C1.25 0 0 1.32353 0 2.94118V22.0588C0 23.6765 1.25 25 2.77778 25H27.7778C29.3056 25 30.5556 23.6765 30.5556 22.0588V2.94118C30.5556 1.32353 29.3056 0 27.7778 0ZM2.77778 22.2222V2.77778H13.8889V22.2222H2.77778ZM27.7778 22.2222H16.6667V2.77778H27.7778V22.2222ZM4.16667 6.94444H12.5V9.02778H4.16667V6.94444ZM18.0556 6.94444H26.3889V9.02778H18.0556V6.94444ZM4.16667 11.3889H12.5V13.4722H4.16667V11.3889ZM18.0556 11.3889H26.3889V13.4722H18.0556V11.3889ZM4.16667 15.8334H12.5V17.9167H4.16667V15.8334ZM18.0556 15.8334H26.3889V17.9167H18.0556V15.8334Z",
            fill: "currentColor"
        })
    });
}
function Docs() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "23",
        height: "25",
        viewBox: "0 0 23 25",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M20 7.5H2.5V20C2.5 21.3807 3.61929 22.5 5 22.5H20V7.5ZM0 5V20C0 22.7614 2.23858 25 5 25H22.5V5H0Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M0 7.5V3.75L2.5 7.5H0Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M12.5 10H10V12.5H12.5V10Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M12.5 13.75H10V20H12.5V13.75Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M3.375 2.5H22.5V0H3.375C1.51104 0 0 1.67893 0 3.75C0 5.82107 1.51104 7.5 3.375 7.5H22.5V5H3.375C2.75368 5 2.25 4.44036 2.25 3.75C2.25 3.05964 2.75368 2.5 3.375 2.5Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M21.25 2.5H20.875C20.2537 2.5 19.75 3.05964 19.75 3.75C19.75 4.44036 20.2537 5 20.875 5H21.25V7.5H20.875C19.011 7.5 17.5 5.82107 17.5 3.75C17.5 1.67893 19.011 0 20.875 0H21.25V2.5Z",
                fill: "currentColor"
            })
        ]
    });
}
function Proxy() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "26",
        height: "25",
        viewBox: "0 0 26 25",
        fill: "none",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M1.99362 0.900345C1.38982 0.900345 0.900345 1.38982 0.900345 1.99362V6.75001C0.900345 7.35381 1.38982 7.84329 1.99362 7.84329H23.418C24.0218 7.84329 24.5112 7.35381 24.5112 6.75001V1.99362C24.5112 1.38982 24.0218 0.900345 23.418 0.900345H1.99362ZM0 1.99362C0 0.892575 0.892574 0 1.99362 0H23.418C24.519 0 25.4116 0.892575 25.4116 1.99362V6.75001C25.4116 7.41618 25.0848 8.00604 24.5829 8.36806C25.0848 8.73009 25.4116 9.31994 25.4116 9.98611V14.7425C25.4116 15.8435 24.519 16.7361 23.418 16.7361H13.1566V19.4773C14.3311 19.6686 15.2584 20.5959 15.4497 21.7703H20.8378C21.0865 21.7703 21.288 21.9719 21.288 22.2205C21.288 22.4691 21.0865 22.6707 20.8378 22.6707H15.4497C15.2345 23.9917 14.0882 25 12.7064 25C11.3246 25 10.1783 23.9917 9.96321 22.6707H4.57504C4.32641 22.6707 4.12486 22.4691 4.12486 22.2205C4.12486 21.9719 4.32641 21.7703 4.57504 21.7703H9.96321C10.1545 20.5959 11.0818 19.6686 12.2563 19.4773V16.7361H1.99362C0.892574 16.7361 0 15.8435 0 14.7425V9.98611C0 9.31994 0.32674 8.73009 0.828703 8.36806C0.32674 8.00604 0 7.41618 0 6.75001V1.99362ZM23.418 15.8358C24.0218 15.8358 24.5112 15.3463 24.5112 14.7425V9.98611C24.5112 9.38231 24.0218 8.89283 23.418 8.89283H1.99362C1.38982 8.89283 0.900345 9.38231 0.900345 9.98611V14.7425C0.900345 15.3463 1.38982 15.8358 1.99362 15.8358H23.418ZM3.69013 3.93708C3.45003 3.93708 3.25539 4.13172 3.25539 4.37182C3.25539 4.61192 3.45003 4.80655 3.69013 4.80655C3.93023 4.80655 4.12486 4.61192 4.12486 4.37182C4.12486 4.13172 3.93023 3.93708 3.69013 3.93708ZM2.35504 4.37182C2.35504 3.63447 2.95278 3.03673 3.69013 3.03673C4.42747 3.03673 5.02521 3.63447 5.02521 4.37182C5.02521 5.10916 4.42747 5.7069 3.69013 5.7069C2.95278 5.7069 2.35504 5.10916 2.35504 4.37182ZM7.26578 3.93708C7.02568 3.93708 6.83104 4.13172 6.83104 4.37182C6.83104 4.61192 7.02568 4.80655 7.26578 4.80655C7.50588 4.80655 7.70052 4.61192 7.70052 4.37182C7.70052 4.13172 7.50588 3.93708 7.26578 3.93708ZM5.9307 4.37182C5.9307 3.63447 6.52844 3.03673 7.26578 3.03673C8.00313 3.03673 8.60086 3.63447 8.60086 4.37182C8.60086 5.10916 8.00313 5.7069 7.26578 5.7069C6.52844 5.7069 5.9307 5.10916 5.9307 4.37182ZM16.1458 4.37182C16.1458 4.12319 16.3473 3.92164 16.5959 3.92164H21.5131C21.7617 3.92164 21.9633 4.12319 21.9633 4.37182C21.9633 4.62044 21.7617 4.82199 21.5131 4.82199H16.5959C16.3473 4.82199 16.1458 4.62044 16.1458 4.37182ZM3.69013 11.9296C3.45003 11.9296 3.25539 12.1242 3.25539 12.3643C3.25539 12.6044 3.45003 12.799 3.69013 12.799C3.93023 12.799 4.12486 12.6044 4.12486 12.3643C4.12486 12.1242 3.93023 11.9296 3.69013 11.9296ZM2.35504 12.3643C2.35504 11.627 2.95278 11.0292 3.69013 11.0292C4.42747 11.0292 5.02521 11.627 5.02521 12.3643C5.02521 13.1017 4.42747 13.6994 3.69013 13.6994C2.95278 13.6994 2.35504 13.1017 2.35504 12.3643ZM7.26578 11.9296C7.02568 11.9296 6.83104 12.1242 6.83104 12.3643C6.83104 12.6044 7.02568 12.799 7.26578 12.799C7.50588 12.799 7.70052 12.6044 7.70052 12.3643C7.70052 12.1242 7.50588 11.9296 7.26578 11.9296ZM5.9307 12.3643C5.9307 11.627 6.52844 11.0292 7.26578 11.0292C8.00313 11.0292 8.60086 11.627 8.60086 12.3643C8.60086 13.1017 8.00313 13.6994 7.26578 13.6994C6.52844 13.6994 5.9307 13.1017 5.9307 12.3643ZM16.1458 12.3643C16.1458 12.1157 16.3473 11.9141 16.5959 11.9141H21.5131C21.7617 11.9141 21.9633 12.1157 21.9633 12.3643C21.9633 12.6129 21.7617 12.8145 21.5131 12.8145H16.5959C16.3473 12.8145 16.1458 12.6129 16.1458 12.3643ZM12.7064 20.3414C11.6686 20.3414 10.8273 21.1827 10.8273 22.2205C10.8273 23.2583 11.6686 24.0997 12.7064 24.0997C13.7443 24.0997 14.5856 23.2583 14.5856 22.2205C14.5856 21.1827 13.7443 20.3414 12.7064 20.3414Z",
            fill: "currentColor"
        })
    });
}
function API() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "54",
        height: "26",
        viewBox: "0 0 54 26",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M53.7705 25.396H44.7747V23.5829L47.7035 22.9204V3.01107L44.7747 2.31372V0.50061H53.7705V2.31372L50.8416 3.01107V22.9204L53.7705 23.5829V25.396Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M32.2411 0.50061C35.4954 0.50061 37.8664 1.13985 39.354 2.41832C40.8417 3.6968 41.5856 5.49828 41.5856 7.82278C41.5856 8.84556 41.4112 9.83347 41.0625 10.7865C40.7371 11.7163 40.1909 12.5531 39.4238 13.297C38.6567 14.0408 37.6339 14.6336 36.3554 15.0752C35.077 15.4936 33.5079 15.7028 31.6483 15.7028H28.7892V25.396H25.6511V0.50061H32.2411ZM31.9621 3.18541H28.7892V13.018H31.2997C32.8803 13.018 34.1937 12.8553 35.2397 12.5299C36.2857 12.1812 37.0644 11.635 37.5758 10.8911C38.0872 10.1473 38.3429 9.17099 38.3429 7.96225C38.3429 6.35835 37.8315 5.16123 36.8087 4.3709C35.7859 3.58057 34.1704 3.18541 31.9621 3.18541Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M19.0028 25.396L16.0042 17.6903H6.13667L3.17294 25.396H0L9.72802 0.395996H12.5523L22.2454 25.396H19.0028ZM12.2733 7.36949C12.2036 7.18353 12.0874 6.84648 11.9247 6.35833C11.762 5.87019 11.5992 5.37042 11.4365 4.85903C11.2971 4.32439 11.1808 3.91761 11.0879 3.63867C10.9716 4.10357 10.8438 4.58009 10.7043 5.06823C10.5881 5.53313 10.4602 5.96317 10.3208 6.35833C10.2045 6.7535 10.0999 7.09055 10.007 7.36949L7.1827 14.9009H15.0627L12.2733 7.36949Z",
                fill: "currentColor"
            })
        ]
    });
}
function UserBehavior() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "27",
        height: "26",
        viewBox: "0 0 27 26",
        fill: "none",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M10.094 3.10533C11.0414 2.76305 12.0351 2.56454 13.0401 2.51823L12.9249 0.0185547C11.8192 0.0695038 10.7308 0.267343 9.6879 0.600722L9.24378 0.751864L10.094 3.10533ZM8.26111 3.98564C7.40305 4.51035 6.62877 5.16075 5.96521 5.91755L4.0837 4.26782L4.40416 3.91617C5.16605 3.11163 6.02574 2.41947 6.95568 1.85082L8.26111 3.98564ZM3.7118 10.3817C3.84225 9.78912 4.02749 9.20564 4.26732 8.63614C4.43169 8.24884 4.60551 7.89662 4.80015 7.55466L2.62545 6.3168C2.38623 6.73706 2.16882 7.17559 1.97527 7.63156C1.72828 8.21343 1.52872 8.80354 1.37484 9.39758L1.26798 9.84378L3.7118 10.3817ZM3.48125 12.3491C3.46447 13.355 3.60076 14.3581 3.88351 15.3243L1.48188 16.0271L1.35875 15.5752C1.09102 14.5152 0.960771 13.4166 0.979267 12.3074L3.48125 12.3491ZM6.4382 19.6259C5.7246 18.9169 5.12269 18.1032 4.65136 17.2138L2.44029 18.3854C2.95166 19.3504 3.59006 20.2513 4.34424 21.0601L4.67452 21.401L6.4382 19.6259ZM10.7535 22.1489C10.3639 22.0374 9.97922 21.9018 9.60075 21.7421C9.02925 21.4995 8.50241 21.2189 8.00502 20.894L6.63656 22.9889C7.24941 23.3893 7.90606 23.7412 8.60351 24.0372C8.92509 24.1737 9.24918 24.2957 9.57507 24.4035L10.0651 24.5547L10.7535 22.1489ZM23.9115 5.54149L26.0284 4.28721L20.4772 2.76069L18.9898 8.45776L21.654 6.87915C22.7389 8.48281 23.3731 10.4203 23.3731 12.507C23.3731 18.0349 18.9221 22.5163 13.4316 22.5163C13.2502 22.5163 13.07 22.5114 12.891 22.5017V25.0032C13.0982 25.0134 13.3068 25.0186 13.5165 25.0186C20.4265 25.0186 26.0282 19.4169 26.0282 12.507C26.0282 9.92863 25.2483 7.53247 23.9115 5.54149ZM14.4985 6.25122H12.1894V13.7184L18.491 17.5117L19.6455 15.6748L14.4985 12.5983V6.25122Z",
            fill: "currentColor"
        })
    });
}
function Tools() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "25",
        height: "25",
        viewBox: "0 0 25 25",
        fill: "none",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M14.8801 10.4509C15.9393 7.71945 15.3508 4.51299 13.1149 2.25659C10.7613 -0.11857 7.23081 -0.593601 4.40644 0.712736L9.46676 5.81933L5.93631 9.38206L0.758309 4.27547C-0.653872 7.12566 -0.065463 10.6884 2.28817 13.0636C4.52413 15.32 7.70153 15.9137 10.4082 14.8449L20.1885 24.6437C20.6593 25.1188 21.3653 25.1188 21.8361 24.6437L24.5428 21.9123C25.1312 21.4373 25.1312 20.606 24.6604 20.2497L14.8801 10.4509Z",
            fill: "currentColor"
        })
    });
}
function IntegratedManage() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "28",
        height: "25",
        viewBox: "0 0 28 25",
        fill: "none",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M27.7778 11.1111V0H18.0556V4.16667H9.72222V0H0V11.1111H9.72222V6.94444H12.5V20.8333H18.0556V25H27.7778V13.8889H18.0556V18.0556H15.2778V6.94444H18.0556V11.1111H27.7778ZM6.94438 8.33334H2.77771V2.77779H6.94438V8.33334ZM20.8333 16.6667H24.9999V22.2222H20.8333V16.6667ZM20.8333 2.77779H24.9999V8.33334H20.8333V2.77779Z",
            fill: "currentColor"
        })
    });
}
function Project() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "23",
        height: "25",
        viewBox: "0 0 23 25",
        fill: "none",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M12.5 25H22.5V16.25H18.75V11.25H16.25H12.5V8.75H16.25V0H6.25V8.75H10V11.25H3.75V16.25H0V25H10V16.25H6.25V13.75H16.25V16.25H12.5V25ZM10 6.25H12.5H13.75V2.5H8.75V6.25H10ZM7.5 18.75V22.5H2.5V18.75H7.5ZM20 18.75V22.5H15V18.75H20Z",
            fill: "currentColor"
        })
    });
}
function Billing() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "22",
        height: "25",
        viewBox: "0 0 22 25",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M8.20484 0.875917C7.74348 0.875917 7.36896 1.25043 7.36896 1.71179V13.2313C7.36896 13.4732 7.17288 13.6693 6.931 13.6693C6.68913 13.6693 6.49305 13.4732 6.49305 13.2313V1.71179C6.49305 0.766678 7.25972 0 8.20484 0H19.3465C20.2916 0 21.0583 0.766678 21.0583 1.71179V19.8082C21.0583 20.7533 20.2916 21.52 19.3465 21.52H8.20359C7.25847 21.52 6.49179 20.7533 6.49179 19.8082V17.6497C6.49179 17.4078 6.68788 17.2118 6.92975 17.2118C7.17163 17.2118 7.36771 17.4078 7.36771 17.6497V19.8082C7.36771 20.2696 7.74223 20.6441 8.20359 20.6441H19.3465C19.8079 20.6441 20.1824 20.2696 20.1824 19.8082V1.71179C20.1824 1.25043 19.8079 0.875917 19.3465 0.875917H8.20484Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M16.8852 0C17.1271 0 17.3231 0.196081 17.3231 0.437958V21.0808C17.3231 21.3227 17.1271 21.5188 16.8852 21.5188C16.6433 21.5188 16.4472 21.3227 16.4472 21.0808V0.437958C16.4472 0.196081 16.6433 0 16.8852 0Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M14.4414 2.46383C14.6832 2.46383 14.8793 2.65991 14.8793 2.90179V6.90348C14.8793 7.14535 14.6832 7.34143 14.4414 7.34143C14.1995 7.34143 14.0034 7.14535 14.0034 6.90348V2.90179C14.0034 2.65991 14.1995 2.46383 14.4414 2.46383Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M7.15731 5.13648C7.32809 5.30777 7.32768 5.58507 7.15639 5.75585L2.13741 10.7598C2.1374 10.7598 2.13742 10.7598 2.13741 10.7598C1.33008 11.5649 0.875917 12.6584 0.875917 13.7982V24.562C0.875917 24.8038 0.679836 24.9999 0.437958 24.9999C0.196081 24.9999 0 24.8038 0 24.562V13.7982C0 12.4254 0.546906 11.1088 1.51892 10.1396L6.53795 5.13555C6.70924 4.96478 6.98654 4.96519 7.15731 5.13648Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M10.5167 11.8805C10.0708 11.4347 9.34704 11.4347 8.90118 11.8805L4.56539 16.2163C4.39435 16.3874 4.11705 16.3874 3.94602 16.2163C3.77499 16.0453 3.77499 15.768 3.94602 15.597L8.28181 11.2612C9.06974 10.4732 10.3481 10.4732 11.136 11.2612C11.9239 12.0491 11.9239 13.3275 11.136 14.1154L7.29199 17.9594C7.12096 18.1304 6.84366 18.1304 6.67262 17.9594C6.50159 17.7884 6.50159 17.5111 6.67262 17.34L10.5167 13.496C10.9625 13.0502 10.9625 12.3264 10.5167 11.8805Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M7.01545 10.0249C7.18649 10.1959 7.18649 10.4732 7.01545 10.6443L5.98889 11.6708C5.6699 11.9888 5.49075 12.4214 5.49075 12.8722V14.7392C5.49075 14.9811 5.29467 15.1771 5.05279 15.1771C4.81091 15.1771 4.61483 14.9811 4.61483 14.7392V12.8722C4.61483 12.1895 4.88606 11.5335 5.37024 11.0507C5.37033 11.0506 5.37041 11.0506 5.3705 11.0505L6.39609 10.0249C6.56712 9.85385 6.84442 9.85385 7.01545 10.0249Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M11.5027 20.6976C11.7143 20.8148 11.7909 21.0813 11.6737 21.2929L9.74672 24.7741C9.62958 24.9857 9.36306 25.0623 9.15145 24.9451C8.93983 24.828 8.86324 24.5615 8.98038 24.3499L10.9074 20.8687C11.0245 20.6571 11.2911 20.5805 11.5027 20.6976Z",
                fill: "currentColor"
            })
        ]
    });
}
function Multifactor() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "37",
        height: "25",
        viewBox: "0 0 37 25",
        fill: "none",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M10.9375 0C13.9635 0 16.388 2.44271 16.388 5.46875C16.388 8.49479 13.9635 10.9375 10.9375 10.9375C7.91146 10.9375 5.46875 8.49479 5.46875 5.46875C5.46875 2.44271 7.91146 0 10.9375 0ZM0 25V20.4427C0 16.1953 6.6901 14.0625 10.9375 14.0625C15.1849 14.0625 21.875 16.1953 21.875 20.4427V25H0ZM25.1687 13.5971L34.375 3.90625L36.3506 5.94235L25.1687 17.4479L18.75 10.742L20.7256 8.70586L25.1687 13.5971Z",
            fill: "currentColor"
        })
    });
}
function Account() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "22",
        height: "25",
        viewBox: "0 0 22 25",
        fill: "none",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M16.388 5.46875C16.388 2.44271 13.9635 0 10.9375 0C7.91146 0 5.46875 2.44271 5.46875 5.46875C5.46875 8.49479 7.91146 10.9375 10.9375 10.9375C13.9635 10.9375 16.388 8.49479 16.388 5.46875ZM0 20.4427V25H21.875V20.4427C21.875 16.1953 15.1849 14.0625 10.9375 14.0625C6.6901 14.0625 0 16.1953 0 20.4427Z",
            fill: "currentColor"
        })
    });
}
function Notes() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "26",
        viewBox: "0 0 20 26",
        fill: "none",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M13.523 0.94704H0.98714V24.213H18.2979V5.48517H13.9566C13.7171 5.48517 13.523 5.29108 13.523 5.05166V0.94704ZM19.1649 5.05473V24.6465C19.1649 24.8859 18.9708 25.08 18.7314 25.08H0.553629C0.314207 25.08 0.120117 24.8859 0.120117 24.6465V0.513529C0.120117 0.274107 0.314207 0.0800171 0.553629 0.0800171H13.9462C13.953 0.0798542 13.9599 0.0798545 13.9668 0.0800171H13.9727C14.0841 0.0800171 14.1912 0.122915 14.2719 0.199808L18.997 4.70603L19.03 4.73744C19.0974 4.80143 19.1407 4.88352 19.1573 4.97086C19.1605 4.98774 19.1627 5.00482 19.1639 5.022C19.1646 5.03288 19.165 5.0438 19.1649 5.05473ZM14.3901 4.61815V1.52353L17.646 4.61815H14.3901ZM3.13238 4.60949C3.13238 4.37006 3.32647 4.17597 3.56589 4.17597H10.8402C11.0796 4.17597 11.2737 4.37006 11.2737 4.60949C11.2737 4.84891 11.0796 5.043 10.8402 5.043H3.56589C3.32647 5.043 3.13238 4.84891 3.13238 4.60949ZM3.56589 7.36414C3.32647 7.36414 3.13238 7.55823 3.13238 7.79765C3.13238 8.03707 3.32647 8.23116 3.56589 8.23116H15.7191C15.9585 8.23116 16.1526 8.03707 16.1526 7.79765C16.1526 7.55823 15.9585 7.36414 15.7191 7.36414H3.56589ZM3.13238 10.9858C3.13238 10.7464 3.32647 10.5523 3.56589 10.5523H15.7191C15.9585 10.5523 16.1526 10.7464 16.1526 10.9858C16.1526 11.2252 15.9585 11.4193 15.7191 11.4193H3.56589C3.32647 11.4193 3.13238 11.2252 3.13238 10.9858ZM3.56589 13.7405C3.32647 13.7405 3.13238 13.9346 3.13238 14.174C3.13238 14.4134 3.32647 14.6075 3.56589 14.6075H15.7191C15.9585 14.6075 16.1526 14.4134 16.1526 14.174C16.1526 13.9346 15.9585 13.7405 15.7191 13.7405H3.56589ZM3.13238 17.3622C3.13238 17.1227 3.32647 16.9286 3.56589 16.9286H15.7191C15.9585 16.9286 16.1526 17.1227 16.1526 17.3622C16.1526 17.6016 15.9585 17.7957 15.7191 17.7957H3.56589C3.32647 17.7957 3.13238 17.6016 3.13238 17.3622ZM3.56589 20.1168C3.32647 20.1168 3.13238 20.3109 3.13238 20.5503C3.13238 20.7897 3.32647 20.9838 3.56589 20.9838H15.7191C15.9585 20.9838 16.1526 20.7897 16.1526 20.5503C16.1526 20.3109 15.9585 20.1168 15.7191 20.1168H3.56589Z",
            fill: "currentColor"
        })
    });
}
function Newfunc() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "25",
        height: "25",
        viewBox: "0 0 25 25",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                cx: "12.5",
                cy: "12.5",
                r: "12.5",
                fill: "#FFC700"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M17.3078 6.73077V18.2692H15.3847L9.61546 9.61539V18.2692H7.69238L7.69238 6.73077H9.61546L15.3931 14.4231V6.73077H17.3078Z",
                fill: "#343434"
            })
        ]
    });
}
function Mobile() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "19",
        height: "25",
        viewBox: "0 0 19 25",
        fill: "none",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M18.125 25V0H0V25H18.125ZM14.7266 3.4091H3.39844V18.1818H14.7266V3.4091ZM15.8594 2.27272H2.26562V22.7273H15.8594V2.27272ZM8.92969 19.3182C8.3774 19.3182 7.92969 19.7659 7.92969 20.3182V20.5909C7.92969 21.1432 8.3774 21.5909 8.92969 21.5909H9.19531C9.7476 21.5909 10.1953 21.1432 10.1953 20.5909V20.3182C10.1953 19.7659 9.7476 19.3182 9.19531 19.3182H8.92969Z",
            fill: "currentColor"
        })
    });
}
function Home() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "29",
        height: "25",
        viewBox: "0 0 29 25",
        fill: "none",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M12.3639 0.631477C13.3326 -0.210492 14.7924 -0.210492 15.7611 0.631477L27.2667 10.6315C28.0601 11.3211 28.3352 12.4183 27.958 13.3885C27.5807 14.3586 26.6296 15 25.5681 15H24.2897V22.5C24.2897 23.8807 23.145 25 21.7329 25H15.3408V23.0112H15.3406V17.8976H12.784V23.0112H12.784V25H6.39211C4.98003 25 3.83531 23.8807 3.83531 22.5V15H2.55691C1.49538 15 0.544262 14.3586 0.167014 13.3885C-0.210234 12.4183 0.0648657 11.3211 0.858264 10.6315L12.3639 0.631477ZM10.2272 22.5V15.3408H11.5055L15.3406 15.3408H17.8974H17.8975V17.8976H17.8974V22.5H21.7329V12.5H25.5681L14.0625 2.5L2.55691 12.5H6.39211V22.5H10.2272Z",
            fill: "currentColor"
        })
    });
}
function Support() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "25",
        height: "26",
        viewBox: "0 0 25 26",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M6.027 10.1422H4.30943C4.09337 10.1422 3.91821 10.3173 3.91821 10.5334V14.2133C3.91821 14.4294 4.09337 14.6045 4.30943 14.6045H6.027C6.24306 14.6045 6.41821 14.4294 6.41821 14.2133V10.5334C6.41821 10.3173 6.24306 10.1422 6.027 10.1422Z",
                fill: "currentColor",
                "fill-opacity": "0.913725"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M9.81533 6.40164H8.09776C7.8817 6.40164 7.70654 6.5768 7.70654 6.79286V14.2146C7.70654 14.4307 7.8817 14.6058 8.09776 14.6058H9.81533C10.0314 14.6058 10.2065 14.4307 10.2065 14.2146V6.79286C10.2065 6.5768 10.0314 6.40164 9.81533 6.40164Z",
                fill: "currentColor",
                "fill-opacity": "0.913725"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M13.6039 0.634338H11.8863C11.6703 0.634338 11.4951 0.809492 11.4951 1.02555V14.2146C11.4951 14.4307 11.6703 14.6058 11.8863 14.6058H13.6039C13.82 14.6058 13.9951 14.4307 13.9951 14.2146V1.02555C13.9951 0.809492 13.82 0.634338 13.6039 0.634338Z",
                fill: "currentColor",
                "fill-opacity": "0.913725"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M14.7661 15.6457L15.1485 16.3322C15.2356 16.4887 15.3971 16.577 15.5637 16.577C15.6419 16.577 15.7215 16.5581 15.7946 16.5165L16.3663 16.1985C16.6288 16.4344 16.938 16.6162 17.28 16.7348V17.3898C17.28 17.6523 17.4933 17.8655 17.7558 17.8655H18.542C18.8045 17.8655 19.0178 17.6523 19.0178 17.3898V16.7348C19.3181 16.6313 19.5907 16.4773 19.8318 16.2805L20.3896 16.6263C20.4678 16.6742 20.5536 16.6982 20.6394 16.6982C20.7984 16.6982 20.9537 16.6187 21.0433 16.4736L21.4585 15.806C21.5973 15.5826 21.5279 15.2898 21.3058 15.151L20.7555 14.809C20.7997 14.6172 20.8275 14.419 20.8275 14.2133C20.8275 14.0531 20.8073 13.8966 20.7808 13.7439L21.3487 13.4284C21.5783 13.3009 21.6604 13.0107 21.5329 12.7822L21.1505 12.0957C21.0635 11.9392 20.9019 11.8509 20.7341 11.8509C20.6558 11.8509 20.5763 11.8698 20.5031 11.9115L19.9314 12.2295C19.669 11.9935 19.3598 11.8118 19.0178 11.6932V11.0382C19.0178 10.7757 18.8045 10.5624 18.542 10.5624H17.7558C17.4933 10.5624 17.28 10.7757 17.28 11.0382V11.6932C16.9797 11.7966 16.7071 11.9506 16.466 12.1475L16.3651 12.0844L15.9082 11.8004C15.83 11.7525 15.7429 11.7285 15.6584 11.7285C15.6281 11.7285 15.5978 11.7323 15.5675 11.7386C15.4426 11.7626 15.3277 11.837 15.2545 11.9531L14.8393 12.6207C14.7005 12.8441 14.7699 13.1369 14.992 13.2757L15.5423 13.6177C15.4981 13.8095 15.4703 14.0076 15.4703 14.2133C15.4703 14.3736 15.4905 14.5301 15.517 14.6828L14.9491 14.9983C14.7194 15.1258 14.6374 15.416 14.7649 15.6444L14.7661 15.6457ZM18.1483 13.0687C18.7805 13.0687 19.2929 13.5811 19.2929 14.2133C19.2929 14.8456 18.7805 15.358 18.1483 15.358C17.516 15.358 17.0036 14.8456 17.0036 14.2133C17.0036 13.5811 17.516 13.0687 18.1483 13.0687Z",
                fill: "currentColor",
                "fill-opacity": "0.913725"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M16.2489 11.2515L16.4445 11.3726C16.5064 11.3347 16.5695 11.2994 16.6338 11.2666V11.0356C16.6338 10.4173 17.1373 9.915 17.7545 9.915H17.7822V3.10153H19.5503C19.7661 3.10153 19.9415 2.92611 19.9415 2.71031V1.02555C19.9415 0.809755 19.7661 0.634338 19.5503 0.634338H15.6734C15.4576 0.634338 15.2822 0.809755 15.2822 1.02555V11.148C15.4009 11.1063 15.5271 11.0823 15.657 11.0823C15.8653 11.0823 16.0697 11.1404 16.2476 11.2515H16.2489Z",
                fill: "currentColor",
                "fill-opacity": "0.913725"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M23.9307 20.469C23.6871 20.469 23.489 20.6672 23.489 20.9107V24.751H1.73105V20.9107C1.73105 20.6672 1.53292 20.469 1.28935 20.469C1.04579 20.469 0.847656 20.6672 0.847656 20.9107V25.1926C0.847656 25.4362 1.04579 25.6343 1.28935 25.6343H23.9307C24.1743 25.6343 24.3724 25.4362 24.3724 25.1926V20.9107C24.3724 20.6672 24.1743 20.469 23.9307 20.469Z",
                fill: "currentColor",
                "fill-opacity": "0.913725"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M9.82303 20.1964C9.65014 20.3693 9.65014 20.6482 9.82303 20.8211L12.2978 23.2959C12.3836 23.3817 12.4972 23.4258 12.6095 23.4258C12.7218 23.4258 12.8354 23.3829 12.9212 23.2959L15.396 20.8211C15.5689 20.6482 15.5689 20.3693 15.396 20.1964C15.2231 20.0235 14.9442 20.0235 14.7713 20.1964L13.0499 21.9178V16.7424C13.0499 16.4988 12.8518 16.3007 12.6082 16.3007C12.3647 16.3007 12.1665 16.4988 12.1665 16.7424V21.9178L10.4452 20.1964C10.2723 20.0235 9.9934 20.0235 9.8205 20.1964H9.82303Z",
                fill: "currentColor",
                "fill-opacity": "0.913725"
            })
        ]
    });
}
function WhaTaplogo() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "31",
        height: "25",
        viewBox: "0 0 31 25",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M17.241 0H13.7949V24.9946H17.241V0Z",
                fill: "#80BA01"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M10.3435 8.6205H6.89746V24.9946H10.3435V8.6205Z",
                fill: "#FFB902"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M3.44604 17.241H0V25H3.44604V17.241Z",
                fill: "#F25022"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M30.1693 0H20.6873V24.9946H24.1387V3.44603H30.1693V0Z",
                fill: "#19A0E5"
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(92469);
;// CONCATENATED MODULE: ./src/pages/renew/index.js















const searchClient = (0,autocomplete_client_umd.meilisearchAutocompleteClient)({
    url: 'https://meilsearch.whatap.io',
    apiKey: 'dgoMBc2t6fVzILDGqhh63uBXACGOmJbKNnE_Xv8_Hqk'
});
function App() {
    const { i18n: { currentLocale  }  } = (0,useDocusaurusContext/* default */.A)();
    const lang = currentLocale;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: styles_module.appcontainer,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Autocomplete, {
            openOnFocus: false,
            getSources: ({ query  })=>[
                    {
                        sourceId: 'products',
                        getItems () {
                            const description = (0,autocomplete_client_umd.getMeilisearchResults)({
                                searchClient: searchClient,
                                queries: [
                                    {
                                        indexName: 'whatap',
                                        query,
                                        params: {
                                            hitsPerPage: 10,
                                            attributesToSnippet: [
                                                'description:10'
                                            ],
                                            snippetEllipsisText: '...',
                                            filters: [
                                                `lang=${lang} AND hierarchy_lvl0!=Documentation`
                                            ]
                                        }
                                    }
                                ]
                            });
                            return description;
                        },
                        templates: {
                            item ({ item , components  }) {
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(ProductItem, {
                                    hit: item,
                                    components: components
                                });
                            }
                        }
                    }, 
                ],
            onSubmit: (event)=>{
                // Code to run when the form submits
                const Searchparam = event.state.query;
                if (Searchparam) {
                    const searchUrl = `/search?whatap%5Bquery%5D=${encodeURIComponent(Searchparam)}`;
                    window.location.href = searchUrl;
                }
            }
        })
    });
}
function Step({ children , order  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (0,clsx/* default */.A)('guide-col d-flex', styles_module.flexcolumn),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: styles_module.innercontent,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    src: (0,useBaseUrl/* default */.Ay)(`/img/number-0${order}.png`),
                    className: styles_module.iconumber
                }),
                children
            ]
        })
    });
}
function RightArrow() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: styles_module.rightarrowcontainer,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
            className: styles_module.rightarrow,
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M0,0 L100,50 L0,100"
            })
        })
    });
}
function Description({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
        className: (0,clsx/* default */.A)(styles_module.textleft, styles_module.small),
        children: children
    });
}
function ThereeSteps() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: (0,clsx/* default */.A)('row', styles_module.guide, styles_module.justifycontentcenter),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Step, {
                order: 1,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.A, {
                        to: "quick-guide/#account",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                            as: "h5",
                            className: styles_module.inline,
                            children: "\uD68C\uC6D0 \uAC00\uC785"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                        children: "\uC640\uD0ED \uBAA8\uB2C8\uD130\uB9C1 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB824\uBA74 \uD68C\uC6D0 \uAC00\uC785\uC744 \uC9C4\uD589\uD558\uC138\uC694. 15\uC77C\uAC04 \uBB34\uB8CC \uCCB4\uD5D8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(RightArrow, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Step, {
                order: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.A, {
                        to: "quick-guide/#cproject",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                            as: "h5",
                            className: styles_module.inline,
                            children: "\uD504\uB85C\uC81D\uD2B8 \uC0DD\uC131 \uBC0F \uC5D0\uC774\uC804\uD2B8 \uC124\uCE58"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                        children: "\uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD558\uACE0 \uC561\uC138\uC2A4 \uD0A4\uB97C \uBC1C\uAE09 \uBC1B\uC740 \uD6C4 \uBAA8\uB2C8\uD130\uB9C1 \uB300\uC0C1\uC5D0 \uC5D0\uC774\uC804\uD2B8\uB97C \uC124\uCE58\uD558\uC138\uC694."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(RightArrow, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Step, {
                order: 3,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.A, {
                        to: "quick-guide/#dashboard",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                            as: "h5",
                            className: styles_module.inline,
                            children: "\uB300\uC2DC\uBCF4\uB4DC \uC870\uD68C\uD558\uAE30"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                        children: "\uC5D0\uC774\uC804\uD2B8 \uC124\uCE58 \uD6C4 \uB370\uC774\uD130\uAC00 \uC640\uD0ED \uC11C\uBC84\uB85C \uC804\uB2EC\uB418\uBA74 \uB300\uC2DC\uBCF4\uB4DC \uBA54\uB274\uC5D0\uC11C \uD504\uB85C\uC81D\uD2B8\uC758 \uC804\uCCB4 \uD604\uD669\uC744 \uC2E4\uC2DC\uAC04\uC73C\uB85C \uC870\uD68C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                    })
                ]
            })
        ]
    });
}
function FlexCard({ icons , product , type , url , children  }) {
    if (type === 'document') {
        const IconComponent = icons_namespaceObject[icons];
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: styles_module.flexProd,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.A, {
                to: url,
                className: styles_module.alignCenter,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: styles_module.document,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: styles_module.logoDocu,
                            children: IconComponent ? /*#__PURE__*/ (0,jsx_runtime.jsx)(IconComponent, {
                                className: styles_module.doculogo
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: (0,useBaseUrl/* default */.Ay)(`/img/${icons}`),
                                className: styles_module.doculogo
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: styles_module.title,
                            children: children
                        })
                    ]
                })
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: styles_module.flexProd,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.A, {
            to: url,
            className: styles_module.alignCenter,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: styles_module.product,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: styles_module.logo,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            src: (0,useBaseUrl/* default */.Ay)(`/img/${icons}`)
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: styles_module.desc,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: styles_module.title,
                                children: product
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: styles_module.type,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
                                    className: (0,clsx/* default */.A)(`${type}`, 'tag'),
                                    children: type
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                children: children
                            })
                        ]
                    })
                ]
            })
        })
    });
}
function pages() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Head/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                    name: "robots",
                    content: "noindex, nofollow"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: styles_module.homehero,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                        className: styles_module.frontheading,
                        children: "Welcome to the WhaTab Docs page"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(App, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ThereeSteps, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: (0,clsx/* default */.A)('row nav-tiles', styles_module.justifycardcontent),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                        as: "h2",
                        className: styles_module.textcenter,
                        children: "\uC2DC\uC791\uD558\uAE30 \uC804\uC5D0"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: styles_module.flexContainer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "WhaTaplogo",
                                type: "document",
                                url: "whatap-overview",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: "\uC640\uD0ED \uBAA8\uB2C8\uD130\uB9C1 \uC11C\uBE44\uC2A4"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: "\uB2E4\uC591\uD55C \uD50C\uB7AB\uD3FC\uC744 \uC544\uC6B0\uB974\uB294 \uD1B5\uD569 \uBAA8\uB2C8\uD130\uB9C1"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Support",
                                type: "document",
                                url: "support-env",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: "\uC9C0\uC6D0 \uD658\uACBD"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: "\uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uAE30 \uC804\uC5D0 \uC9C0\uC6D0 \uD658\uACBD\uC744 \uD655\uC778\uD558\uC138\uC694."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Home",
                                type: "document",
                                url: "main-ui-intro-v2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: "\uD648 \uD654\uBA74 \uC548\uB0B4"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: "\uC11C\uBE44\uC2A4 \uCD08\uAE30 \uD654\uBA74 \uC0AC\uC6A9 \uBC29\uBC95\uC744 \uC548\uB0B4\uD569\uB2C8\uB2E4."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Mobile",
                                type: "document",
                                url: "mobile-app",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: "\uBAA8\uBC14\uC77C \uC571"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: "\uBAA8\uBC14\uC77C \uC571 \uC0AC\uC6A9 \uBC29\uBC95\uC744 \uC548\uB0B4\uD569\uB2C8\uB2E4."
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: (0,clsx/* default */.A)('row nav-tiles', styles_module.justifycardcontent),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                        as: "h2",
                        className: styles_module.textcenter,
                        children: "\uC0C1\uD488"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: styles_module.flexContainer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-java-l.svg",
                                product: "Java",
                                type: "Application",
                                url: "java/introduction",
                                children: "WAS, \uBC30\uCE58 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uB4F1 JVM \uD658\uACBD\uC5D0\uC11C \uB3D9\uC791\uD558\uB294 \uBAA8\uB4E0 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC801\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-nodejs-l.svg",
                                product: "Node.js",
                                type: "Application",
                                url: "nodejs/introduction",
                                children: "\uBE44\uB3D9\uAE30 \uAE30\uBC18 \uD2B8\uB79C\uC7AD\uC158 \uBD84\uC11D\uC744 \uD1B5\uD574 \uB2E8\uC77C \uC2A4\uB808\uB4DC \uD50C\uB85C\uC6B0\uB97C 10\uCD08\uB9C8\uB2E4 \uBD84\uC11D\uD574 \uBCD1\uBAA9\uAD6C\uAC04\uC774\uB098 \uC5D0\uB7EC \uB0B4\uC5ED\uC744 \uD30C\uC545\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-php-l.svg",
                                product: "PHP",
                                type: "Application",
                                url: "php/introduction",
                                children: "PHP 8.3, Alpine Linux\uAE4C\uC9C0 \uC801\uC6A9 \uAC00\uB2A5\uD558\uBA70, \uD2B8\uB808\uC774\uC2A4 \uC0C1\uC5D0\uC11C SQL, HTTP \uD638\uCD9C, Redis \uD638\uCD9C \uC815\uBCF4\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-python-l.svg",
                                product: "Python",
                                type: "Application",
                                url: "python/introduction",
                                children: "\uC6F9 \uD504\uB808\uC784\uC6CC\uD06C, \uC11C\uBC84, \uBC30\uCE58 \uB4F1 \uC8FC\uC694 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC801\uC6A9 \uAC00\uB2A5\uD558\uBA70, DB \uCFFC\uB9AC, \uC678\uBD80 \uD638\uCD9C\uC744 \uCD94\uC801\uD574 \uC9C0\uC5F0 \uAD6C\uAC04\uC744 \uC2DD\uBCC4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-dotnet-l.svg",
                                product: ".NET",
                                type: "Application",
                                url: "dotnet/introduction",
                                children: ".NET \uD504\uB808\uC784\uC6CC\uD06C 4.5\uB97C \uB300\uC751\uD574 .NET \uAE30\uBC18\uC758 IIS, Console, \uC11C\uBE44\uC2A4, \uC708\uB3C4\uC6B0 \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8\uC744 \uBAA8\uB2C8\uD130\uB9C1\uD569\uB2C8\uB2E4."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-go-l.svg",
                                product: "Go",
                                type: "Application",
                                url: "golang/introduction",
                                children: "Go API\uB97C \uC774\uC6A9\uD574 Go \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC6F9 \uC694\uCCAD \uBC0F \uC751\uB2F5 \uD2B8\uB79C\uC7AD\uC158, \uC77C\uBC18 \uB2E8\uC704 \uD2B8\uB79C\uC7AD\uC158, SQL, HTTP \uD638\uCD9C \uB4F1\uC744 \uCD94\uC801\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-server-l.svg",
                                product: "Server",
                                type: "Server",
                                url: "server/introduction",
                                children: "\uBB3C\uB9AC \uC11C\uBC84 \uBC0F \uD074\uB77C\uC6B0\uB4DC, \uC2A4\uCF00\uC77C \uC544\uC6C3 \uD658\uACBD\uC5D0\uB3C4 \uC801\uC6A9 \uAC00\uB2A5\uD558\uBA70, \uB300\uADDC\uBAA8 \uC790\uC6D0 \uBC0F \uC0AC\uC6A9\uB960\uC774 \uB192\uC740 \uC704\uD5D8 \uC790\uC6D0\uC758 \uBAA8\uB2C8\uD130\uB9C1, \uC778\uBCA4\uD1A0\uB9AC \uAD00\uB9AC\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-kubernetes-l.svg",
                                product: "Kubernetes",
                                type: "Container",
                                url: "kubernetes/introduction",
                                children: "\uCFE0\uBC84\uB124\uD2F0\uC2A4 \uD074\uB7EC\uC2A4\uD130, \uB178\uB4DC, \uC560\uD50C\uB9AC\uCF00\uC774\uC158, \uB85C\uADF8\uB97C \uD55C\uBC88\uC5D0 \uD55C\uB208\uC5D0 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-postgresql-l.svg",
                                product: "PostgreSQL",
                                type: "Database",
                                url: "postgresql/monitoring-intro",
                                children: "\uC131\uB2A5\uC9C0\uD45C \uBC0F SQL, Lock, Slow SQL\uC744 \uBAA8\uB2C8\uD130\uB9C1\uD558\uACE0 \uCD94\uC774 \uBD84\uC11D \uBC0F \uBE44\uAD50\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-oracle-l.svg",
                                product: "Oracle",
                                type: "Database",
                                url: "oracle/monitoring-intro",
                                children: "\uC131\uB2A5 \uC9C0\uD45C \uBC0F SQL, Lock, \uBCD1\uB82C \uCFFC\uB9AC \uC815\uBCF4\uB97C \uBAA8\uB2C8\uD130\uB9C1\uD558\uACE0 \uCD94\uC774 \uBD84\uC11D \uBC0F \uBE44\uAD50\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-oracle-l.svg",
                                product: "Oracle Pro",
                                type: "Database",
                                url: "oracle-pro/monitoring-intro",
                                children: "\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC11C\uBC84\uC758 \uBA54\uBAA8\uB9AC\uC5D0 \uC9C1\uC811 \uC811\uADFC\uD558\uC5EC \uBD80\uD558\uC5C6\uC774 \uC131\uB2A5\uC815\uBCF4\uB97C 1\uCD08\uC5D0 \uC218\uC2ED\uBC88\uAE4C\uC9C0 \uBAA8\uB2C8\uD130\uB9C1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-mysql-l.svg",
                                product: "MySQL",
                                type: "Database",
                                url: "mysql/monitoring-intro",
                                children: "MySQL, MariaDB\uC758 \uC131\uB2A5 \uC9C0\uD45C \uBC0F SQL, Lock, Slow SQL\uC744 \uBAA8\uB2C8\uD130\uB9C1\uD558\uACE0 \uCD94\uC774 \uBD84\uC11D \uBC0F \uBE44\uAD50\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-mssql-l.svg",
                                product: "SQL Server",
                                type: "Database",
                                url: "mssql/monitoring-intro",
                                children: "\uC131\uB2A5 \uC9C0\uD45C \uBC0F SQL, Lock \uC815\uBCF4\uB97C \uBAA8\uB2C8\uD130\uB9C1\uD558\uACE0 \uCD94\uC774 \uBD84\uC11D \uBC0F \uBE44\uAD50\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-tibero-l.svg",
                                product: "Tibero",
                                type: "Database",
                                url: "tibero/monitoring-intro",
                                children: "\uC131\uB2A5 \uC9C0\uD45C \uBC0F SQL, Lock, \uBCD1\uB82C \uCFFC\uB9AC \uC815\uBCF4\uB97C \uBAA8\uB2C8\uD130\uB9C1\uD558\uACE0 \uCD94\uC774 \uBD84\uC11D \uBC0F \uBE44\uAD50\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-cubrid-l.svg",
                                product: "CUBRID",
                                type: "Database",
                                url: "cubrid/monitoring-intro",
                                children: "\uC131\uB2A5 \uC9C0\uD45C \uBC0F SQL, Lock, \uBCD1\uB82C \uCFFC\uB9AC \uC815\uBCF4\uB97C \uBAA8\uB2C8\uD130\uB9C1\uD558\uACE0 \uCD94\uC774 \uBD84\uC11D \uBC0F \uBE44\uAD50\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-altibase-l.svg",
                                product: "Altibase",
                                type: "Database",
                                url: "altibase/monitoring-intro",
                                children: "\uC131\uB2A5 \uC9C0\uD45C \uBC0F SQL, Lock, \uBCD1\uB82C \uCFFC\uB9AC \uC815\uBCF4\uB97C \uBAA8\uB2C8\uD130\uB9C1\uD558\uACE0 \uCD94\uC774 \uBD84\uC11D \uBC0F \uBE44\uAD50\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-redis-l.svg",
                                product: "Redis",
                                type: "Database",
                                url: "redis/monitoring-intro",
                                children: "\uC131\uB2A5 \uC9C0\uD45C \uBAA8\uB2C8\uD130\uB9C1\uACFC \uCD94\uC774 \uBD84\uC11D \uBC0F \uBE44\uAD50\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-mongodb-l.svg",
                                product: "Mongodb",
                                type: "Database",
                                url: "mongodb/monitoring-intro",
                                children: "\uC131\uB2A5 \uC9C0\uD45C \uBAA8\uB2C8\uD130\uB9C1\uACFC \uCD94\uC774 \uBD84\uC11D \uBC0F \uBE44\uAD50\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-url-l.svg",
                                product: "URL",
                                type: "URL",
                                url: "url/url-intro",
                                children: "\uC6B4\uC601 \uC911\uC778 \uC0AC\uC774\uD2B8\uC758 \uCD5C\uC885 \uC0AC\uC6A9\uC790 \uC785\uC7A5\uC5D0\uC11C HTTP \uC0C1\uD0DC \uCF54\uB4DC\uB85C \uC811\uC18D \uBB38\uC81C\uB97C \uC790\uB3D9\uC73C\uB85C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-rum-l.svg",
                                product: "Browser",
                                type: "Browser",
                                url: "browser",
                                children: "\uBE0C\uB77C\uC6B0\uC800 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC811\uC18D\uD55C \uCD5C\uC885 \uC0AC\uC6A9\uC790\uC758 \uC0C1\uD638 \uC791\uC6A9\uC5D0 \uAD00\uD55C \uC131\uB2A5\uC744 \uBAA8\uB2C8\uD130\uB9C1\uD558\uACE0 \uBD84\uC11D\uD569\uB2C8\uB2E4."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-aws-l.svg",
                                product: "Amazon CloudWatch",
                                type: "Cloud",
                                url: "amazon-cloudwatch/install-agent",
                                children: "Amazon CloudWatch API\uB97C \uD1B5\uD574 \uC8FC\uAE30\uC801\uC73C\uB85C \uBA54\uD2B8\uB9AD\uC744 \uAC80\uC0C9\uD558\uACE0 \uC800\uC7A5\uD569\uB2C8\uB2E4."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-aws-ecs-l.svg",
                                product: "Amazon ECS",
                                type: "Cloud",
                                url: "amazon-ecs/introduction",
                                children: "META API \uBC0F cgroup \uB514\uB809\uD1A0\uB9AC\uB97C \uD1B5\uD574 \uB3C4\uCEE4 \uCEE8\uD14C\uC774\uB108\uBCC4 \uC790\uC6D0 \uC0AC\uC6A9\uB7C9\uC744 \uC2E4\uC2DC\uAC04\uC73C\uB85C \uC218\uC9D1\uD569\uB2C8\uB2E4."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-aws-log-l.svg",
                                product: "AWS Log",
                                type: "Cloud",
                                url: "aws-log/introduction",
                                children: "AWS Resource\uC5D0\uC11C \uC0DD\uC131\uB418\uC5B4 AWS S3, AWS CloudWatch Log Group\uC5D0 \uC800\uC7A5\uB418\uB294 \uB85C\uADF8\uB4E4\uC744 \uC218\uC9D1, \uC800\uC7A5\uD569\uB2C8\uB2E4."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-azure-l.svg",
                                product: "Azure Monitor",
                                type: "Cloud",
                                url: "azure/install-agent",
                                children: "Azure Monitor API\uB97C \uD1B5\uD574 \uC8FC\uAE30\uC801\uC73C\uB85C \uBA54\uD2B8\uB9AD\uC744 \uAC80\uC0C9\uD558\uACE0 \uC800\uC7A5\uD569\uB2C8\uB2E4."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-naver-l.svg",
                                product: "Naver Cloud Monitoring",
                                type: "Cloud",
                                url: "ncloud/install-agent",
                                children: "Naver Cloud Monitoring API\uB97C \uD1B5\uD574 \uC8FC\uAE30\uC801\uC73C\uB85C \uBA54\uD2B8\uB9AD\uC744 \uAC80\uC0C9\uD558\uACE0 \uC800\uC7A5\uD569\uB2C8\uB2E4."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-oracle-l.svg",
                                product: "Oracle Cloud Monitor",
                                type: "Cloud",
                                url: "oracle-cloud/install-agent",
                                children: "Oracle Cloud Monitor API\uB97C \uD1B5\uD574 \uC8FC\uAE30\uC801\uC73C\uB85C \uBA54\uD2B8\uB9AD\uC744 \uAC80\uC0C9\uD558\uACE0 \uC800\uC7A5\uD569\uB2C8\uB2E4."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-npm-l.svg",
                                product: "Network Performance Monitoring",
                                type: "Network",
                                url: "npm/introduction",
                                children: "\uD504\uB85C\uC138\uC2A4\uC758 \uB124\uD2B8\uC6CC\uD06C \uD1B5\uC2E0 \uC815\uBCF4\uB97C \uAC00\uC2DC\uD654\uD558\uC5EC \uC131\uB2A5 \uBD84\uC11D \uBC0F \uC7A5\uC560 \uD30C\uC545\uC5D0 \uC0AC\uC6A9\uD569\uB2C8\uB2E4."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-feature-l.svg",
                                product: "Feature Project",
                                type: "Features",
                                url: "features/introduction",
                                status: "beta",
                                children: "\uAE30\uC874 \uBAA8\uB2C8\uD130\uB9C1 \uC81C\uD488\uC744 \uC0AC\uC6A9\uC790\uAC00 \uBAA8\uB2C8\uD130\uB9C1\uD558\uACE0\uC790 \uD558\uB294 \uC18C\uD504\uD2B8\uC6E8\uC5B4\uC5D0 \uB9DE\uAC8C \uC7AC\uD3EC\uC7A5\uD574 \uCD5C\uC801\uD654\uB41C \uBAA8\uB2C8\uD130\uB9C1 \uC194\uB8E8\uC158\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: (0,clsx/* default */.A)('row nav-tiles', styles_module.justifycardcontent),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                        as: "h2",
                        className: styles_module.textcenter,
                        children: "\uAD00\uB9AC"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: styles_module.flexContainer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Account",
                                type: "document",
                                url: "account/account-manage",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: "\uACC4\uC815 \uAD00\uB9AC"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: "\uD68C\uC6D0 \uAC00\uC785\uC744 \uD1B5\uD574 \uACC4\uC815\uC744 \uC0DD\uC131\uD558\uACE0 \uAD00\uB9AC\uD558\uC138\uC694."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Multifactor",
                                type: "document",
                                url: "account/mfa",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: "\uBA40\uD2F0\uD329\uD130 \uC778\uC99D"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: "\uBA40\uD2F0\uD329\uD130 \uC778\uC99D\uC744 \uD1B5\uD574 \uBCF4\uC548\uC744 \uAC15\uD654\uD558\uC138\uC694."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Multifactor",
                                type: "document",
                                url: "account/sso",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: "SSO \uACC4\uC815 \uC5F0\uB3D9"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: "\uD558\uB098\uC758 \uC544\uC774\uB514\uC640 \uBE44\uBC00\uBC88\uD638\uB97C \uC774\uC6A9\uD574 \uAC04\uD3B8\uD558\uAC8C \uB85C\uADF8\uC778\uD558\uC138\uC694."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Billing",
                                type: "document",
                                url: "management/billing",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: "\uACB0\uC81C"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: "\uD2B8\uB77C\uC774\uC5BC\uB85C \uBB34\uB8CC\uB85C \uC2DC\uC791\uD558\uACE0 \uD544\uC694\uD55C \uB9CC\uD07C \uC774\uC6A9\uD558\uC138\uC694."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Project",
                                type: "document",
                                url: "project/project-manage",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: "\uD504\uB85C\uC81D\uD2B8 \uAD00\uB9AC"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: "\uD504\uB85C\uC81D\uD2B8\uB294 \uBAA8\uB2C8\uD130\uB9C1 \uB2E8\uC704\uC785\uB2C8\uB2E4. \uD504\uB85C\uC81D\uD2B8\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uC138\uC694."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "IntegratedManage",
                                type: "document",
                                url: "project/integrated-manage",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: "\uD1B5\uD569 \uAD00\uB9AC"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: "\uC870\uC9C1\uACFC \uADF8\uB8F9, \uD504\uB85C\uC81D\uD2B8\uB97C \uCCB4\uACC4\uC801\uC73C\uB85C \uAD00\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Tools",
                                type: "document",
                                url: "management/maintenance",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: "\uC815\uBE44 \uACC4\uD68D"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: "\uB4F1\uB85D\uD55C \uC791\uC5C5 \uC2DC\uAC04\uC5D0 \uC54C\uB9BC\uC744 \uC77C\uC2DC \uC911\uC9C0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "UserBehavior",
                                type: "document",
                                url: "management/userbehavior",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: "\uC0AC\uC6A9\uC790 \uD589\uC704"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: "\uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC218\uD589 \uC911\uC778 \uC0AC\uC6A9\uC790\uC758 \uD589\uB3D9\uC744 \uCD94\uC801\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: (0,clsx/* default */.A)('row nav-tiles', styles_module.justifycardcontent),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                        as: "h2",
                        className: styles_module.textcenter,
                        children: "\uCD5C\uC2E0 \uC5C5\uB370\uC774\uD2B8"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: styles_module.flexContainer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Newfunc",
                                type: "document",
                                url: "blog",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: "\uC0C8\uB85C\uC6B4 \uAE30\uB2A5"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: "\uC0C8\uB86D\uAC8C \uCD9C\uC2DC\uB41C \uAE30\uB2A5\uC744 \uD655\uC778\uD574\uBCF4\uC138\uC694."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Notes",
                                type: "document",
                                url: "release-notes",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: "\uB9B4\uB9AC\uC2A4 \uB178\uD2B8"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: "\uCD5C\uC2E0 \uB9B4\uB9AC\uC2A4 \uC815\uBCF4\uB97C \uBE60\uB974\uAC8C \uD655\uC778\uD558\uC138\uC694."
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: (0,clsx/* default */.A)('row nav-tiles', styles_module.justifycardcontent),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                        as: "h2",
                        className: styles_module.textcenter,
                        children: "\uCC38\uC870"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: styles_module.flexContainer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "API",
                                type: "document",
                                url: "openapi-spec",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: "Open API"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: "Open API\uB97C \uD1B5\uD574 \uBAA8\uB2C8\uD130\uB9C1 \uB370\uC774\uD130\uB97C \uCD94\uCD9C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Proxy",
                                type: "document",
                                url: "software-proxy",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: "\uC18C\uD504\uD2B8\uC6E8\uC5B4 \uD504\uB85D\uC2DC"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: "\uC678\uBD80\uB9DD \uC811\uADFC\uC744 \uCC28\uB2E8\uD558\uACE0 \uB2E8\uC77C \uCC44\uB110\uB85C \uC640\uD0ED\uC5D0 \uB370\uC774\uD130\uB97C \uC804\uC1A1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Docs",
                                type: "document",
                                url: "welcome-to-whatapdocs",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: "\uAE30\uC220 \uBB38\uC11C \uC548\uB0B4"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: "WhaTap Docs \uD398\uC774\uC9C0 \uD65C\uC6A9\uBC95\uC744 \uC548\uB0B4\uD569\uB2C8\uB2E4."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Book",
                                type: "document",
                                url: "license/licenses",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: "\uB77C\uC774\uC120\uC2A4"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: "\uC624\uD508 \uC18C\uC2A4 \uB77C\uC774\uC120\uC2A4\uC640 \uC0AC\uC6A9\uD558\uB294 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC548\uB0B4\uD569\uB2C8\uB2E4."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "FAQ",
                                type: "document",
                                url: "faq",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: "FAQ"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: "\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38\uC744 \uD655\uC778\uD558\uACE0 \uBB38\uC81C\uB97C \uD574\uACB0\uD558\uC138\uC694."
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: (0,clsx/* default */.A)('row nav-tiles', styles_module.justifycardcontent),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                        as: "h2",
                        className: styles_module.textcenter,
                        children: "\uD559\uC2B5\uD558\uAE30"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: styles_module.flexContainer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Bookexpand",
                                type: "document",
                                url: "learning-guides",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: "\uD559\uC2B5\uD558\uAE30"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: "\uBE60\uB978 \uC774\uD574\uC640 \uD6A8\uC728\uC801\uC778 \uC774\uC6A9\uC744 \uC704\uD574 \uD559\uC2B5 \uC790\uB8CC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "MXQL",
                                type: "document",
                                url: "mxql/mxql-overview",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: "MXQL"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: "MXQL\uC740 \uBA54\uD2B8\uB9AD\uC2A4\uB97C \uC720\uC5F0\uD55C\uAC8C \uC870\uD68C\uD558\uAE30 \uC704\uD55C \uCFFC\uB9AC \uC5B8\uC5B4\uC785\uB2C8\uB2E4."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Metrics",
                                type: "document",
                                url: "metrics/common-metrics-intro",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: "\uBA54\uD2B8\uB9AD\uC2A4"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: "\uBA54\uD2B8\uB9AD\uC2A4\uB294 \uBAA8\uB2C8\uD130\uB9C1 \uB300\uC0C1\uC73C\uB85C\uBD80\uD130 \uC218\uC9D1\uD55C \uB370\uC774\uD130\uC785\uB2C8\uB2E4."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Book",
                                type: "document",
                                url: "glossary",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: "\uC6A9\uC5B4 \uC0AC\uC804"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: "\uBAA8\uB2C8\uD130\uB9C1 \uC11C\uBE44\uC2A4\uB97C \uB354\uC6B1 \uD3B8\uB9AC\uD558\uAC8C \uC774\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uC6A9\uC5B4 \uC0AC\uC804\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4."
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ })

}]);