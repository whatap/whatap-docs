import React from 'react';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import { cp } from 'fs';

export default function returnPrevVer({children}) {
    const {i18n: {currentLocale}} = useDocusaurusContext();
    const location = useLocation();
    let cProd;
    if (currentLocale == 'ko') {
        cProd = location.pathname.split("/")[1];
    } else {
        cProd = location.pathname.split("/")[2];
    }
    let rProd = cProd + '-v1';
    let rURL = location.pathname.replace(cProd, rProd);
    return (
        <Link to={rURL}>{children}</Link>
    )
}