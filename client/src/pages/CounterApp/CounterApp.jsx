import React, { useState } from 'react'

function CounterApp() {
    const [count,setCount]= useState(0);
  return (
    <div>
      <button onClick={()=>{setCount(count+1)}}>+</button>
      {count}
      <button onClick={()=>setCount(count-1)}>-</button>
      <button onClick={()=>setCount(0)}>reset</button>
    </div>
  )
}

export default CounterApp
