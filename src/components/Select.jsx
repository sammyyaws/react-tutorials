import React from 'react'
import * as Yup from "yup"
import { Field,ErrorMessage, } from 'formik'
import { input, inputerror } from '../styles/FormClass'

function Select(props) {
   const {label,name,options,...rest}=props
    return ( 
      <div>
      <label className={label} htmlFor={name}>{label}</label>
      <Field id={name} className={input} as="select" name={name} {...rest}>

     { options.map(option=>(
        <option key={option.key} value={option.value}>{option.key}</option>
     ))
     }
      </Field>
      <ErrorMessage component="div" className={inputerror} name={name}/>
        
      </div>
    )
  
  
}

export default Select
