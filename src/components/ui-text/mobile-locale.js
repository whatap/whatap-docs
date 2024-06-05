import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import mobileLocale from './mobile-locale.json';

const ReplaceMobileLocaleText = ({sid, className}) => {
    const { i18n: {currentLocale} } = useDocusaurusContext();
    let uiText;
    if (sid == "db_instance_list") {
        if (currentLocale == "ko") {
            uiText = mobileLocale[currentLocale][sid].replace(' （총 @count 개）', '');
        } else if (currentLocale == "en") {
            uiText = mobileLocale[currentLocale][sid].replace(' ( Total @count )', '');
        } else if (currentLocale == "ja") {
            uiText = mobileLocale[currentLocale][sid].replace('（合計 @count ）', '');
        }
    } else {
        uiText = mobileLocale[currentLocale][sid];
    }

    return (
        <span class={className}>{uiText}</span>
    );
}

export default ReplaceMobileLocaleText;