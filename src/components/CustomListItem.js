import React from 'react';

function CustomListItem({ children, overview, date, service }) {
  const listItemProps = {};
  
  if (overview) {
    listItemProps['data-overview'] = overview;
  }
  if (date) {
    listItemProps['data-date'] = date;
  }
  if (service) {
    listItemProps['data-service'] = service;
  }

  return (
    <li {...listItemProps}>
      {children}
    </li>
  );
}

export default CustomListItem;