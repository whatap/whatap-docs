// import React from 'react';

// function CustomListItem({ children, date, hidden }) {
//   const listItemStyle = {
//     display: hidden ? 'none' : 'block',
//   };

//   return (
//     <li data-date={date} style={listItemStyle}>
//       {children}
//     </li>
//   );
// }

// export default CustomListItem;

import React from 'react';

function CustomListItem({ children, date }) {
  return (
    <li data-date={date}>
      {children}
    </li>
  );
}

export default CustomListItem;
