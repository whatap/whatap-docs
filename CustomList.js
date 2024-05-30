// CustomList.js
import React from 'react';
import CustomListItem from './CustomListItem';

function CustomList({ items }) {
  const uniqueDates = [];
  
  return (
    <ul>
      {items.map((item, index) => {
        // 중복된 날짜를 확인하고 처리
        if (!uniqueDates.includes(item.date)) {
          uniqueDates.push(item.date);
          return (
            <CustomListItem key={index} date={item.date}>
              {item.content}
            </CustomListItem>
          );
        }
        return (
          <CustomListItem key={index} date={item.date} hidden />
        );
      })}
    </ul>
  );
}

export default CustomList;

