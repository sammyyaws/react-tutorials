/* this concept can be use in making a to do list */


import React,{useState} from 'react'


function HookswithArrays(){
    const [inputValue,PullValue]=useState('')
    const [items,setItem]=useState([])
const addItem=()=>{
    {setItem([...items,{id:items.length,value:inputValue}])}
}    
    return(
        <div>
        <input type="text" value={inputValue} onChange={(e)=>PullValue(e.target.value)}/>
        <button onClick={addItem}>Add to list</button>
            <ul>
                {items.map(item=>{
                    return(<li key={item.id}>{item.value}</li>)
                })}
            </ul>
        </div>
    )
}

export default HookswithArrays;