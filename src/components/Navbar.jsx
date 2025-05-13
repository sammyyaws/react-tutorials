import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'
import { useAuth } from './Auth'
export function Navbar() {
  const setStyle=({isActive})=>{
   return({
     color: isActive? "aliceblue": "black"
   })
  }

  const auth=useAuth()
  return (
    <>
    <nav className='mainNav'>
        <NavLink style={setStyle} to="/">Home</NavLink>
         <NavLink style={setStyle} to="/Products">Products</NavLink>
          <NavLink style={setStyle} to="/DashBoard">DashBoard</NavLink>
          {!auth.user && (<NavLink style={setStyle} to="/Login">Login</NavLink>) }
    </nav>
      
    </>
  )
}


