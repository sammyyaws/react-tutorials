import React from 'react'
import "../styles/styles.css"
import {formbox,label,input,button,inputerror}from '../styles/FormClass'
import { useFormik,} from 'formik'
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
              <input className={input} type="text" name="Firstname" id="Firstname" {...formik.getFieldProps("Firstname")}  />    
                    {formik.touched.Firstname && formik.errors.Firstname? <div className={inputerror}>{formik.errors.Firstname}</div>:null}

          <label htmlFor="email"className={label}>Email  </label>
            <input className={input} type="text" name="email" id="email" 
            {...formik.getFieldProps("email")} />
        {formik.touched.email && formik.errors.email? <div className={inputerror}>{formik.errors.email}</div>:null}

    
   

          <label htmlFor="Username"className={label}>Username  </label>
        <input className={input} type="text" name="Username" id="Username"
         {...formik.getFieldProps("Username")}/>
               {formik.touched.Username && formik.errors.Username? <div className={inputerror}>{formik.errors.Username}</div>:null}

    <button type="submit" className={button}>Submit</button>
      </form>
         </div>
   
  )
}

export default InstaForms
