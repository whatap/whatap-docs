import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import mobileLocale from './mobile-locale.json';

const ReplaceMobileLocaleText = ({sid, className}) => {
    const { i18n: {currentLocale} } = useDocusaurusContext();
    let uiText;
    if (sid == "db_instance_list") {
        uiText = mobileLocale[currentLocale][sid].replace(' （총 @count 개）', '');
    } else {
        uiText = mobileLocale[currentLocale][sid];
    }

    return (
        <span class={className}>{uiText}</span>
    );
}

export default ReplaceMobileLocaleText;