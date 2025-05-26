type InputProps={
    value?:string;
    handleChange:(event:React.MouseEvent<HTMLInputElement>)=>void;
}

function Input(props:InputProps) {
  return (
    <div>
      <input type="text" onChange={()=>props.handleChange}/>
    </div>
  )
}

export default Input
