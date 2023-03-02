import React, { useEffect } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import styles from './styles.module.css';
import Translate, { translate } from "@docusaurus/Translate";

export default function Feedback({ resource }) {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }
 
  useEffect(() => {
    window.HappyReact.init();
  }, []);
 
  return (
    <details class='feedback'>
      <summary>
        {
          translate({
            id: "Feedback.feedbackMessage",
            message: "독스 문서는 편하게 이용했나요?",
            description: "독스 문서는 편하게 이용했나요?",
          })
        }
      </summary>
      <div className={styles.root}>
        <div
          className={styles.widget}
          data-hr-token="5f7b0825-7f1b-4400-9bbd-c483b64bb060"
          data-hr-resource={resource}
          data-hr-styles={JSON.stringify({
              container: styles.container,
              grid: styles.grid,
              cell: styles.cell,
              reaction: styles.reaction,
              footer: styles.footer
          })}
        />
      </div>
    </details>
  );
}