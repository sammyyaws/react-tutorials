import React,{useReducer} from 'react'
const initialState=0
const reducer=(state,action)=>{
    switch(action){
        case "increment":
            return state+1 ;
        case "Decrement":
            return state-1;
        case "Reset":
           return  initialState;
        default:
            return state;
        }

}
function UseReduceCounter (){
  const[count,dispatch] = useReducer(reducer,initialState)


    return(
        <div>Count:{count}
        <button onClick={()=>dispatch("increment")}>Increase</button>
        <button onClick={()=>dispatch("Decrement")}>Decrease</button>
        <button onClick={()=>dispatch("Reset")}>Reset</button>

        </div>

    )
}
export default UseReduceCounter;