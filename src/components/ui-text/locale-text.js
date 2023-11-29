import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import whatapLocale from './whatap-locale.json';

const ReplacementLocaleText = ({sid, className, anchor, replace}) => {
    const { i18n: {currentLocale} } = useDocusaurusContext();
    
    let oText;
    if (replace) {
        oText = whatapLocale[sid][`${currentLocale}`].replace(replace, '');
    } else {
        oText = whatapLocale[sid][`${currentLocale}`];
    }
    if (sid == "TTL06865") {
        oText = whatapLocale[sid][`${currentLocale}`].toUpperCase();
    }
    const uiText = oText;
    return (
        <span class={className} id={anchor}>{uiText}</span>
    );
}

export default ReplacementLocaleText;