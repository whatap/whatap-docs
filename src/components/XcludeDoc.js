import React from 'react';
import MDXContent from '@theme-original/MDXContent';
import {useLocation} from '@docusaurus/router';

export default function ExcludeDoc ({children, exclude}) {
    let prodsx;
    if (typeof exclude.split(",") !== undefined) {
        prodsx = exclude.split(",");
    } else {
        prodsx.push(exclude);
    }
    let locationx = useLocation();
    let myContent;
    const cProdx = locationx.pathname.split("/")[1];
    let s, prodx;
    
    for (s =0; s < prodsx.length; s ++) {
        // console.log(prods[i]);
        prodx = prodsx[s]
        if (cProdx == prodx) {
            // console.log("exclude!!!");
            myContent = "";
            break;
        } else {
            // console.log("not exclude!!!");
            myContent = children;
        }
    }

    return (
        <MDXContent>
            {myContent}
        </MDXContent>
    );
}