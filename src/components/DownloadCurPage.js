import React from 'react';
import { PDFDocument, StandardFonts } from 'pdf-lib';

const PdfSaveButton = () => {
  const handleSavePdf = async () => {
    const pages = Array.from(window.document.getElementsByClassName('theme-doc-markdown'));
    const pdfDoc = await PDFDocument.create();

    for (let i = 0; i < pages.length; i++) {
      const pageData = await pdfDoc.embedPage(pages[i]);
      const { width, height } = pageData.getSize();
      const pdfPage = pdfDoc.addPage([width, height]);
      pdfPage.drawPage(pageData);
    }

    const pdfBytes = await pdfDoc.save();

    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'document.pdf';
    link.click();
  };

  return (
    <button onClick={handleSavePdf}>
      현재 페이지를 PDF로 저장하기
    </button>
  );
};

export default PdfSaveButton;
