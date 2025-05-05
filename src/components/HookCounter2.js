import React,{useState} from 'react'
/*  right way of changing state base in previous state */
function HookCountertwo (){

const [count,InCount]=useState(0)
    return(
        <div>
<button onClick={()=>InCount(prevCount=>prevCount+1)}>Likes{count}</button>

        </div>
    )
}
export default HookCountertwo;