import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import OpenFolderIcon from './openFolderIcon';
import CloseFolderIcon from './closeFolderIcon';

export default function Filetree({ children, name, type, open = false }) {
  // open 속성으로 초기 상태 설정 추가(0730) 기본 닫힘 - 열어두려면 속성 추가 open={true}
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    const mediaQueryList = window.matchMedia('print');

    const handlePrintChange = (event) => {
      if (event.matches) {
        setIsOpen(true); 
      }
    };

    mediaQueryList.addListener(handlePrintChange);

    return () => {
      mediaQueryList.removeListener(handlePrintChange);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.filetree}>
      <button className={styles.top} onClick={handleToggle}>
        <span className={styles.type}>
          {isOpen ? <OpenFolderIcon /> : <CloseFolderIcon />}
        </span>
        {name}
      </button>
      {isOpen && (
        <ul className={styles.fileitem} type={type}>
          {children}
        </ul>
      )}
    </div>
  );
}
