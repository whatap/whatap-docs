import React, { useEffect } from 'react';
import './src/css/custom.scss'; 

const ChangelogComponent = ({ children }) => {
  useEffect(() => {
    const dateElements = document.querySelectorAll('.changelog-date');
    const seenDates = new Set();

    dateElements.forEach((el) => {
      const dateText = el.textContent.trim();
      if (seenDates.has(dateText)) {
        el.classList.add('changelog-date-dup');
        el.setAttribute('data-dup', 'true');
      } else {
        seenDates.add(dateText);
      }
    });
  }, []);

  return <div>{children}</div>;
};

export default ChangelogComponent;


// import React, { useEffect } from 'react';
// import './src/css/custom.scss'; 

// const ChangelogComponent = ({ children }) => {
//   useEffect(() => {
//     const dateElements = document.querySelectorAll('.changelog-date');
//     const dateCounts = {};

//     dateElements.forEach((el) => {
//       const dateText = el.textContent.trim();
//       if (dateCounts[dateText]) {
//         dateCounts[dateText].push(el);
//       } else {
//         dateCounts[dateText] = [el];
//       }
//     });

//     Object.keys(dateCounts).forEach((date) => {
//       const elements = dateCounts[date];
//       elements.forEach((el, index) => {
//         if (index > 0) {
//           el.classList.add('changelog-date-dup');
//         }
//       });
//     });
//   }, []);

//   return <div>{children}</div>;
// };

// export default ChangelogComponent;