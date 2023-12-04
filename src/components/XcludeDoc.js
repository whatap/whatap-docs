import React from 'react';
import MDXContent from '@theme-original/MDXContent';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function XcludeDoc ({children, product}) {
    const { i18n: {currentLocale} } = useDocusaurusContext();
    const location = useLocation();
    
    const prods = Array.isArray(product) ? product : product.split(',');
    const cProd = currentLocale === "ko" ? location.pathname.split("/")[2] : location.pathname.split("/")[3]
    const isProduct = prods.includes(cProd);

    return isProduct ? null : <MDXContent>{children}</MDXContent>;
}