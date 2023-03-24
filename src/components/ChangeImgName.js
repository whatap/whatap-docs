import React from 'react';
import checkProduct from '@site/src/components/CheckProduct';

export default function ChangeImgName({img, ext, desc}) {
    const product = checkProduct();
    
    let imgFilePath = '/img/' + img + product + ext;
    const onErrorImg = (e) => {
        e.target.src = '/img/' + img + ext;
    }
    return (
        <p>
            <img src={imgFilePath} 
                alt={desc} 
                onError={onErrorImg} 
            />
        </p>
    );
}