import React,{useContext} from 'react'
import { GlobalContext } from './CompA'

function CompB() {
    const Globalconsumer=useContext(GlobalContext)
  return (
    <div>
       <button onClick={()=>Globalconsumer.DispatchContext("increment")}>Increase</button>
        <button onClick={()=>Globalconsumer.DispatchContext("Decrement")}>Decrease</button>
        <button onClick={()=>Globalconsumer.DispatchContext("Reset")}>Reset</button>

    </div>
  )
}

export default CompB
