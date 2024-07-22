import React, { useEffect, useState } from 'react';

// 보이지 않는 문자 제거 함수
const cleanString = (str) => {
  return str.replace(/[\u200B-\u200D\uFEFF]/g, '').trim();
};

const ImportJson = ({ filePath, product, type }) => {
  const [filteredLists, setFilteredLists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = filePath;

        // console.log('Original Data:', data); // 디버그: 원본 데이터 확인

        // type 필터를 배열로 변환
        const types = type.split(',').map(t => t.trim());

        // console.log('Product Filter:', product); // 디버그: product 필터 확인
        // console.log('Type Filters:', types); // 디버그: type 필터 확인

        // product와 type을 기반으로 데이터 필터링
        const filtered = data.reduce((acc, item) => {
          const filteredLists = item.Lists.filter(list => {
            const cleanedProduct = cleanString(list.product);
            const cleanedType = cleanString(list.type);
            const isProductMatch = cleanedProduct === product;
            const isTypeMatch = types.includes(cleanedType);

            // console.log('List Product:', cleanedProduct, 'Expected Product:', product);
            // console.log('Product Match:', isProductMatch);
            // console.log('List Type:', cleanedType, 'Type Match:', isTypeMatch);

            return isProductMatch && isTypeMatch;
          });

          if (filteredLists.length > 0) {
            acc.push({
              ...item,
              Lists: filteredLists,
            });
          }
          return acc;
        }, []);

        // console.log('Filtered Data:', filtered); // 디버그: 필터링된 데이터 확인
        setFilteredLists(filtered);
      } catch (error) {
        console.error('Error fetching the JSON data', error);
      }
    };

    fetchData();
  }, [filePath, product, type]);

  return (
    <div>
      <h1>Release Notes</h1>
      {filteredLists.length === 0 ? (
        <p>No data available for the given filters.</p>
      ) : (
        filteredLists.map(note => (
          <div key={note.ver}>
            <h2>{product}</h2>
            <ul>
            {note.Lists.map(list => (
                <li key={list.ver}>
                  <div dangerouslySetInnerHTML={{ __html: list.desc }} />
                  {list.details && (
                    <div dangerouslySetInnerHTML={{ __html: list.details }} />
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default ImportJson;
