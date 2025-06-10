import type Greet from "./Greet"


function ExtractProp(props:React.ComponentProps<typeof Greet>) {
  return (
    <div>{props.messages}</div>
  )
}

export default ExtractProp