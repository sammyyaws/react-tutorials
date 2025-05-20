import React from 'react'
import { Field,ErrorMessage } from 'formik'
import { input, inputerror } from '../styles/FormClass'

function Checkbox(props) {
const {name,label,options,...rest}=props
  return (
    <div>
    <label>{label}</label>
   <Field name={name} {...rest}>
   {({field})=>(
    options.map(option=>(
        <React.Fragment key={option.key}>
     <input type="checkbox" {...field}
     id={option.key}
     value={option.value} 
     checked={field.value.includes(option.value)}
     className={input} />
     <label >{option.key}</label>

     </React.Fragment>
    ))

   )


   }

   </Field>
   <ErrorMessage name={name} component="div"  className={inputerror}/>
   </div>
  )
}

export default Checkbox
