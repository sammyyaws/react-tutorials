import Input from './Input'
import React from 'react'

function FormikControl(props) {
    const{control,...rest}=props
  switch(control){
    case"input": return <Input {...rest}/>
    case "textarea":
    case "checkbox":
    case "radio":
    case "select":
    case "date":
        default :
        return null
  }
}

export default FormikControl
