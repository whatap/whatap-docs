// src/components/HighlightBackslash.js
import React from 'react';

class HighlightBackslash extends React.Component {
  componentDidMount() {
    // DOM이 로드된 후, 역슬래시를 강조하는 처리
    document.querySelectorAll('code.highlight-backslash').forEach(codeBlock => {
      const codeText = codeBlock.textContent;
      // 역슬래시(\)를 <span>으로 감싸기
      codeBlock.innerHTML = codeText.replace(/\\(?![^<]*>)/g, '<span class="highlight-backslash">\\</span>');
    });
  }

  render() {
    return null; // 이 컴포넌트는 화면에 렌더링되지 않음
  }
}

export default HighlightBackslash;