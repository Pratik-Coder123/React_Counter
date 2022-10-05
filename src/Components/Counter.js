import React, { useState } from 'react'

function Counter() {

    let [Count, SetCount] = useState(0);
    const Increment = () => {
        SetCount(Count + 1);
    }
    const Decrement = () => {
        SetCount(Count - 1);
    }
    const Reset = () => {
        SetCount(Count = 0);
    }
  
  
    return (
        <>
        
            <h1>{Count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </>
    )
}

export default Counter