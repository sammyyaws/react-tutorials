import { useState } from "react"
import type { userDataType } from "../Export.types"

const userData={
    name:"Gomerand",
    email:"Gigi@gmail.com"
}

function User() {
const [LogState,setLogState]=useState<userDataType|null>(null)
const handleLogin=()=>{
setLogState(userData)
}
const handleLogout=()=>{
setLogState(null)
}

  return (
    <div>
      <button className="px-3 m-1.5 rounded-sm bg-amber-500" onClick={handleLogout}> LOG OUT</button>
      <button className="px-3 m-1.5 rounded-md bg-amber-500"  onClick={handleLogin}> LOG IN</button>
<div>{LogState?<h3>You have successfully logged in as {LogState.name}</h3>:<h3>You have logged out</h3>}</div>
    </div>
  )
}

export default User
