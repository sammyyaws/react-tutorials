import React,{useEffect, useReducer} from 'react'
import axios from 'axios'

const initialState={
    loading:true,
   post:{},
    error:""
}
const reducer=(state,action)=>{
    switch(action.type){
        case "success":
            return{loading:false,post:action.payload,error:""}
       case "error":
            return{loading:false,post:{},error:"Something happened"}
        default:
            return state;

    }


}

function FetchUseReducer() {
    const[state,dispatch]=useReducer(reducer,initialState)


 useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
    .then((response)=>{
dispatch({type:"success",payload:response.data})
    })
    .catch((error)=>{
        dispatch({type:"error"})
    }

    )


 })



  return (
    <div>
      {state.loading? "loading":state.post.title}
      {state.error ? state.error:null}
    </div>
  )
}
export default FetchUseReducer
