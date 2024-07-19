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


// import React from 'react';

// function CustomListItem({ children, overview, date, service }) {
//   return (
//     <li data-overview={overview} data-date={date} data-service={service}>
//       {children}
//     </li>
//   );
// }

// export default CustomListItem;

// 기존 날짜만
// import React from 'react';

// function CustomListItem({ children, date }) {
//   return (
//     <li data-date={date}>
//       {children}
//     </li>
//   );
// }

// export default CustomListItem;
