import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import whatapLocale from './whatap-locale.json';

const ReplacementLocaleText = ({sid, className}) => {
    const {
        i18n: {currentLocale},
    } = useDocusaurusContext();
    const uiText = whatapLocale[sid][`${currentLocale}`];

    return (
        <span class={className}>{uiText}</span>
    );
}

export default ReplacementLocaleText;