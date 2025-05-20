import React from 'react'
import DateView from "react-datepicker"
import  "react-datepicker/dist/react-datepicker.css"
import { Field,ErrorMessage } from 'formik'
import { input, inputerror,} from '../styles/FormClass'
function DatePicker(props) {
    const {name,label,...rest}=props
  return (
    <div>
    <label className={label} htmlFor={name}>{label}</label>
      <Field className={input} name={name} {...rest}>
        {
            ({field,form})=>{
                const {setFieldValue}=form
                const {value}=field
                return(<DateView className={input} id={name} {...rest} {...field} 
                selected={value} 
                onChange={val=>{setFieldValue(name,val)}}/>
                
                )
            }
        }
      </Field>
      <ErrorMessage className={inputerror} name={name} component="div"/>
    </div>
  )
}

export default DatePicker
