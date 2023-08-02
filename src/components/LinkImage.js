import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function LinkImage({img, desc, className}) {
    let imgPath = useBaseUrl('/img/' + img);
    return (
        <img src={imgPath}
            alt={desc}
            class={className}
        />
    )
}