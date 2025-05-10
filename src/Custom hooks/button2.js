import React,{useState} from 'react'
import useTitle from './useTitle';
function Button2() {
const [count,setCount]=useState(0);

useTitle(count)
  return (
    <div>
      <button onClick={()=>setCount(prevcount=>prevcount+1)}>Title count {count}</button>
    </div>
  )
}

export default Button2
