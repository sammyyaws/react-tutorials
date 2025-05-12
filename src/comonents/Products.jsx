import React from 'react'
import { useNavigate } from 'react-router-dom'
function Products() {
  const navigate=useNavigate()
  return (
    <div>
      <h1>About</h1>
      <button onClick={()=>{navigate("/results")}}> check result</button>
    </div>
  )
}

export default Products
