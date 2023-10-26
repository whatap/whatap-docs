import React, { useEffect } from 'react';
import checkProduct from '@site/src/components/CheckProduct';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, { translate } from "@docusaurus/Translate";
// import ImageError from "@site/src/components/imageError.js"

function checkImage(imgURL) {
  // console.log('check: ' + imgURL)
  const [imageExists, setImageExists] = React.useState(false);
  useEffect(() => {
    const img = new Image();
    img.src = imgURL;

    const handleImageLoad = () => {
      setImageExists(true);
    };

    const handleImageError = () => {
      setImageExists(false);
    };

    img.addEventListener('load', handleImageLoad);
    img.addEventListener('error', handleImageError);

    return () => {
      img.removeEventListener('load', handleImageLoad);
      img.removeEventListener('error', handleImageError);
    };
  }, [imgURL]);

  return imageExists;
}

const ImageChecker = ({ img, desc, className }) => {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();

  const product = checkProduct();
  let fext = img.substr(img.lastIndexOf('.') + 1);
  let fileName = img.replace('.' + fext, '');
  let imgFilePath, curChk;
  if (currentLocale != 'ko') {
      imgFilePath = useBaseUrl('/img/' + fileName + product + '-' + currentLocale + '.' + fext);
      curChk = true; // 다국어일 경우
  } else {
      imgFilePath = useBaseUrl('/img/' + fileName + product + '.' + fext);
      curChk = false; // 베이직 언어일 경우
  }
  let imageExists = checkImage(imgFilePath);
  
  let prodImage = useBaseUrl('/img/' + fileName + product + '.' + fext);
  let basicImage = useBaseUrl('/img/' + fileName + '.' + fext);

  let prodExists = checkImage(prodImage);
  let basicExists = checkImage(basicImage);

  // console.log(imageExists);
  // console.log("last: " + imgFilePath);
  
  return (
    <p>
      {/* pdf 출력 시 사용 코드 */}
      {/* <img 
        src={imgFilePath} 
        alt={desc} 
        className={className} 
      /> */}
      {/* ^ pdf 출력 시 사용 코드 */}

      {imageExists ? (
        <img 
          loading="lazy" 
          src={imgFilePath} 
          alt={desc} 
          className={className} 
        />
      ) : ( prodExists ? (
        <img 
          loading="lazy" 
          src={prodImage} 
          alt={desc} 
          className={className} 
        />
      ) : ( <img 
          loading="lazy" 
          src={basicImage} 
          alt={desc} 
          className={className}
        />
      ))
      }
    </p>
  );
};

export default ImageChecker;