import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import whatapLocale from './whatap-locale.json';
import whatapReport from './whatap-report.json';

const ReplacementLocaleText = ({sid, className, anchor, replace, days, report}) => {
    const { i18n: {currentLocale} } = useDocusaurusContext();
    
    if (report) {
        let oText = whatapReport[sid][`${currentLocale}`];
        return (
            <span class={className} id={anchor}>{oText}</span>
        );
    } else {
        let oText;
        if (replace) {
            if (replace === "noSpace") {
                oText = whatapLocale[sid][`${currentLocale}`].replace('&nbsp;', ' ');
            } else if (replace === "br") {
                oText = whatapLocale[sid][`${currentLocale}`].replace('</br>', ' ').replace('\n', '');
            } else if (replace == "ITM06005") {
                let oType = whatapLocale["ITM06005"][`${currentLocale}`];
                oText = whatapLocale[sid][`${currentLocale}`].replace('{type}', oType)
            } else {
                oText = whatapLocale[sid][`${currentLocale}`].replace(replace, '');
            }
        } else {
            oText = whatapLocale[sid][`${currentLocale}`];
        }
        if (sid == "BTN07717") {
            oText = whatapLocale[sid][`${currentLocale}`].replace('{days}', days);
        }
        if (sid == "TTL07769") {
            oText = whatapLocale[sid][`${currentLocale}`].replace(' ({count})', '');
        }
        if (sid == "TTL06865") {
            oText = whatapLocale[sid][`${currentLocale}`].toUpperCase();
        }
        if (sid == "hitmap" && currentLocale == "en") {
            // 첫글자 제외 다른 문자 소문자로 변경
            oText = whatapLocale[sid][`${currentLocale}`].substring(0,1) + whatapLocale[sid][`${currentLocale}`].substring(1).toLowerCase();
        }
        const uiText = oText;
        return (
            <span class={className} id={anchor}>{uiText}</span>
        );
    }
}

export default ReplacementLocaleText;