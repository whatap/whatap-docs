import React from 'react';
import MDXContent from '@theme-original/MDXContent';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
export default function XcludeDoc ({children, product}) {
    const {
        i18n: {currentLocale},
    } = useDocusaurusContext();
    let prodsx;
    if (typeof product.split(",") !== undefined) {
        prodsx = product.split(",");
    } else {
        prodsx.push(product);
    }
    let locationx = useLocation();
    let myContent, cProdx;
    if (currentLocale == 'ko') {
        cProdx = locationx.pathname.split("/")[1];
    } else {
        cProdx = locationx.pathname.split("/")[2];
    }
    let s, prodx;
    
    for (s =0; s < prodsx.length; s ++) {
        // console.log(prods[i]);
        prodx = prodsx[s]
        if (cProdx == prodx) {
            // console.log("product!!!");
            myContent = "";
            break;
        } else {
            // console.log("not product!!!");
            myContent = children;
        }
    }

    return (
        <MDXContent>
            {myContent}
        </MDXContent>
    );
}