import { useState } from "react"

function User() {
const [LogState,setLogState]=useState(false)
const handleLogin=()=>{
setLogState(true)
}
const handleLogout=()=>{
setLogState(false)
}

  return (
    <div>
      <button className="px-3 m-1.5 rounded-sm bg-amber-500" onClick={handleLogout}> LOG OUT</button>
      <button className="px-3 m-1.5 rounded-md bg-amber-500"  onClick={handleLogin}> LOG IN</button>
<div>{LogState?<h3>You have successfully logged in</h3>:<h3>You have logged out</h3>}</div>
    </div>
  )
}

export default User
