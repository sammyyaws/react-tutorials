import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
function Products() {
  
  return (
    <div>
    <input type="text" placeholder='Search'/>
 <nav>
  <NavLink to="Top">Top</NavLink>
  <NavLink to= "Latest">Latest</NavLink>
 </nav>
   <Outlet/>
    </div>
  )
}

export default Products
