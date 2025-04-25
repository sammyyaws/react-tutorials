import React from 'react'

const  Person =(props) => {
  return (
    <div>
     <h3>i am {props.getPerson.name} and i am {props.getPerson.age}</h3>
      
    </div>
  )
}

export default Person; 
