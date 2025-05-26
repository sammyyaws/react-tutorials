type StatusProps={
    status:"loading" | "Error" | "cant load";
}

function Status(props:StatusProps) {
    let message;
    const{status}=props
    switch (status){
    case "loading":
        message="now loading please wait"
        break;
    case  "Error":
        message="Please cant load "
        break;
    default:
        message=null
   
 }
  return (
    <div>
      {message}
    </div>
  )
}

export default Status
