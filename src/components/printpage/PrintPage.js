import React, { useState } from 'react';
import styles from './styles.module.css';

const PrintPDFButton = () => {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const handleButtonClick = () => {
    // 모든 details 요소에 open 속성을 부여하고 하위에 있는 div 요소에 display: block 스타일을 적용
    const detailsElements = document.querySelectorAll('details');
    detailsElements.forEach((detailsElement) => {
      detailsElement.setAttribute('open', true);

      const childDivs = detailsElement.querySelectorAll('div');
      childDivs.forEach((div) => {
        div.style.display = 'block';
        div.style.overflow = 'visible';
        div.style.height = 'auto';
      });
    });
    window.print();

    // 상태 업데이트
    setDetailsOpen(true);
  };

  return (
    <div className={styles.btnprint}>
        <button onClick={handleButtonClick}>
          PDF
        </button>
    </div>
  );
};

export default PrintPDFButton;
