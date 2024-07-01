import React from 'react';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function getProductName() {
    const {
        i18n: {currentLocale},
    } = useDocusaurusContext();

    let location = useLocation();
    let cProd;
    if (currentLocale == 'ko') {
        cProd = location.pathname.split("/")[1];
    } else {
        cProd = location.pathname.split("/")[2];
    }
    
    let myProd;
    if (cProd == 'oracle-v2') {
        myProd = 'oracle';
    } else {
        myProd = cProd.toLowerCase();
    }
    return (
        <code>{myProd}</code>
    );
}