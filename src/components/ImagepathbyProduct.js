import React, { useState, useEffect } from 'react';
import checkProduct from '@site/src/components/CheckProduct';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import MDXContents from '@theme-original/MDXContent';

export default function ImageChecker({ img, desc, className, multi }) {
    const { i18n: { currentLocale } } = useDocusaurusContext();
    const product = checkProduct();

    const [imgSize, setImgSize] = useState({ width: 'auto', height: 'auto' });

    let fext = img.slice(img.lastIndexOf('.') + 1);
    let fileName = img.slice(0, img.lastIndexOf('.'));
    let imgFilePath, getName;

    // product, locale에 따라 파일명 변경
    if (multi === 'true') {
        imgFilePath = useBaseUrl(`/img/${fileName}${product}.${fext}`);
        getName = `${fileName}${product}.${fext}`;
    } else {
        if (currentLocale !== 'ko') {
            imgFilePath = useBaseUrl(`/img/${fileName}${product}-${currentLocale}.${fext}`);
            getName = `${fileName}${product}-${currentLocale}.${fext}`;
        } else {
            imgFilePath = useBaseUrl(`/img/${fileName}${product}.${fext}`);
            getName = `${fileName}${product}.${fext}`;
        }
    }

    // 다국어 이미지가 없을 경우
    const errTarget =
        currentLocale !== 'ko'
            ? `/${currentLocale}/img/${getName}`
            : `/img/${img}`;

    // JSON 파일에서 이미지 크기 가져오기
    useEffect(() => {
        async function fetchImageSize() {
            try {
                // currentLocale에 따라 JSON 경로 동적으로 설정
                const jsonPath =
                    currentLocale === 'ko'
                        ? '/whatap-docs/img/sizeOfimages.json'
                        : `/whatap-docs/${currentLocale}/img/sizeOfimages.json`;

                const response = await fetch(jsonPath);

                if (!response.ok) {
                    throw new Error(`Failed to load sizeOfimages.json: ${response.status}`);
                }

                const sizeData = await response.json();
                if (sizeData[getName]) {
                    setImgSize({
                        width: sizeData[getName].width || 'auto',
                        height: sizeData[getName].height || 'auto',
                    });
                }
            } catch (error) {
                console.error('Failed to fetch image size:', getName, error);
            }
        }
        fetchImageSize();
    }, [getName, currentLocale]);

    function onError(e) {
        e.target.src = errTarget || '/img/default-placeholder-image.webp';
    }

    return (
        <MDXContents>
            <p>
                <img
                    loading="lazy"
                    src={imgFilePath}
                    alt={desc}
                    className={className}
                    width={imgSize.width}
                    height={imgSize.height}
                    onError={(e) => onError(e)}
                />
            </p>
        </MDXContents>
    );
}
