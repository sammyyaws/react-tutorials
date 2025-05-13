import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'
function DashBooard() {
  
  const auth=useAuth()
  const navigate=useNavigate()
  const handleLogout=()=>{
   auth.logout()
   navigate("/")
  }
  return (
    <div>
    <h1> Welcome {auth.user}This is my DashBooard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default DashBooard
