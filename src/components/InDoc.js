import React from 'react';
import MDXContents from '@theme-original/MDXContent';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function InDoc ({children, product, pages}) {
    const { i18n: {currentLocale} } = useDocusaurusContext();
    const location = useLocation();
    const pathParts = location.pathname.split("/");

    if (product) {
        const prods = Array.isArray(product) ? product : product.split(',');

        // 프리뷰 여부 확인: pathParts[1] === "whatap-docs"
        const isPreview = pathParts[1] === "whatap-docs";

        let cProd;
        if (isPreview) {
            // 프리뷰 도메인인 경우
            cProd = pathParts[2];
        } else {
            // 일반 도메인
            cProd = currentLocale === "ko" ? pathParts[1] : pathParts[2];
        }

        const isProduct = prods.includes(cProd);
        return isProduct ? <MDXContents>{children}</MDXContents> : null;
    } else if (pages) {
        const Pages = Array.isArray(pages) ? pages : pages.split(',');
        const cPage = location.pathname.split("/");
        const lastPath = cPage[cPage.length - 1] !== "" ? cPage.length - 1 : cPage.length - 2;
        const isPage = Pages.includes(cPage[lastPath]);

        return isPage ? <MDXContents>{children}</MDXContents> : null;
    }
}
