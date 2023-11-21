import React, { useState, useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import sizeOfimages from './sizeOfimages.json';
import MDXContents from '@theme-original/MDXContent';

export default function ChangeImgName({img, desc, className}) {
    const { i18n: {currentLocale} } = useDocusaurusContext();

    let fext = img.substr(img.lastIndexOf('.') + 1);
    let fileName = img.replace('.' + fext, '');
    let imgFilePath, getName;
    if (currentLocale == 'ko') {
        imgFilePath = useBaseUrl(`/img/${fileName}.${fext}`);
        if (fileName.indexOf('/') != -1) {
            fileName = fileName.split('/')[1]
        }
        getName = `${fileName}.${fext}`;
    } else {
        imgFilePath = useBaseUrl(`/${currentLocale}/img/${fileName}-${currentLocale}.${fext}`);
        if (fileName.indexOf('/') != -1) {
            fileName = fileName.split('/')[1]
        }
        getName = `${fileName}-${currentLocale}.${fext}`;
    }

    let curWidth = sizeOfimages[`${getName}`] && sizeOfimages[`${getName}`]["width"] ? sizeOfimages[`${getName}`]["width"] : 'auto';
    let curHeight = sizeOfimages[`${getName}`] && sizeOfimages[`${getName}`]["height"] ? sizeOfimages[`${getName}`]["height"] : 'auto';

    
    let errTarget;
    if (currentLocale != 'ko') {
        errTarget = `/${currentLocale}/img/${img}`;
    } else {
        errTarget = `/img/${img}`;
    }

    function onError(e) {
        e.target.src = errTarget;
    }

    return (
        <MDXContents>
            <p>
                <img loading="lazy" 
                    src={imgFilePath} 
                    alt={desc} 
                    class={className}
                    width={curWidth}
                    height={curHeight}
                    onError={(e) => onError(e)}
                />
            </p>
        </MDXContents>
    );
}
