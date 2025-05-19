import React from 'react'
import * as Yup from "yup"
import { Field,ErrorMessage, } from 'formik'
import { input, inputerror } from '../styles/FormClass'
function Textarea(props) {
    const {label,name,...rest}=props
  return ( 
    <div>
    <label className={label} htmlFor={name}>{label}</label>
    <Field className={input} as="textarea" name={name} {...rest}/>
    <ErrorMessage component="div" className={inputerror} name={name}/>
      
    </div>
  )
}

export default Textarea
