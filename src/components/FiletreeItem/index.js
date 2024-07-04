import React from 'react';
import styles from './styles.module.css';
import OpenFolderIcon from './openFolderIcon';
import CloseFolderIcon from './closeFolderIcon';
import FileIcon from './fileIcon';

export default function FiletreeItem({ children, name, type }) {
  const renderIcon = () => {
    if (type === 'file') {
      return <FileIcon />;
    } else if (type === 'folder') {
      return <OpenFolderIcon />;
    }
    return null;
  };
  const hasChildFiletreeItems = React.Children.toArray(children).some(
    (child) => React.isValidElement(child) && child.type === FiletreeItem
  );

  return (
    <li className={styles.fileitem} type={type}>
      <span className={styles.name}>
        <div className={styles.ico}>
          {renderIcon()}
        </div>
        {name}
      </span>
      {type === 'folder' && hasChildFiletreeItems ? (
        <ul>
          {React.Children.map(children, (child, index) => (
            React.isValidElement(child) && child.type === FiletreeItem ? (
              <li key={index}>{child}</li>
            ) : null
          ))}
        </ul>
      ) : (
        <span className={styles.desc}>{children}</span>
      )}
    </li>
  );
}