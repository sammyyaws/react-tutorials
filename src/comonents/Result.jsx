import React from 'react'
import { useNavigate } from 'react-router-dom'
function Result() {
  const navigate=useNavigate()
  return (
    <div>
      <h2>You successfully passed with first class</h2>
         <button onClick={()=>{navigate(-1)}}> back</button>
    </div>
  )
}

export default Result
