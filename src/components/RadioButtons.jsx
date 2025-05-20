import React from 'react'
import { Field,ErrorMessage } from 'formik'
import { input, inputerror } from '../styles/FormClass'

function RadioButtons(props) {
    const {name,label,options,...rest}=props
   return (
     <div>
     <label className='label'>{label}</label>
       <Field className={input}  name={name} {...rest}>
    { ({field})=>(
        options.map(option=>(
            <React.Fragment key={option.key}>
              <div><input type="radio" 
             
               id={option.value} 
                {...field} 
               value={option.value}  
               checked={field.value===option.value}
             
               
               /> 
               <label  htmlFor={option.value}>{option.key}</label></div> 
            </React.Fragment>
        ))
    )


    }
</Field>
       <ErrorMessage className={inputerror} component="div" name={name}/>
     </div>
   )
 
}

export default RadioButtons
