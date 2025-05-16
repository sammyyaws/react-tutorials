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
  
    Address:"",
    socials:{
     whatsapp:" ",
     instagram:" "
    },
    phonenumbers:['','']
  }




  //onsubmit property
  const onSubmit=values=>{
    console.log(values)
  }


//validating with yup
const validationSchema= Yup.object({
  Firstname:Yup.string().required("Required"),
  email:Yup.string().email("Invalid email").required("Required"),
 
  Address:Yup.string().required(),
  socials:Yup.object ({
  whatsapp:Yup.string().required("required"),
  instagram:Yup.string().required("required")
  }),
  phonenumbers:Yup.array().of(Yup.string().required("Required"))
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
          
              const {meta,field}=props
              return (
                <>
                  <input className={input} type="text" id='Address' {...field}/>
                 { meta.touched && meta.error ? <div className={inputerror} >{meta.error}</div>:null}
                 </>
              )

            }
          }

            </Field>
      
          

     {/* socials */}
     <label htmlFor="socials.whatsapp"className={label}>Whatsapp  </label>
        <Field  className={input} type="text" name="socials.whatsapp" id="whatsapp"
        />
         <ErrorMessage component="div" name="socials.whatsapp" className={inputerror}/>

          <label htmlFor="socials.instagram"className={label}>Instagram  </label>
        <Field  className={input} type="text" name="socials.instagram" id="instagram"
        />
         <ErrorMessage component="div" name="socials.instagram" className={inputerror}/>

{/*           storing array data
 */}        
  <label htmlFor="primaryPhone"className={label}>First Phonenumber </label>
        <Field  className={input} type="text" name="phonenumbers[0]" id="primaryPhone"
        />
         <ErrorMessage component="div" name="phonenumbers[0]" className={inputerror}/>

         <label htmlFor="secondaryPhone"className={label}>Second Phonenumber </label>
        <Field  className={input} type="text" name="phonenumbers[1]" id="secondaryPhone"
        />
         <ErrorMessage component="div" name="phonenumbers[1]" className={inputerror}/>
    <button type="submit" className={button}>Submit</button>

      </Form></Formik>
         </div>
   
  )
}

export default InstaForms
