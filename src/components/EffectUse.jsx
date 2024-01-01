import { useState } from "react";
import { useEffect } from "react"

export default function EffectUse() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    getData();
  },[])

  function getData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setData(json))
  }

  return (
    <div>
      <h2>Use Effect</h2>
          {
            data?.map((row)=>(
              <>
                <h2>{row.title}</h2>
                <p>{row.body}</p>
              </>
            ))
          }
    </div>
  )
}
