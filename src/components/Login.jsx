import React,{useState} from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate=useNavigate()
    const[user,setUser]=useState('')
/*     At this point we are consuming the context
 */    const Auth=useAuth()
        
    const handleLogin=()=>{
    Auth.login(user)
    navigate("/")
    }
  return (
    <div>
    <label>
      Username : <input type="text" onChange={(e)=>setUser(e.target.value)}/>
      </label>
      <button onClick={handleLogin}> Login</button>
    </div>
  )
}

export default Login
