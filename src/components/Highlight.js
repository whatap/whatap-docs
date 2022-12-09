import React from 'react';

export default function Status ({children}) {
  return (
    <code
      className={children}>
      {children}
    </code>
  )
}