import React, { useCallback } from 'react'
import { useState } from 'react'
const Callbacks=()=>{
    const[count,setCount]=useState(0);
const handleclick=useCallback(()=>{
    console.log(`Button clicked.Count:${count}`);
} ,[count]);


{
  return (
    <div>
        <button onClick={handleclick}>Click me</button>
        <p>Count:{count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
 
    </div>
  )
};
};
export default Callbacks;
