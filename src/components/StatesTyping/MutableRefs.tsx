import { useRef,useEffect,useState} from "react"

function MutableRefs() {
    const timeRef=useRef<number|undefined>(undefined);
  const [timer,setTimer]=useState(0)

  const Stoptimer=()=>{
    window.clearInterval(timeRef.current)
  }
    useEffect(()=>{
  timeRef.current=window.setInterval(()=>{
    setTimer((timer)=>timer+1)
  },1000)
  return ()=>{
    Stoptimer()
  }      
    },
    [])
  return (
    <div>
      Time Counter-{timer}
    </div>
  )
}

export default MutableRefs
