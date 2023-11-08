import React from 'react';
import html2pdf from 'html2pdf.js';

const SaveAsPDFButton = () => {
  const handleSaveAsPDF = () => {
    const contentElement = document.querySelector('.theme-doc-markdown'); // PDF로 저장하고 싶은 컨텐츠의 CSS 클래스 이름을 선택합니다.
  
    if (contentElement) {
      html2pdf(contentElement, {
        margin: 10,
        filename: 'document.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      });
    }
  };

  return (
    <div>
      <button onClick={handleSaveAsPDF}>PDF로 저장</button>
    </div>
  );
};

export default SaveAsPDFButton;
