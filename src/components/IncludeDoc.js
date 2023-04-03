import React from 'react';
import MDXContent from '@site/src/theme/MDXContent';
import {useLocation} from '@docusaurus/router';

export default function IncludeDoc ({children, include}) {
    let prods;
    if (typeof include.split(",") !== undefined) {
        prods = include.split(",");
    } else {
        prods.push(include);
    }
    let location = useLocation();
    let myContents;
    let cProd = location.pathname.split("/")[1];
    let i, prod;
    
    for (i =0; i < prods.length; i ++) {
        // console.log(prods[i]);
        prod = prods[i]
        if (cProd == prod) {
            // console.log("include!!!");
            myContents = children;
            break;
        } else {
            // console.log("not include!!!");
            myContents = "";
        }
    }

    return (
        <MDXContent>
            {myContents}
        </MDXContent>
    );
}