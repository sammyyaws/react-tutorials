/* useffect application */
import React, {useState,useEffect} from 'react'

function EffectCount (){
    const [count,Incount]=useState(0)
useEffect(()=>{document.title=`Push ${count} times`},[count])
 
    return(
        <div>
            <button onClick={()=>Incount(prevcount=>prevcount+1)}>Count</button>
        {count}
        </div>
    )
}
export default EffectCount;