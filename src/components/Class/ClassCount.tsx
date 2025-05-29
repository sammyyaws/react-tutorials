import {Component} from "react";

type CountState={
    count:number;
}
type Props={
    message:string;
}

class ClassCount extends Component<Props,CountState> {
    state ={
        count:0
    }
    handleClick=()=>{
        this.setState((prevstate)=>({count:prevstate.count + 1}))

    }
render(){
   return(
    <>
    <div>
        <button onClick={this.handleClick}>Count:{this.state.count}</button>
    </div>
    </>
   )
}
}

export default ClassCount;