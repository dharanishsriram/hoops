import React from 'react'
import { useState } from 'react'
export default function Counter() {
    const [count,setCount]=useState(0);
    const [counts,setCounts]=useState(0);
  return (
    <div><center>
        <p>{count}</p>
        <p>{counts}</p>
        <button onClick={()=>setCount(count+25)}>click click to add25</button>
        <button onClick={()=> setCounts(counts-25)}>click to sub25</button>
        <button onClick={()=> setCount(count*25)}>multiply</button>
        <button onClick={()=> setCounts(count+counts)}>count + counts</button>
        </center>
        </div>
  )
}
