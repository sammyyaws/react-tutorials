import React from 'react'
import "../styles/styles.css"
import {formbox,label,input,button,inputerror,smbut}from '../styles/FormClass'
import { Formik, Form,Field,ErrorMessage,FieldArray} from 'formik'
import * as Yup from 'yup'
//formik object definitions
//state mangement property


const initialValues= {
    Firstname:'',
    email:'',
  
    Address:"",
    phNumbers:[''] 

  }




  //onsubmit property
  const onSubmit=values=>{
    console.log(values)
  }


//validating with yup
const validationSchema= Yup.object({
  
  email:Yup.string().email("Invalid email").required("Required"),
 
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
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {formik=>{
        console.log(formik)
        return(
      <Form >
    
       <label htmlFor="Firstname"className={label} >
            Firstname </label>
              <Field className={input} type="text" name="Firstname" id="Firstname" validate= {validateFirstname} />   
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
      
          

{/*       FieldArray Component 
 */}      
      <FieldArray name="phNumbers">
        {
          (props)=>{
           const {form,push,remove}=props
           const {values}=form
            const{phNumbers}=values
         return phNumbers.map((phNumber, index)=>(
            <div key={index}>
           <label htmlFor=""className={label}>phNumbers </label>
             <Field  className={input} type="text" name={`phNumber[${index}]`}
        />
         <button className={smbut} type="button"  onClick={()=>{push("")}}>+</button>
          { index > 0 && <button className={smbut} type="button"   onClick={()=>{remove(index)}}>-</button>}


              </div>
             ))

         

          }
        }
      </FieldArray>   
   <button type="button" onClick={()=>formik.validateField("Firstname")}className={button}> Field validation</button>
    <button type="button" onClick={()=>formik.setFieldTouched("Firstname")}className={button}> Field visited</button>
 <button type="button" onClick={()=>formik.validateForm()}className={button}>All</button>
     <button type="button" onClick={()=>formik.setTouched({ Firstname:true,email:true,Address:true,  phNumbers:true})}className={button}>touched</button>

    <button type="submit" className={button}>Submit</button>

      </Form>)
      }}</Formik>
         </div>
   
  )
}

export default InstaForms
