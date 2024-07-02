import React from 'react';

function CustomListItem({ children, date }) {
  return (
    <li data-date={date}>
      {children}
    </li>
  );
}

export default CustomListItem;
