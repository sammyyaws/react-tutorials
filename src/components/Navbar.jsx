import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'
export function Navbar() {
  const setStyle=({isActive})=>{
   return({
     color: isActive? "aliceblue": "black"
   })
  }
  return (
    <>
    <nav className='mainNav'>
        <NavLink style={setStyle} to="/">Home</NavLink>
         <NavLink style={setStyle} to="/Products">Products</NavLink>
    </nav>
      
    </>
  )
}


