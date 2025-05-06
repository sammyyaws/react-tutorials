import React,{useState,useEffect} from "react"

function AutoCount (){
const[count,Incount]=useState(0)
useEffect(()=>{
    const interval=setInterval(()=>{Incount(count+1)},1000)

    return ()=>{
        clearInterval(interval)
    }
},[count])
return(
    <div>
    <h2>{count}</h2>
    </div>
)
}
export default AutoCount;