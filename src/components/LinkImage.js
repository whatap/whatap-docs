import React, { useState, useEffect } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import sizeOfimages from './sizeOfimages.json';

export default function LinkImage({img, desc, className}) {
    let imgPath = useBaseUrl('/img/' + img);
    // 이미지 파일의 가로 세로 구하기
    let curWidth = sizeOfimages[`${img}`] && sizeOfimages[`${img}`]["width"] ? sizeOfimages[`${img}`]["width"] : 'auto';
    let curHeight = sizeOfimages[`${img}`] && sizeOfimages[`${img}`]["height"] ? sizeOfimages[`${img}`]["height"] : 'auto';

    return (
        <img 
            loading="lazy" 
            src={imgPath}
            alt={desc}
            class={className}
            width={curWidth}
            height={curHeight}
        />
    )
}