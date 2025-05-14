import React from 'react'
import "../styles/styles.css"
import {formbox,label,input,button}from '../styles/FormClass'
import { useFormik } from 'formik'

function InstaForms() {
const formik=useFormik({
  initialValues:{
    Firstname:'',
    email:'',
    Username:''
  },
  onSubmit:values=>{
    console.log(values)
  }
})








  return (
   
      <div className={formbox}>
      <form onSubmit={formik.handleSubmit}>
    
       <label className={label} >
            Firstname </label>
              <input className={input} type="text" name="Firstname" id="Firstname" onChange={formik.handleChange} value={formik.values.Firstname}/>    
   

          <label className={label}>Email  </label>
            <input className={input} type="text" name="email" id="email" onChange={formik.handleChange} value={formik.values.email} />
      
     
   

          <label className={label}>Username  </label>

          <input className={input} type="text" name="Username" id="Username" onChange={formik.handleChange} value={formik.values.Username}/>
    <button type="submit" className={button}>Submit</button>
      </form>
         </div>
   
  )
}

export default InstaForms
