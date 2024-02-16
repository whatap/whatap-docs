"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[24279],{

/***/ 72792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocTagDocListPage)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(20053);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(89546);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(90062);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/usePluralForm.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

// We want to ensurer a stable plural form order in all cases
// It is more convenient and natural to handle "small values" first
// See https://twitter.com/sebastienlorber/status/1366820663261077510
const OrderedPluralForms = [
    'zero',
    'one',
    'two',
    'few',
    'many',
    'other'
];
function sortPluralForms(pluralForms) {
    return OrderedPluralForms.filter((pf)=>pluralForms.includes(pf));
}
// Hardcoded english/fallback implementation
const EnglishPluralForms = {
    locale: 'en',
    pluralForms: sortPluralForms([
        'one',
        'other'
    ]),
    select: (count)=>count === 1 ? 'one' : 'other'
};
function createLocalePluralForms(locale) {
    const pluralRules = new Intl.PluralRules(locale);
    return {
        locale,
        pluralForms: sortPluralForms(pluralRules.resolvedOptions().pluralCategories),
        select: (count)=>pluralRules.select(count)
    };
}
/**
 * Poor man's `PluralSelector` implementation, using an English fallback. We
 * want a lightweight, future-proof and good-enough solution. We don't want a
 * perfect and heavy solution.
 *
 * Docusaurus classic theme has only 2 deeply nested labels requiring complex
 * plural rules. We don't want to use `Intl` + `PluralRules` polyfills + full
 * ICU syntax (react-intl) just for that.
 *
 * Notes:
 * - 2021: 92+% Browsers support `Intl.PluralRules`, and support will increase
 * in the future
 * - NodeJS >= 13 has full ICU support by default
 * - In case of "mismatch" between SSR and Browser ICU support, React keeps
 * working!
 */ function useLocalePluralForms() {
    const { i18n: { currentLocale } } = (0,useDocusaurusContext/* default */.A)();
    return (0,react.useMemo)(()=>{
        try {
            return createLocalePluralForms(currentLocale);
        } catch (err) {
            console.error(`Failed to use Intl.PluralRules for locale "${currentLocale}".
Docusaurus will fallback to the default (English) implementation.
Error: ${err.message}
`);
            return EnglishPluralForms;
        }
    }, [
        currentLocale
    ]);
}
function selectPluralMessage(pluralMessages, count, localePluralForms) {
    const separator = '|';
    const parts = pluralMessages.split(separator);
    if (parts.length === 1) {
        return parts[0];
    }
    if (parts.length > localePluralForms.pluralForms.length) {
        console.error(`For locale=${localePluralForms.locale}, a maximum of ${localePluralForms.pluralForms.length} plural forms are expected (${localePluralForms.pluralForms.join(',')}), but the message contains ${parts.length}: ${pluralMessages}`);
    }
    const pluralForm = localePluralForms.select(count);
    const pluralFormIndex = localePluralForms.pluralForms.indexOf(pluralForm);
    // In case of not enough plural form messages, we take the last one (other)
    // instead of returning undefined
    return parts[Math.min(pluralFormIndex, parts.length - 1)];
}
/**
 * Reads the current locale and returns an interface very similar to
 * `Intl.PluralRules`.
 */ function usePluralForm() {
    const localePluralForm = useLocalePluralForms();
    return {
        selectMessage: (count, pluralMessages)=>selectPluralMessage(pluralMessages, count, localePluralForm)
    };
} //# sourceMappingURL=usePluralForm.js.map

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__(50118);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(23891);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(15418);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 67 modules
var Layout = __webpack_require__(98636);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/SearchMetadata/index.js
var SearchMetadata = __webpack_require__(63067);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocTagDocListPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 







// Very simple pluralization: probably good enough for now
function useNDocsTaggedPlural() {
    const { selectMessage } = usePluralForm();
    return (count)=>selectMessage(count, (0,Translate/* translate */.T)({
            id: 'theme.docs.tagDocListPageTitle.nDocsTagged',
            description: 'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
            message: 'One doc tagged|{count} docs tagged'
        }, {
            count
        }));
}
function DocItem({ doc }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
        className: "margin-vert--lg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.A, {
                to: doc.permalink,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                    children: doc.title
                })
            }),
            doc.description && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                children: doc.description
            })
        ]
    });
}
function DocTagDocListPage({ tag }) {
    const nDocsTaggedPlural = useNDocsTaggedPlural();
    const title = (0,Translate/* translate */.T)({
        id: 'theme.docs.tagDocListPageTitle',
        description: 'The title of the page for a docs tag',
        message: '{nDocsTagged} with "{tagName}"'
    }, {
        nDocsTagged: nDocsTaggedPlural(tag.count),
        tagName: tag.label
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(metadataUtils/* HtmlClassNameProvider */.e3, {
        className: (0,clsx_m/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.wrapper.docsPages, ThemeClassNames/* ThemeClassNames */.G.page.docsTagDocListPage),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(metadataUtils/* PageMetadata */.be, {
                title: title
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchMetadata/* default */.A, {
                tag: "doc_tag_doc_list"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Layout/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "container margin-vert--lg",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "row",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
                            className: "col col--8 col--offset-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
                                    className: "margin-bottom--xl",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                            children: title
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.A, {
                                            href: tag.allTagsPath,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.A, {
                                                id: "theme.tags.tagsPageLink",
                                                description: "The label of the link targeting the tag list page",
                                                children: "View All Tags"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                                    className: "margin-vert--lg",
                                    children: tag.items.map((doc)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(DocItem, {
                                            doc: doc
                                        }, doc.id))
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
}


/***/ })

}]);