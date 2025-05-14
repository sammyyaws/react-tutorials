import React from 'react'
import "../styles/styles.css"
import {formbox,label,input,button,inputerror}from '../styles/FormClass'
import { useFormik,ErrorMessage } from 'formik'
import * as Yup from 'yup'
//formik object definitions
//state mangement property
const initialValues= {
    Firstname:'',
    email:'',
    Username:''
  }




  //onsubmit property
  const onSubmit=values=>{
    console.log(values)
  }
//custom validating property function
 /*  const validate=values =>{
    let errors={}
      if(!values.Username){
      errors.Username="Required"
    }
    //validating the firstname
    if(!values.Firstname){
      errors.Firstname="Required"
    }
//validating email
if (!values.email){
   errors.email="This field is required"
} else if (!/[@.]/.test(values.email) ){
 errors.email="you didint incude @ or ."
  }
   else if(/[^a-zA-Z0-9@.]/.test(values.email)){
    errors.email="Check if you didnt include any symbol except @ or ."
  }
  else if(/[\s]/.test(values.email)){
    errors.email="No Spaces allowed"
  }
return errors
  } */

//validating with yup
const validationSchema= Yup.object({
  Firstname:Yup.string().required("Required"),
  email:Yup.string().email("Invalid email").required("Required"),
  Username:Yup.string().required("Required")
})













function InstaForms() {
  //formik hook call and use
const formik=useFormik({
 initialValues,
  onSubmit,
  validationSchema,
})

console.log(formik.touched)






  return (
   
      <div className={formbox}>
      <form onSubmit={formik.handleSubmit}>
    
       <label htmlFor="Firstname"className={label} >
            Firstname </label>
              <input className={input} type="text" name="Firstname" id="Firstname" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.Firstname}/>    
                    {formik.touched.Firstname && formik.errors.Firstname? <div className={inputerror}>{formik.errors.Firstname}</div>:null}

          <label htmlFor="email"className={label}>Email  </label>
            <input className={input} type="text" name="email" id="email" onBlur={formik.handleBlur}onChange={formik.handleChange} value={formik.values.email} />
        {formik.touched.email && formik.errors.email? <div className={inputerror}>{formik.errors.email}</div>:null}

    
   

          <label htmlFor="Username"className={label}>Username  </label>
        <input className={input} type="text" name="Username" id="Username" onBlur={formik.handleBlur}onChange={formik.handleChange} value={formik.values.Username}/>
               {formik.touched.Username && formik.errors.Username? <div className={inputerror}>{formik.errors.Username}</div>:null}

    <button type="submit" className={button}>Submit</button>
      </form>
         </div>
   
  )
}

export default InstaForms
