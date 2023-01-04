import React from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';

export default function CDoc () {
    const isBrowser = useIsBrowser();
    const location = isBrowser ? window.location.href : 'fetching location...';
    return (
        
    );
}