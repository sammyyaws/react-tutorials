import React,{useRef,useEffect} from 'react'

function FocusRef() {

const FRef=useRef(null)
    useEffect (()=>{
   FRef.current.focus()
    },[])
  return (
    <div>
      <input type="text"ref={FRef}/>
    </div>
  )
}

export default FocusRef
