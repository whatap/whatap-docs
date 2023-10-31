import React, { useState, useEffect } from 'react';
import checkProduct from '@site/src/components/CheckProduct';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import sizeOfimages from './sizeOfimages.json';
import MDXContents from '@theme-original/MDXContent';

export default function ImageChecker({ img, desc, className}) {
    const { i18n: {currentLocale} } = useDocusaurusContext();

    const product = checkProduct();
    let fext = img.substr(img.lastIndexOf('.') + 1);
    let fileName = img.replace('.' + fext, '');
    let imgFilePath, getName;

    // product, locale에 따라 파일명 변경
    if (currentLocale != 'ko') {
        imgFilePath = useBaseUrl(`/img/${fileName}${product}-${currentLocale}.${fext}`);
        getName = `${fileName}${product}-${currentLocale}.${fext}`;
    } else {
        imgFilePath = useBaseUrl(`/img/${fileName}${product}.${fext}`);
        getName = `${fileName}${product}.${fext}`;
    }
    // 이미지 파일의 가로 세로 구하기
    let curWidth = sizeOfimages[`${getName}`] && sizeOfimages[`${getName}`]["width"] ? sizeOfimages[`${getName}`]["width"] : 'auto';
    let curHeight = sizeOfimages[`${getName}`] && sizeOfimages[`${getName}`]["height"] ? sizeOfimages[`${getName}`]["height"] : 'auto';

    // 다국어 이미지가 없을 경우
    let errTarget;
    if (currentLocale != 'ko') {
        errTarget = `/${currentLocale}/img/${getName}`;
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