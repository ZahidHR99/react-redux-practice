import React, { useState, useMemo } from 'react';

export default function MemoUse() {
    const [count, setCount] = useState(0);
    
    const doubleCount = useMemo(() => {
        console.log('Calculating doubleCount...');
        return count * 2;
      }, [count]);
    
  return (
    <div>
        <p>Count: {count}</p>
        <p>Double Count: {doubleCount}</p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  )
}