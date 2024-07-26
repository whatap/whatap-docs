import React, { useEffect, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

// 보이지 않는 문자 제거 함수
const cleanString = (str) => {
  return str.replace(/[\u200B-\u200D\uFEFF]/g, '').trim();
};

const ImportJson = ({ filePath, product, type, sort }) => {
  const [filteredLists, setFilteredLists] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (product && sort) {
      setError('Cannot use both "product" and "sort" at the same time.');
      return;
    }

    const fetchData = async () => {
      try {
        const data = filePath;

        // type 필터를 배열로 변환
        const types = type ? type.split(',').map(t => t.trim()) : null;

        // product와 type을 기반으로 데이터 필터링
        const filtered = data.reduce((acc, item) => {
          const filteredLists = item.Lists.filter(list => {
            const cleanedProduct = cleanString(list.product);
            const cleanedType = cleanString(list.type);

            const isProductMatch = product ? cleanedProduct === product : true;
            const isTypeMatch = types ? types.includes(cleanedType) : true;

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

        setFilteredLists(filtered);
      } catch (error) {
        console.error('Error fetching the JSON data', error);
      }
    };

    fetchData();
  }, [filePath, product, type, sort]);

  if (error) {
    return <p>{error}</p>;
  }

  let sortedData = filteredLists;
  const linkIcon = useBaseUrl('/img/ic-link.svg');

  if (sort === 'date') {
    sortedData = filteredLists.reduce((acc, note) => {
      const dateKey = new Date(note.date).toISOString().split('T')[0]; // 날짜를 YYYY-MM-DD 형식으로 변환
      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }
      note.Lists.forEach(list => {
        acc[dateKey].push({ ...list, date: note.date, url: note.url, ver: note.ver });
      });
      return acc;
    }, {});

    sortedData = Object.keys(sortedData)
      .sort((a, b) => new Date(b) - new Date(a)) // 날짜를 내림차순으로 정렬
      .map(dateKey => ({
        date: dateKey,
        products: sortedData[dateKey].reduce((acc, list) => {
          const cleanedProduct = cleanString(list.product);
          if (!acc[cleanedProduct]) {
            acc[cleanedProduct] = [];
          }
          acc[cleanedProduct].push(list);
          return acc;
        }, {}),
      }));
  }

  return (
    <div className='release-items'>
      {filteredLists.length === 0 ? (
        <p>No data available for the given filters.</p>
      ) : (
        sort === 'date' ? (
          sortedData.map(dateGroup => (
            <div key={dateGroup.date} className='releasegroup'>
              {Object.keys(dateGroup.products).map(productKey => (
                <div key={productKey} className="productrelease">
                  <div className='subgroup'>
                    <p className='date'>{dateGroup.date}</p>
                    <p className='product'>{productKey}</p>
                    {dateGroup.products[productKey].map((list, index, array) => (
                      <div key={`${list.ver}-${index}`} className='rlist'>
                        <div>
                          {(index === 0 || list.ver !== array[index - 1].ver) && (
                            <a href={`${list.url}#${list.hash}`} className='goto' target='_blank'>
                              {list.ver}
                              <img src={linkIcon} width="18px" height="18px" className='ico-link' />
                            </a>
                          )}
                        </div>
                        <div className="releaselist" dangerouslySetInnerHTML={{ __html: list.desc }} />
                        {list.details && (
                          <div dangerouslySetInnerHTML={{ __html: list.details }} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          filteredLists.map(note => (
            <div key={note.ver}>
              <h2>{note.ver}</h2>
              <div>{note.date}</div>
              <ul>
                {note.Lists.map((list, index) => (
                  <li key={`${list.ver}-${index}`}>
                    <div className="releaselist" dangerouslySetInnerHTML={{ __html: list.desc }} />
                    {list.details && (
                      <div dangerouslySetInnerHTML={{ __html: list.details }} />
                    )}
                    <code className='changelog-service'><a href={`${note.url}#${list.hash}`} target='_blank'>{list.product} | {list.ver}</a></code>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )
      )}
    </div>
  );
};

export default ImportJson;