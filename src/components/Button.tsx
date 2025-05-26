type Buttonprop={
    handleClick:()=>void;
}
function Button(props:Buttonprop) {
  return (
    <div>
      <button onClick={props.handleClick}>Cicke me</button>
    </div>
  )
}

export default Button
