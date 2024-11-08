import React from 'react';


//functional component
const Greet= (props) =>{
return (
<div>
<h1>HEllO  {props.greet}</h1>
  {props.children}
</div>
)}

export default Greet;