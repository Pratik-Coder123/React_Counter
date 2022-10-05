import React, { useState } from 'react'

function Counter1() {
    const [num1, setNum] = useState(null)

    const getvalue = (e) => {
        let n = e.target.value;
        setNum(parseInt(n));  
    
    }
    let Increment = () => {
        setNum(num1+1);
      
    }
    return (
        <>
            <input type="number" placeholder='Enter num' value={num1} onChange={getvalue} />
            <button onClick={Increment}>Increment</button>

        </>
    )
}

export default Counter1