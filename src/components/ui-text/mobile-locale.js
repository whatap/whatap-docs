import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import mobileLocale from './mobile-locale.json';

const ReplaceMobileLocaleText = ({sid, className}) => {
    const { i18n: {currentLocale} } = useDocusaurusContext();
    
    const uiText = mobileLocale[currentLocale][sid];

    return (
        <span class={className}>{uiText}</span>
    );
}

export default ReplaceMobileLocaleText;