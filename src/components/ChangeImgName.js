import React from 'react';
import checkProduct from '@site/src/components/CheckProduct';

export default function ChangeImgName({img, desc}) {
    const product = checkProduct();
    let fext = img.substr(img.lastIndexOf('.') + 1);
    let fileName = img.replace('.' + fext, '');
    let imgFilePath = '/img/' + fileName + product + '.' + fext;
    const onErrorImg = (e) => {
        e.target.src = '/img/' + img;
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
