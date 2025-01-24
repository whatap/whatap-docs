import React, { useState, useEffect } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function LinkImage({ img, desc, className }) {
    const { i18n: { currentLocale } } = useDocusaurusContext();
    const [imgSize, setImgSize] = useState({ width: 'auto', height: 'auto' });

    // 이미지 경로 설정
    const imgPath = useBaseUrl(`/img/${img}`);

    // JSON 파일에서 이미지 크기 가져오기
    useEffect(() => {
        async function fetchImageSize() {
            try {
                // 언어에 따라 JSON 경로 동적으로 설정
                const jsonPath =
                    currentLocale === 'ko'
                        ? '/whatap-docs/img/sizeOfimages.json'
                        : `/whatap-docs/${currentLocale}/img/sizeOfimages.json`;

                const response = await fetch(jsonPath);

                if (!response.ok) {
                    throw new Error(`Failed to load sizeOfimages.json: ${response.status}`);
                }

                const sizeData = await response.json();
                if (sizeData[img]) {
                    setImgSize({
                        width: sizeData[img].width || 'auto',
                        height: sizeData[img].height || 'auto',
                    });
                }
            } catch (error) {
                console.error('Failed to fetch image size:', img, error);
            }
        }
        fetchImageSize();
    }, [img, currentLocale]);

    // 이미지 로딩 실패 처리
    function onError(e) {
        e.target.src = useBaseUrl('/img/default-placeholder-image.webp');
    }

    return (
        <img
            loading="lazy"
            src={imgPath}
            alt={desc}
            className={className}
            width={imgSize.width}
            height={imgSize.height}
            onError={onError}
        />
    );
}
