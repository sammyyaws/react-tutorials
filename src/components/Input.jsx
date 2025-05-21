import React from 'react'
import { Field,ErrorMessage } from 'formik'
import { input, inputerror } from '../styles/FormClass'

function Input(props) {
    const {name,label,type,...rest}=props
  return (
    <div>
    <label className='label'>{label}</label>
      <Field type={type} className={input}id={name}  name={name} {...rest}/>
      <ErrorMessage className={inputerror} component="div" name={name}/>
    </div>
  )
}

export default Input
