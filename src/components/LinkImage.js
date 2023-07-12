import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function LinkImage({img, desc}) {
    let imgPath = useBaseUrl('/img/' + img);
    return (
        <img src={imgPath}
            alt={desc}
        />
    )
}