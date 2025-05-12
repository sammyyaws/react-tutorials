import React from 'react'
import { useParams } from 'react-router-dom'
function DynaRoute1() {
    const {ItemId}=useParams()
   
  return (
    <div>
      This is dynamic page number {ItemId}
    </div>
  )
}

export default DynaRoute1
