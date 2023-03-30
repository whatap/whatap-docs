import React from 'react';
import MDXContent from '@theme/MDXContent';
import {useLocation} from '@docusaurus/router';

export default function ExcludeDoc ({children, exclude}) {
    let prods = exclude.split(",");
    let location = useLocation();
    let myContents;
    const cProd = location.pathname.split("/")[1];
    let i, prod;
    
    for (i =0; i < prods.length; i ++) {
        // console.log(prods[i]);
        prod = prods[i]
        if (cProd == prod) {
            // console.log("exclude!!!");
            myContents = "";
            break;
        } else {
            // console.log("not exclude!!!");
            myContents = children;
        }
    }

    return (
        <MDXContent>
            {myContents}
        </MDXContent>
    );
}