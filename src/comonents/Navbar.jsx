import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
export function Navbar() {
  return (
    <>
    <nav>
        <Link to="/">Home</Link>
         <Link to="/Products">Products</Link>
    </nav>
      
    </>
  )
}


