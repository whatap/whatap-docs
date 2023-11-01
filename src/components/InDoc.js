import React from 'react';
import MDXContents from '@theme-original/MDXContent';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function InDoc ({children, product}) {
    const { i18n: {currentLocale} } = useDocusaurusContext();
    const location = useLocation();
    
    const prods = Array.isArray(product) ? product : product.split(',');
    const cProd = currentLocale === "ko" ? location.pathname.split("/")[1] : location.pathname.split("/")[2]
    const isProduct = prods.includes(cProd);

    return isProduct ? <MDXContents>{children}</MDXContents> : null;
}