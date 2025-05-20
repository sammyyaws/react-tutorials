import Input from './Input'
import React from 'react'
import Textarea from './Textarea'
import Select from './Select'
import RadioButtons from './RadioButtons'
import Checkbox from './Checkbox'
import DatePicker from './DatePicker'

function FormikControl(props) {
    const{control,...rest}=props
  switch(control){
    case"input": return <Input {...rest}/>
    case "textarea":
        return <Textarea {...rest}/>
    case "select":
      return <Select {...rest}/>
      case "radio": return <RadioButtons {...rest}/>
     case "date": return <DatePicker {...rest}/>
      case "checkbox": return <Checkbox {...rest}/>
        default :
        return null
  }
}

export default FormikControl
