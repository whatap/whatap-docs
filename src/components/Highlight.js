import React from 'react';

export default function Status ({children, priority}) {
  if (priority) {
    return (
      <code
        className={children}
        type={priority}
      >
        {children}
      </code>
    )
  }
  return (
    <code
      className={children}
      >
      {children}
    </code>
  )
}