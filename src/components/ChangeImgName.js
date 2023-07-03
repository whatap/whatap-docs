import React from 'react';
import checkProduct from '@site/src/components/CheckProduct';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
export default function ChangeImgName({img, desc}) {
    const {
        i18n: {currentLocale},
    } = useDocusaurusContext();
    const product = checkProduct();
    let fext = img.substr(img.lastIndexOf('.') + 1);
    let fileName = img.replace('.' + fext, '');
    let imgFilePath = useBaseUrl('/img/' + fileName + product + '.' + fext);
    
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
                onError={(e) => onError(e)}
            />
        </p>
    );
}
