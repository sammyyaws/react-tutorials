import { useReducer } from "react"

type Countstate={
    count:number;
}

type resetAction={
  type:'reset'
}
type updateAction={
  type:'increase'| "decrease";
  amount:number;
}

type mainAction=resetAction|updateAction




const initialState={
    count:0,
}
const reducer=(state:Countstate,action:mainAction)=>{
  switch (action.type){
    case "increase":
        return {count:state.count+action.amount}
       
     case "decrease":
        return {count:state.count-action.amount}
      case "reset":
      return initialState;
    default:
        return state;

  }
}



function Reducer() {
const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
      <button className="mx-1.5" onClick={()=>dispatch({type:"increase",amount:10})}> Increase</button>
      <button className="mx-1.5" onClick={()=>dispatch({type:"decrease",amount:10})}>Decrease</button>
        <button className="mx-1.5" onClick={()=>dispatch({type:"reset"})}>reset</button>

      <h1>{state.count}</h1>
    </div>
  )
}

export default Reducer
