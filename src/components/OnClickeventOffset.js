import React, { useRef } from 'react';

const ScrollToLink = ({ to, children }) => {
  const targetRef = useRef(null);

  const handleLinkClick = (e) => {
    e.preventDefault();

    const yOffset = 97; // 이동하고 싶은 offset 값 (픽셀)
    const targetElement = targetRef.current;
    const yCoordinate = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: yCoordinate,
      behavior: 'smooth' // 부드러운 스크롤 효과를 위해 'smooth' 속성 사용
    });

    // 새 페이지 열기
    window.open(to, '_blank');
  };

  return (
    <a href={to} onClick={handleLinkClick} ref={targetRef}>
      {children}
    </a>
  );
};

export default ScrollToLink;