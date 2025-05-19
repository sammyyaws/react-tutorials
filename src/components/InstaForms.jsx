import React from 'react'
import "../styles/styles.css"
import {formbox,label,input,button,inputerror,}from '../styles/FormClass'
import { Formik,FastField, Form,Field,ErrorMessage,FieldArray} from 'formik'
import * as Yup from 'yup'
//formik object definitions
//state mangement property


const initialValues= {
    Firstname:'',
    email:'',
  
    Address:"",


  }




  //onsubmit property
  const onSubmit=values=>{
    console.log(values)
  }


//validating with yup
const validationSchema= Yup.object({
  
  email:Yup.string().email("Invalid email").required("Required"),
 Firstname:Yup.string().required(),
  Address:Yup.string().required(),
  
  phNumbers:Yup.array().of(Yup.string().required("required"))
  
})
const validateFirstname=value=>{
  let error
  if (!value) {
  error="Required"
  }
  return error
}


function InstaForms() {
   return (
   
      <div className={formbox}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validateOnMount validationSchema={validationSchema}>
      {formik=>{
        console.log(formik)
        return(
      <Form >
    
       <label htmlFor="Firstname"className={label} >
            Firstname </label>
              <FastField className={input} type="text" name="Firstname" id="Firstname" validate= {validateFirstname} />   
             <ErrorMessage component="div" name="Firstname" className={inputerror}/>
             {/**email field */}
          <label htmlFor="email"className={label}>Email  </label>
            <FastField className={input} type="text" name="email" id="email" 
         />
       <ErrorMessage  component="div"name="email" className={inputerror}/>
    
      {/*  adress field using the render props */}
     <label htmlFor="Address"className={label}>Address  </label>
            <FastField name="Address">
          {
            (props)=>{
          
              const {meta,field}=props
              return (
                <>
                  <input className={input} type="text" id='Address' {...field}/>
                 { meta.touched && meta.error ? <div className={inputerror} >{meta.error}</div>:null}
                 </>
              )

            }
          }

            </FastField>
      
          

{/*       FieldArray Component 
 */}    
   
    <button type="submit" disabled={!(formik.isValid && formik.dirty )}className={button}>Submit</button>

      </Form>)
      }}</Formik>
         </div>
   
  )
}

export default InstaForms
