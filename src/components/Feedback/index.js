import React, { useEffect, useState } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import styles from './styles.module.css';
import Translate, { translate } from "@docusaurus/Translate";

export default function Feedback({ resource }) {
  const [reaction, setReaction] = useState(null);

  const isReacted = reaction === 'Yes' || reaction === 'No';
  const _resource = String(resource).replace(/\//g, '-');
  
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }
  
  const handleReaction = (params) => {
    setReaction(params.icon);
  };

  // useEffect(() => {
  //   window.HappyReact.init();
  // }, []);
  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      window.HappyReact?.init({
        onReaction: handleReaction,
      });
    }
  }, []);
 
  return (
    <details class='feedback'>
      <summary>
        {
          translate({
            id: "Feedback.feedbackMessage",
            message: "이 페이지가 마음에 드셨나요?",
            description: "Was this page helpful?",
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