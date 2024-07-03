import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import OpenFolderIcon from './openFolderIcon';
import CloseFolderIcon from './CloseFolderIcon';

export default function Filetree({ children, name, type }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia('print');

    const handlePrintChange = (event) => {
      if (event.matches) {
        setIsOpen(true);
      }
    };

    mediaQueryList.addListener(handlePrintChange);

    // Clean up listener on component unmount
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