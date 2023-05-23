import React from 'react';
import checkProduct from '@site/src/components/CheckProduct';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
export default function ChangeImgName({img, desc}) {
    const {
        i18n: {currentLocale},
    } = useDocusaurusContext();
    const product = checkProduct();
    let fext = img.substr(img.lastIndexOf('.') + 1);
    let fileName = img.replace('.' + fext, '');
    let imgFilePath;
    if (currentLocale == 'ko') {
        imgFilePath = '/img/' + fileName + '.' + fext;
    } else {
        imgFilePath = '/img/' + fileName + '-' + currentLocale + '.' + fext;
    }
    function onError(e) {
        e.target.src = '/img/' + img;
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
