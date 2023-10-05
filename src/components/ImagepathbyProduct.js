import React, { useState, useEffect } from 'react';
import checkProduct from '@site/src/components/CheckProduct';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, { translate } from "@docusaurus/Translate";
// import ImageError from "@site/src/components/imageError.js"

const ImageChecker = ({ img, desc, className }) => {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();

  const [isValid, setIsValid] = useState(null);
    
  const imageValidator = (path) => {
      useEffect(() => {
          if (isValid === null) {
              const img = new Image();
              img.src = path;
              img.onload = () => {
                  setIsValid(true);
              }
              img.onerror = () => {
                  setIsValid(false);
              };
          }
      }, [ ]);

      if (isValid === false) {
        return false
      }
      return true
  }

  const product = checkProduct();
  let fext = img.substr(img.lastIndexOf('.') + 1);
  let fileName = img.replace('.' + fext, '');
  let imgFilePath, curChk;
  if (currentLocale != 'ko') {
    imgFilePath = useBaseUrl('/img/' + fileName + product + '-' + currentLocale + '.' + fext);
  } else {
    imgFilePath = useBaseUrl('/img/' + fileName + product + '.' + fext);
  }

  let prodImage = useBaseUrl('/img/' + fileName + product + '.' + fext);
  let imageExists = imageValidator(imgFilePath);

  function onError(e) {
    if (currentLocale != 'ko') {
        e.target.src = '/' + currentLocale + '/img/' + img;
    } else {
        e.target.src = '/img/' + img;
    }
  }

  if (imageExists === false) {
    console.log(imgFilePath, imageValidator(imgFilePath));
    return (
      <p>
        <img 
          src={prodImage} 
          alt={desc} 
          className={className} 
          onError={(e) => onError(e)}
        />
      </p>
    )
  }

  return (
    <p>
      <img 
        src={imgFilePath} 
        alt={desc} 
        className={className} 
      />
    </p>
  );
};

export default ImageChecker;