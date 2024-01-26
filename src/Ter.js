import React, { Component, useState } from 'react'
    
        const Greeting =({ isUserloggedIn})=>(
        <div>
            {isUserloggedIn ?(<h1>welcome</h1>):(<h1>login again</h1>)}
        </div>)

const Ter =() => {
    const[userLoggedIn, setuserLoggedIn]= useState(false);
    return(
        <div>
            <Greeting isUserloggedIn= {userLoggedIn}/>
            <button onClick={()=>
            setuserLoggedIn(!userLoggedIn)}>
                login</button>   
         </div>
         );
};

export default Ter
