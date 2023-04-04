import React from 'react';
import MDXContents from '@theme-original/MDXContent';
import {useLocation} from '@docusaurus/router';

export default function InDoc ({children, product}) {
    let prods;
    if (typeof product.split(",") !== undefined) {
        prods = product.split(",");
    } else {
        prods.push(product);
    }
    let location = useLocation();
    let myContents;
    let cProd = location.pathname.split("/")[1];
    let i, prod;
    
    for (i =0; i < prods.length; i ++) {
        // console.log(prods[i]);
        prod = prods[i]
        if (cProd == prod) {
            // console.log("product!!!");
            myContents = children;
            break;
        } else {
            // console.log("not product!!!");
            myContents = "";
        }
    }

    return (
        <MDXContents>
            {myContents}
        </MDXContents>
    );
}