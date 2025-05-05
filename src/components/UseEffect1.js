/* useffect application */
import React, {useState,useEffect} from 'react'

function EffectCount (){

useEffect(()=>{document.title=`Push ${count} times`})
 const [count,Incount]=useState(0)
    return(
        <div>
            <button onClick={()=>Incount(prevcount=>prevcount+1)}>Count</button>
        {count}
        </div>
    )
}
export default EffectCount;