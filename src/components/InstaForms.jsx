import React from 'react'
import "../styles/styles.css"
function InstaForms() {
  return (
   
      <div className=' flex  justify-center items-center backdrop-blur-md  bg-white shadow-md md:w-1/2 h-80 w-60 lg:w-1/4 lg:h-1/2 rounded-md bg-'>
      <form >
    
       <label className=' m-2 block' >
            Firstname </label>
              <input className="border-1  block outline-none rounded-sm py-1 px-2  h-full w-full"type="text" name="Firstname" id="Firstname"/>    
   

          <label className=' m-2 block'>Email  </label>
         <input className="border-1   block outline-none  rounded-sm py-1 px-2  h-full w-full" type="text" name="email" id="email"/>
      
     
   

          <label className=' m-2 block'>Username  </label>

          <input className="border-1   block outline-none  rounded-sm py-1 px-2 h-full w-full" type="text" name="Username" id="Username"/>
    <button className='bg-blue-300 block my-3 rounded-md py-1 px-2'>Submit</button>
      </form>
         </div>
   
  )
}

export default InstaForms
