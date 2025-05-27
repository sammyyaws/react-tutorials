import { useState } from "react"
import type { userDataType } from "../Export.types"

const userData={
    name:"Gomerand",
    email:"Gigi@gmail.com"
}

function User() {
const [LogState,setLogState]=useState<userDataType>({} as userDataType )
const handleLogin=()=>{
setLogState(userData)
}

  return (
    <div>
         <button className="px-3 m-1.5 rounded-md bg-amber-500"  onClick={handleLogin}> LOG IN</button>
{/**since Logstate has two possible  types 
 * when accessing the state property we have to us ethe optional operator ? */}
<div>You have successfully logged in as {LogState?.name}</div>
    </div>
  )
}

export default User
