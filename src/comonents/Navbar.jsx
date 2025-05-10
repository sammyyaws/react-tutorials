import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'
export function Navbar() {
  return (
    <>
    <nav>
        <NavLink to="/">Home</NavLink>
         <NavLink to="/Products">Products</NavLink>
    </nav>
      
    </>
  )
}


