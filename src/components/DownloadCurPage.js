import React from 'react';
import { PDFDocument } from 'pdf-lib';

class PdfDownloadButton extends React.Component {
  async generatePdf() {
    const elements = document.getElementsByClassName('theme-doc-markdown'); // 원하는 클래스 이름으로 요소를 찾습니다.
    const content = Array.from(elements)
      .map((element) => element.innerText)
      .join('\n'); // 클래스 이름으로 찾은 요소들의 텍스트를 가져와 합칩니다.

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    const font = await pdfDoc.embedFont(PDFDocument.Font.Helvetica);
    const fontSize = 12;

    const textWidth = font.widthOfTextAtSize(content, fontSize);
    const textHeight = font.heightAtSize(fontSize);
    const x = (width - textWidth) / 2;
    const y = height - textHeight - 50;

    page.drawText(content, { x, y, font, fontSize });

    const pdfBytes = await pdfDoc.save();
    return new Blob([pdfBytes], { type: 'application/pdf' });
  }

  async downloadPdf() {
    const pdfBlob = await this.generatePdf();
    const url = URL.createObjectURL(pdfBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'generated-pdf.pdf';
    a.click();
    URL.revokeObjectURL(url);
  }

  render() {
    return (
      <button onClick={() => this.downloadPdf()}>Download PDF</button>
    );
  }
}

export default PdfDownloadButton;
