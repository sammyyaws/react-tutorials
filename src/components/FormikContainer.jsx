import React from 'react'
import { Formik,Form,Field } from 'formik'
import * as Yup from "yup"
import { formbox,button } from '../styles/FormClass'
import FormikControl from './FormikControl'
//initail values
const initialValues={
password:"",
confirmPassword:"",
comment:"",
SelectOption:"",
radioOption:"",
checkboxOption:[],
DateSelected:new Date(2000,2,10)
}
//validating 
const validationSchema=Yup.object({
password:Yup.string().min(8,"the password should have at least 8 characters").required("This field is required"),
confirmPassword:Yup.string().oneOf([Yup.ref("password"),""],"password does not match").required("this field is required"),
comment:Yup.string().max(50).required("This field is required"),
SelectOption:Yup.string().required("choose something"),
radioOption:Yup.string().when("SelectOption",(value,schema)=>{
  switch(value){
    case "Youtube":
     return schema.required("Select one here You chose youtube")
    case "Instagram":
      return schema.required("Select one here You chose Instagram")
      default:
        return schema.notRequired()
  }
}),
checkboxOption:Yup.array().min(1,"kindly select something"),
DateSelected:Yup.date().required("Chose a date")
}) 
//on submit function
const onSubmit =values=>{
    console.log(values)
}
//select option values
const optionValues=[
  {key:"Choose", value:""},
  {key:"Youtube",value:"Youtube"},
  {key:"Instagram",value:"Instagram"},
  {key:"Tiktok",value:"Tiktok"}

]
//radio option values
const radioValues=[
 
  {key:"Fries",value:"Fries"},
  {key:"Plain Rice",value:"Plain Rice"},
]

//checkbox option values
//radio option values
const checkboxValues=[
 
  {key:"Banku",value:"Banku"},
  {key:"Jollof Rice",value:"Jollof Rice"},

  
]


function FormikContainer() {


  return (
    <div className={formbox}>
    <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
    {  formik=>(
        <Form>                    
       
<FormikControl control="input" name="password" type="password" label="Password"/>
<FormikControl control="input" name="confirmPassword" type="password" label="Confrim Password"/>
<FormikControl control="textarea" name="comment" type="textarea" label="Comment"/>
<FormikControl control="select" name="SelectOption" options={optionValues} 
type="email" label="Your favorite App"/>
<FormikControl control="radio" name="radioOption" 
options={radioValues}  label="Your favorite food"/>

<FormikControl control="checkbox" name="checkboxOption" 
options={checkboxValues}  label="Select the rest"/>

<FormikControl control="date" name="DateSelected" 
 label="Birthday"/>
        <button className={button} type="submit" disabled={!formik.isValid || formik.isSubmitting}> Submit</button>
        </Form>

    )


    }
        
    </Formik>
      
    </div>
  )
}

export default FormikContainer
