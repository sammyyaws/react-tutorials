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
function MultipleuseReducer (){
  const[count,dispatch] = useReducer(reducer,initialState)
  const [countTwo,dispatchTwo]=useReducer(reducer,initialState)

    return(
        <>Count:{count}
        <button onClick={()=>dispatch("increment")}>Increase</button>
        <button onClick={()=>dispatch("Decrement")}>Decrease</button>
        <button onClick={()=>dispatch("Reset")}>Reset</button>
        Count 2:{countTwo}
        <button onClick={()=>dispatchTwo("increment")}>Increase</button>
        <button onClick={()=>dispatchTwo("Decrement")}>Decrease</button>
        <button onClick={()=>dispatchTwo("Reset")}>Reset</button>

        </>

    )
}
export default MultipleuseReducer;