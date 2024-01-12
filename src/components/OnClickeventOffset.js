import React, { useEffect, useRef } from 'react';
import { useLocation } from '@docusaurus/router';

const ScrollToHashComponent = ({anchor}) => {
  const targetRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash.replace('#','') === anchor) {
      const yOffset = 97; // 이동하고 싶은 offset 값 (픽셀)
      const targetElement = targetRef.current;
      console.log(targetRef);
      const yCoordinate = targetElement.getBoundingClientRect().top + window.pageYOffset - yOffset;

      window.scrollTo({
        top: yCoordinate,
        behavior: 'smooth' // 부드러운 스크롤 효과를 위해 'smooth' 속성 사용
      });
    }
  }, []);
  const targetPath = location.pathname + '#' + anchor;
  return (
    <a href={targetPath} className='hash-link'><span ref={targetRef} id={anchor}>&#8203;</span></a>
  );
};

export default ScrollToHashComponent;