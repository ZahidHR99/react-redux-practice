import React, { useState } from 'react'

export default function StateUse() {
  const [data, setData] = useState('Hello State');
  
  return (
    <div>
      {data}
    </div>
  )
}
