type Props={
    name:string;
    messages:number;
    isLoggedin:boolean 
}

function Greet(props:Props) {
    const {name, messages, isLoggedin}=props
  return (
    <div>
     { isLoggedin ? <h1> Hi {name} you have {messages} </h1>:<h3>Please you are logged out</h3>}
    </div>
  )
}

export default Greet
