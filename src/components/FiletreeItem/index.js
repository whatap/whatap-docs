import React from 'react';
import styles from './styles.module.css';

export default function FiletreeItem({ children, name, type }) {
  return (
    <li className={styles.fileitem} type={type}>
      <span className={styles.name}>{name}</span>
      <span className={styles.desc}>{children}</span>
    </li>
  );
}