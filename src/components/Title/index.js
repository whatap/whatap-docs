import React from 'react';
import clsx from 'clsx';
import {useThemeConfig} from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function Title ({level, hashid, children}) {
    const Headertag = `h${level}`;
    const {
        navbar: {hideOnScroll},
    } = useThemeConfig();

    if (level === 'none') {
        return null
    }
    return (
        <Headertag 
            className={clsx(
                'anchor',
                hideOnScroll
                ? styles.anchorWithHideOnScrollNavbar
                : styles.anchorWithStickyNavbar
            )}
            id={hashid}>
            {children}
            <Link
                className="hash-link"
                to={`#${hashid}`}>
                &#8203;
            </Link>
        </Headertag>
    );
}