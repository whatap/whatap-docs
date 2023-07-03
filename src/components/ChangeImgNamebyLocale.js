import React from 'react';
import checkProduct from '@site/src/components/CheckProduct';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
export default function ChangeImgName({img, desc, className}) {
    const {
        i18n: {currentLocale},
    } = useDocusaurusContext();
    const product = checkProduct();
    let fext = img.substr(img.lastIndexOf('.') + 1);
    let fileName = img.replace('.' + fext, '');
    let imgFilePath;
    if (currentLocale == 'ko') {
        imgFilePath = useBaseUrl('/img/' + fileName + '.' + fext);
    } else {
        imgFilePath = useBaseUrl('/' + currentLocale + '/img/' + fileName + '-' + currentLocale + '.' + fext);
    }
    function onError(e) {
        if (currentLocale != 'ko') {
            e.target.src = '/' + currentLocale + '/img/' + img;
        } else {
            e.target.src = '/img/' + img;
        }
    }
    return (
        <p>
            <img src={imgFilePath} 
                alt={desc} 
                class={className}
                onError={(e) => onError(e)}
            />
        </p>
    );
}
