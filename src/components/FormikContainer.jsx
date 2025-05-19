import React from 'react'
import { Formik,Form,Field } from 'formik'
import * as Yup from "yup"
import { formbox,button } from '../styles/FormClass'
import FormikControl from './FormikControl'
//initail values
const initialValues={
email:"",
}
//validating 
const validationSchema=Yup.object({
email:Yup.string().required("This field is required")
}) 
//on submit function
const onSubmit =values=>{
    console.log(values)
}
function FormikContainer() {


  return (
    <div className={formbox}>
    <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
    {  formik=>(
        <Form>                    
       
<FormikControl control="input" name="email" type="email" label="Email"/>
        <button className={button} type="submit" disabled={!formik.isValid || formik.isSubmitting}> Submit</button>
        </Form>

    )


    }
        
    </Formik>
      
    </div>
  )
}

export default FormikContainer
