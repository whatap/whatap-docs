import React from 'react';
import {useLocation} from '@docusaurus/router';

export default function getProductName() {
    let location = useLocation();
    let cProd = location.pathname.split("/")[1];
    let myProd = cProd.toLowerCase();
    return (
        <code>{myProd}</code>
    );
}