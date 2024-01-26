import React from 'react'
import { useState } from 'react'

export default function Basic() {
    const [inputValue, setInputvalue]=useState(" ");
    const[displayMessage, setDisplayMessage]=useState('');
    const handleChange = (event) => {
        setInputvalue(event.target.value);
    };
    const handleSubmit=(event) =>{
        event.preventDefault();
        setDisplayMessage(`You submitted: ${inputValue}`);
    };
  return (
<div><center>
   <p>{displayMessage}</p>
   <form onSubmit={handleSubmit}>
    <label>Type:</label>
    <input type='text' value={inputValue} onChange={handleChange}/>
    <button>Submit</button>
</form> 
</center>      
</div>
  )
}
