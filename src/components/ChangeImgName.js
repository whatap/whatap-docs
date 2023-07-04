import React from 'react';
import checkProduct from '@site/src/components/CheckProduct';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
export default function ChangeImgName({img, desc, className}) {
    const {
        i18n: {currentLocale},
    } = useDocusaurusContext();
    const product = checkProduct();
    let fext = img.substr(img.lastIndexOf('.') + 1);
    let fileName = img.replace('.' + fext, '');
    let imgFilePath;
    if (currentLocale != 'ko') {
        imgFilePath = useBaseUrl('/img/' + fileName + product + '-' + currentLocale + '.' + fext);
    } else {
        imgFilePath = useBaseUrl('/img/' + fileName + product + '.' + fext);
    }
    
    function onError(e) {
        if (currentLocale != 'ko') {
            e.target.src = '/' + currentLocale + '/img/' + fileName + product + '.' + fext;
        } else {
            e.target.src = '/img/' + fileName + product + '.' + fext;
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
