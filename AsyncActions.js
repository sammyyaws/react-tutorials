///initial states

const initialStates={
    loading:true,
    data:[],
    error:""
}

//actions declaraations
const FETCH_USERS_REQUESTED="FETCH_USERS_REQUESTED"
const FETCH_USERS_SUCCEEDED="FETCH_USERS_SUCCEEDED"
const FETCH_USERS_FAILED="FETCH_USERS_FAILED"

/////action implementation

function  fetch_user_requested(){
    return{
        type:FETCH_USERS_REQUESTED
    }
}
const fetch_user_succeeded =(users)=>{
return {
    type:FETCH_USERS_SUCCEEDED,
    payload:users
}
}

const fetch_user_failed=(error)=>{
return {
    type:FETCH_USERS_FAILED,
    paylod:error
}
}



function reducer(state=initialStates,action){
 switch (action.type){

    case FETCH_USERS_REQUESTED:
      return  {
       ...state,
       loading:true,
    }
     case FETCH_USERS_SUCCEEDED:
        return{
            loading:false,
            user:action.payload,
            error:'',
        
    }
    case FETCH_USERS_FAILED:
      return  {
            loading:false,
            user:[],
            error:"couldnt fetch user data"

    }

 }
}