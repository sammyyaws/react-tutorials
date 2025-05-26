type Buttonprop={
    handleClick:(event:React.MouseEvent<HTMLButtonElement>,id:number)=>void;
}
function Button(props:Buttonprop) {
  return (
    <div>
      <button onClick={(event)=>props.handleClick(event,1)}>Cicke me</button>
    </div>
  )
}

export default Button
