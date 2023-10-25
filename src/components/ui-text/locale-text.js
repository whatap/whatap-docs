import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import whatapLocale from './whatap-locale.json';

const ReplacementLocaleText = ({sid, className, anchor}) => {
    const {
        i18n: {currentLocale},
    } = useDocusaurusContext();
    const uiText = whatapLocale[sid][`${currentLocale}`];

    return (
        <span class={className} id={anchor}>{uiText}</span>
    );
}

export default ReplacementLocaleText;