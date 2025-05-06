/* working with useeffect to get the mouse coordinate on the browser window
 */
import React,{useEffect,useState} from "react"

function MouseCoordinate (){
    const[x,setX]=useState(0)
    const[y,setY]=useState(0)

    const getMousePoint=(e)=>{
        console.log("mouseOVer")
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        window.addEventListener('mousemove',getMousePoint)

        return ()=>{

            console.log("Umounted component")
            window.removeEventListener('mousemove',getMousePoint)
        }
    },[])

    return(
        <div>X:{x} Y:{y}</div>
    )
}
export default MouseCoordinate;