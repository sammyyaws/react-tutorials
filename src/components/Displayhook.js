/* cleanup function for useUffect when umounting */
import React,{useState,useEffect} from "react"
import MouseCoordinate from "./MouseHook"
function DisplayHook(){
    const [display,setDisplay]=useState(true)

    return(
        <div>

        <button onClick={()=>{setDisplay(!display)}}>Toggle Display</button>
       {display &&<MouseCoordinate/>}
        </div>
    )
}
export default DisplayHook