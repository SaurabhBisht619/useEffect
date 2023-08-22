import React, { useEffect, useState } from 'react'

function App() {

  const [no,setNo] = useState(2);
  const [data,setData] = useState([]);

  useEffect(()=>{
    //callback hell and trust issue with callback
    // promise => solution of callback hell and as well as provide trust pending,fulfilled,reject.
    // extension of promise => async/await function

    async function getData() {
        
        const data = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${no}&idStarts=1001`);
        const res = await data.json();
        setData(res);
    }

    getData();

  },[no])

  return (
    <div>
      <button onClick={()=>setNo(no+2)}>Click me {no} times</button>
      {
        data.map((val)=>{
          return(
            <div style={{display:"flex", gap:"100px"}}>
            <h1>{val.firstName}</h1>
            <h1>{val.lastName}</h1>
            </div>
          )
        })
      }
    </div>
  )
}

export default App
