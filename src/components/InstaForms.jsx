import React from 'react'
import "../styles/styles.css"
import {formbox,label,input,button,inputerror}from '../styles/FormClass'
import { Formik, Form,Field,ErrorMessage} from 'formik'
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
  








  return (
   
      <div className={formbox}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      <Form >
    
       <label htmlFor="Firstname"className={label} >
            Firstname </label>
              <Field className={input} type="text" name="Firstname" id="Firstname"   />   
             <ErrorMessage component="div" name="Firstname" className={inputerror}/>
             {/**email field */}
          <label htmlFor="email"className={label}>Email  </label>
            <Field className={input} type="text" name="email" id="email" 
         />
       <ErrorMessage  component="div"name="email" className={inputerror}/>
    
   

          <label htmlFor="Username"className={label}>Username  </label>
        <Field className={input} type="text" name="Username" id="Username"
        />
         <ErrorMessage component="div" name="Username" className={inputerror}/>
    <button type="submit" className={button}>Submit</button>
      </Form></Formik>
         </div>
   
  )
}

export default InstaForms
