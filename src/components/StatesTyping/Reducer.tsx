import { useReducer } from "react"

type Countstate={
    count:number;
}

type Action={type:"increase"} |{type:"decrease"}




const initialState={
    count:0,
}
const reducer=(state:Countstate,action:Action)=>{
  switch (action.type){
    case "increase":
        return {count:state.count+5}
       
     case "decrease":
        return {count:state.count-5}
    default:
        return state;

  }
}



function Reducer() {
const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
      <button onClick={()=>dispatch({type:"increase"})}> Increase</button>
      <button  onClick={()=>dispatch({type:"decrease"})}>Decrease</button>
      <h1>{state.count}</h1>
    </div>
  )
}

export default Reducer
