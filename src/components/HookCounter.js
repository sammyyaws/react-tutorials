import React, { useState } from 'react'

const HookCounter=()=>{
    const [count,increaseCount]=useState(0)
return(
    <div>
    <h1>count:{count}</h1>
   <button onClick={()=>{increaseCount(count+1)}}>Count</button>
    </div>
)
}

export default HookCounter;