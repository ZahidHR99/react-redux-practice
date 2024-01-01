import React, { useState, useEffect, useMemo } from 'react';

export default function MemoUse() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const fetchedData = await response.json();
      setData(fetchedData);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch data when the component mounts

  const memoizedData = useMemo(() => data, [data]);

  console.log(memoizedData)

  return (
    <div>
        {isLoading ? (
        <p>Loading...</p>
        ) : (
        <div>
            {memoizedData && (
            <ul>
                {memoizedData.map((item, index) => (
                <li key={index}>{item.title}</li>
                ))}
            </ul>
            )}
        </div>
        )}
    </div>
  )
}
