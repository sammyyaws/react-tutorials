import type { ContainerProps } from "./Export.types"


function Container(props:ContainerProps) {
  return (
    <div>
       <button style={props.style}> Fire</button> 
    </div>
  )
}

export default Container
