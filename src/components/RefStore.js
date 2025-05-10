import React,{useState,useEffect,useRef} from 'react'

function RefStore() {
    const StopperRef=useRef()
const [time,setTime]=useState(0)
useEffect(()=>{

    StopperRef.current =setInterval(()=>{
        setTime(prevtime=>prevtime+1)
    },1000)
 return ()=>{clearInterval(StopperRef.current)}
},[])

  return (
    <div>
     <h1>{time}</h1> 
     <button onClick={()=>{clearInterval(StopperRef.current)}}> Stop </button>
    </div>
  )
}

export default RefStore
