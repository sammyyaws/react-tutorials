type Buttonprop={
    handleClick:(event:React.MouseEvent<HTMLButtonElement>)=>void;
}
function Button(props:Buttonprop) {
  return (
    <div>
      <button onClick={props.handleClick}>Cicke me</button>
    </div>
  )
}

export default Button
