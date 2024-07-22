import React, { useEffect, useState } from 'react';

const ImportJson = ({ filePath, product, type }) => {
  const [filteredLists, setFilteredLists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = filePath;

        console.log('Original Data:', data); // Debug: Check original data

        // Convert type filter into an array
        const types = type.split(',').map(t => t.trim());

        console.log('Product Filter:', product); // Debug: Check product filter
        console.log('Type Filters:', types); // Debug: Check type filters

        // Filter data based on product and type
        const filtered = data.reduce((acc, item) => {
          const filteredLists = item.Lists.filter(list => 
            list.product && list.product.trim() === product && list.type && types.includes(list.type.trim())
          );
          if (filteredLists.length > 0) {
            acc.push({
              ...item,
              Lists: filteredLists,
            });
          }
          return acc;
        }, []);

        console.log('Filtered Data:', filtered); // Debug: Check filtered data
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
            <h2>{note.ver} - {note.date}</h2>
            <ul>
              {note.Lists.map(list => (
                <li key={list.ver}>
                  <strong>{list.product}</strong> ({list.type}): 
                  <span dangerouslySetInnerHTML={{ __html: list.desc[0] }} />
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