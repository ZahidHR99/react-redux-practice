import { useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react"

function App() {
  const [data, setData] = useState([]);
 
  useMemo(()=>{
    getData();
  },[])

  function getData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setData(json))
  }

  console.log(data)

  return (
    <>
     <h1>React - Redux</h1>

     {
      data?.map((row)=>(
        <>
          <h2>{row.title}</h2>
          <p>{row.body}</p>
        </>
      ))
     }

    </>
  )
}

export default App
