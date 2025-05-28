import { useContext } from "react"
import { userContext } from "./ContextUser"



function UserCon() {
const UserContext=useContext(userContext)



const handleLogin=()=>{
if (UserContext){
    UserContext.setUser({
        email:"jane@gmail.com",
        firstname:"janet"
    })
}
}
const handleLogout=()=>{
if (UserContext){
    UserContext.setUser(null)
}
}

  return (
    <div>
        <button  className="mx-2 p-1.5 bg-cyan-600" onClick={handleLogin}>in</button>
          <button className="mx-2 p-1.5 bg-cyan-600" onClick={handleLogout}>out</button>
      <div>{UserContext?.user?.email}</div>
        <div>{UserContext?.user?.firstname}</div>
    </div>
  )
}

export default UserCon
