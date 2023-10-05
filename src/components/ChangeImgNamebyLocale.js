import React, { useState, useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function ChangeImgName({img, desc, className}) {
    const {
        i18n: {currentLocale},
    } = useDocusaurusContext();
    const [isValid, setIsValid] = useState(null);
    
    const imageValidator = (path) => {
        useEffect(() => {
            if (isValid === null) {
                const img = new Image();
                img.src = path;
                img.onload = () => {
                    setIsValid(true);
                }
                img.onerror = () => {
                    setIsValid(false);
                };
            }
        }, [path, isValid]);
    }

    let fext = img.substr(img.lastIndexOf('.') + 1);
    let fileName = img.replace('.' + fext, '');
    let imgFilePath;
    if (currentLocale == 'ko') {
        imgFilePath = useBaseUrl('/img/' + fileName + '.' + fext);
    } else {
        imgFilePath = useBaseUrl('/' + currentLocale + '/img/' + fileName + '-' + currentLocale + '.' + fext);
    }
    imageValidator(imgFilePath);
    if (isValid === false) {
        var errTarget;
        if (currentLocale != 'ko') {
            errTarget = '/' + currentLocale + '/img/' + img;
        } else {
            errTarget = '/img/' + img;
        }
        return (
            <p>
                <img src={errTarget} 
                    alt={desc} 
                    class={className}
                />
            </p>
        );
    }
    return (
        <p>
            <img src={imgFilePath} 
                alt={desc} 
                class={className}
            />
        </p>
    );
}
