import React from 'react'
import { useParams,useSearchParams } from 'react-router-dom'
function Dynamic() {
     const {ItemId}=useParams()
   const [searchParam,setSearchParam]=useSearchParams()
   const showActive=searchParam.get("filter")==="active"
  return (
    <div>
      This is a dynamic page
      <button onClick={()=>{setSearchParam({filter:"active"})}}>Filter</button>
       <button onClick={()=>{setSearchParam({})}}>reset</button>
       {showActive? <h1>We are active</h1>:<h4>We are not active</h4>}
    </div>
  )
}

export default Dynamic
