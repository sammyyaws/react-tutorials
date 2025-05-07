import React,{useReducer} from 'react'


const initialState={
    first:0,
    second:100
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {... state,first:state.first+action.value};
        case'decrement':
           return{...state, first:state.first-action.value};
           case 'increment2':
            return {...state, second:state.second+action.value};
        case'decrement2':
           return{...state,second:state.second-action.value};
        case 'reset':
          return initialState;
        default:
            return state;
    }





}
function ReducerCounter2 (){
const[count,dispatch]=useReducer(reducer,initialState)
    return(
        <div>
            <h2>COUNT:{count.first}</h2>
            <h3>2ND COUNT:{count.second}</h3>
            <button onClick={()=>dispatch({type:"increment", value:1})}> increment</button>
            <button onClick={()=>dispatch({type:"decrement", value:1})}> decrement</button>
            <button onClick={()=>dispatch({type:"reset"})}> reset</button>
            <button onClick={()=>dispatch({type:"increment", value:5})}> increment 5</button>
{/*  different state control*/}    
            <button onClick={()=>dispatch({type:"increment2", value:100})}> increment2</button>
            <button onClick={()=>dispatch({type:"decrement2", value:100})}> decrement2</button>
         

    </div>
    )
}
export default ReducerCounter2;