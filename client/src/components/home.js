import React, { useEffect, useState } from 'react';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make a GET request to your API
    fetch('http://localhost:5000/home') // Replace with the correct API URL
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Water Sample Attributes</h1>
      <ul>
        {data.length > 0 && Object.keys(data[0]).map((attributeName) => (
          attributeName !== '_id' && (
            <li key={attributeName}>
              <strong>{attributeName}:</strong> {data[0][attributeName]}
            </li>
          )
        ))}
      </ul>
    </div>
  );
};

export default Home;