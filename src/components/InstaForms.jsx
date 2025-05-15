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
    Comment:'',
    Address:""
  }




  //onsubmit property
  const onSubmit=values=>{
    console.log(values)
  }


//validating with yup
const validationSchema= Yup.object({
  Firstname:Yup.string().required("Required"),
  email:Yup.string().email("Invalid email").required("Required"),
  Comment:Yup.string().required("Required"),
  Address:Yup.string().required()
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
    
      {/*  adress field using the render props */}
     <label htmlFor="Address"className={label}>Address  </label>
            <Field name="Address">
          {
            (props)=>{
              console.log(props)
              const {meta,field,forms}=props
              return (
                <>
                  <input className={input} type="text" id='Address' {...field}/>
                 { meta.touched && meta.error ? <div className={inputerror} >{meta.error}</div>:null}
                 </>
              )

            }
          }

            </Field>
      
          <label htmlFor="Comment"className={label}>Comment  </label>
        <Field as="textarea" className={input} type="text" name="Comment" id="Comment"
        />
         <ErrorMessage component="div" name="Comment" className={inputerror}/>
    <button type="submit" className={button}>Submit</button>
      </Form></Formik>
         </div>
   
  )
}

export default InstaForms
