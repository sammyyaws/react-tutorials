import React from 'react'
import { Formik,Form,Field } from 'formik'
import * as Yup from "yup"
import { formbox,button } from '../styles/FormClass'
import FormikControl from './FormikControl'
//initail values
const initialValues={
email:"",
comment:"",
SelectOption:"",
radioOption:"",
checkboxOption:[],
DateSelected:new Date(2000,2,10)
}
//validating 
const validationSchema=Yup.object({
email:Yup.string().required("This field is required"),
comment:Yup.string().required("This field is required"),
SelectOption:Yup.string().required("choose something"),
radioOption:Yup.string().required("choose something"),
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
  {key:"Tiktok",value:"tiktok"}

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
  {key:"Plain Rice",value:"Plain Rice"},

  
]


function FormikContainer() {


  return (
    <div className={formbox}>
    <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
    {  formik=>(
        <Form>                    
       
<FormikControl control="input" name="email" type="email" label="Email"/>
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
