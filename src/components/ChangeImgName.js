import React, {useState, useEffect} from 'react';
import checkProduct from '@site/src/components/CheckProduct';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function ChangeImgName({img, desc, className}) {
    const TransImage = ({ src, alt, className, locale, ...props }) => {
        const [imageExists, setImageExists] = useState(true);
        
        useState(() => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                setImageExists(true);
            };
            img.onerror = () => {
                setImageExists(false);
            };
        }, [src]);
        
        if (imageExists) {
            return <img src={src} alt={alt} class={className} {...props} onError={(e) => onError(e)}/>;
        } else {
            let changesrc = src.replace('-' + locale, '');
            return <img src={changesrc} alt={alt} class={className} {...props} onError={(e) => onError(e)}/>
        }
        
    };

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
            e.target.src = '/' + currentLocale + '/img/' + fileName + '.' + fext;
        } else {
            e.target.src = '/img/' + fileName + '.' + fext;
        }
    }
    return (
        <p>
            <TransImage src={imgFilePath} alt={desc} className={className} locale={currentLocale}/>
        </p>
    );
}
