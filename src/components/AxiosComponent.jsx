import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AxiosComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setData(response.data);
          } catch (error) {
            // Handle errors
          }
        };
        fetchData();
    }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          {/* Render data */}
          <p>{item.title}</p>
          {/* Additional rendering */}
        </div>
      ))}
    </div>
  )
}
