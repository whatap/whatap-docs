import React, { useState, useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import MDXContents from '@theme-original/MDXContent';

export default function ChangeImgName({ img, desc, className }) {
    const { i18n: { currentLocale } } = useDocusaurusContext();
    const [imgSize, setImgSize] = useState({ width: 'auto', height: 'auto' });

    // Extract file extension and path
    const fext = img.slice(img.lastIndexOf('.') + 1); // Extract file extension
    const fileNameWithPath = img.slice(0, img.lastIndexOf('.')); // Full path without extension
    const imgDirectory = fileNameWithPath.slice(0, fileNameWithPath.lastIndexOf('/')); // Directory path
    const fileNameOnly = fileNameWithPath.slice(fileNameWithPath.lastIndexOf('/') + 1); // File name only

    // Compute image file path and name based on locale
    const getName =
        currentLocale === 'ko'
            ? `${fileNameWithPath}.${fext}` // Full path with extension
            : `${fileNameWithPath}-${currentLocale}.${fext}`;

    const imgFilePath =
        currentLocale === 'ko'
            ? useBaseUrl(`/img/${fileNameWithPath}.${fext}`)
            : useBaseUrl(`/${currentLocale}/img/${fileNameWithPath}-${currentLocale}.${fext}`);

    const errTarget =
        currentLocale !== 'ko'
            ? `/${currentLocale}/img/${img}`
            : `/img/${img}`;

    // Fetch image size from JSON based on locale
    useEffect(() => {
        async function fetchImageSize() {
            try {
                // Dynamically adjust the fetch path based on the currentLocale
                const jsonPath =
                    currentLocale === 'ko'
                        ? '/img/sizeOfimages.json'
                        : `/${currentLocale}/img/sizeOfimages.json`;

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

    // Handle image loading errors
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
                    onError={onError}
                />
            </p>
        </MDXContents>
    );
}
