import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function LinkImage({img, desc}) {
    let imgPath = useBaseUrl('/img/' + img);
    console.log(imgPath);
    return (
        <img src={imgPath}
            alt={desc}
        />
    )
}