type Childstring={
    children:string
}
function Head(props:Childstring) {
    
  return (
    <div>
     {props.children} 
    </div>
  )
}

export default Head
