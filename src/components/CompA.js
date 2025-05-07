import React,{useReducer} from 'react'
import CompB from './CompB';
import CompC from './CompC';

export const GlobalContext=React.createContext()
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
function CompA() {
     const[count,dispatch] = useReducer(reducer,initialState)
    
    
  return (
    <GlobalContext.Provider value={{CountContext:count,DispatchContext:dispatch}}>
    <div>
      <h1>COUNT:{count}</h1>
      <CompB/>
      <CompC/>
    </div>
    </GlobalContext.Provider>
  )
}

export default CompA
