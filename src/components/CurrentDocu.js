import React from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';

export default function CDoc({children, url, dest}) {
    const isBrowser = useIsBrowser();
    const location = isBrowser ? window.location.href : 'fetching location...';
    var product;
    if (location.includes('nodejs') > -1) {
        product = 'nodejs';
    } else if (location.includes('java') > -1) {
        product = 'java';
    } else if (location.includes('php') > -1) {
        product = 'php';
    } else if (location.includes('python') > -1) {
        product = 'python';
    } else if (location.includes('golang') > -1) {
        product = 'golang';
    }
    return (
        <a href={url + product + '-' + dest}>
        {children}
        </a>
    );
}