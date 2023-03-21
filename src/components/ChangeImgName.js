import React from 'react';
import checkProduct from '@site/src/components/CheckProduct';

export default function ChangeImgName({img, ext, desc}) {
    const product = checkProduct();
    // console.log(isBrowser);
    // console.log(product);
    return (
        <p>
            <img src={'/img/' + img + product + ext} alt={desc} />
        </p>
    );
}