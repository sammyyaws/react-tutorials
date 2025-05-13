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


   <div>
 
Praesent lacinia magna eros, a finibus eros interdum sit amet.
 Donec convallis, nulla quis sodales gravida, dolor nunc tempus augue, 
 sit amet hendrerit dolor ante a est. Donec vitae pretium velit. 
 In luctus consectetur lectus et imperdiet. Ut sit amet tincidunt arcu. 
 Etiam aliquam velit dignissim libero varius, et fringilla urna sodales.
  Mauris sit amet ipsum imperdiet, mattis lorem sit amet, aliquam dolor.
Generated 20 paragraphs, 1738 words, 11703 bytes of Lorem Ipsum
   </div>
    </div>
  )
}

export default Products
