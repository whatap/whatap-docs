import React from 'react';
import MDXContents from '@theme-original/MDXContent';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
export default function InDoc ({children, product}) {
    const {
        i18n: {currentLocale},
    } = useDocusaurusContext();
    let prods;
    if (typeof product.split(",") !== undefined) {
        prods = product.split(",");
    } else {
        prods.push(product);
    }
    let location = useLocation();
    let myContents, cProd;
    if (currentLocale == 'ko') {
        cProd = location.pathname.split("/")[1];
    } else {
        cProd = location.pathname.split("/")[2];
    }
    let i, prod;
    
    for (i =0; i < prods.length; i ++) {
        // console.log(prods[i]);
        prod = prods[i]
        if (cProd == prod) {
            myContents = children;
            return (
                <MDXContents>
                    {myContents}
                </MDXContents>
            );
        } else {
            return null;
        }
    }
}