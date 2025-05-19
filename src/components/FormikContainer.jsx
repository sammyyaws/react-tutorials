import React from 'react'
import { Formik,Form,Field } from 'formik'
import * as Yup from "yup"
import { formbox,button } from '../styles/FormClass'
import FormikControl from './FormikControl'
//initail values
const initialValues={
email:"",
comment:"",
SelectOption:""
}
//validating 
const validationSchema=Yup.object({
email:Yup.string().required("This field is required"),
comment:Yup.string().required("This field is required"),
SelectOption:Yup.string().required("choose something")
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
function FormikContainer() {


  return (
    <div className={formbox}>
    <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
    {  formik=>(
        <Form>                    
       
<FormikControl control="input" name="email" type="email" label="Email"/>
<FormikControl control="textarea" name="comment" type="textarea" label="Comment"/>
<FormikControl control="select" name="SelectOption" options={optionValues} type="email" label="Your favorite App"/>

        <button className={button} type="submit" disabled={!formik.isValid || formik.isSubmitting}> Submit</button>
        </Form>

    )


    }
        
    </Formik>
      
    </div>
  )
}

export default FormikContainer
