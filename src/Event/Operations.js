import React from 'react'
import  { useState } from 'react'
import './Operations.css'
export default function Operations() 
{
   
        const[count,setcount]=useState(0);
        const incrementCount =()=>{
            setcount(count+1);
        };
        const decrementCount =()=>{
            setcount(count-1);
        };
        const resetCount =()=>{
            setcount(0);
        }; 
    
  return (
    
        <div className="container">
        <center>
                <h1>Counter:{count}</h1>
                <div className='bim'>
                <button onClick={incrementCount}>Increment</button>
                <button onClick={decrementCount}>decrement</button>
                <button onClick={resetCount}>reset</button>

            </div>
        </center>
        </div>
    
  )
}
