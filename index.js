const redux=require("redux");
const createStore=redux.createStore()

const VideoAdded="VideoAdded";


//action creator

function GetVideo(){
{
    type=VideoAdded;
}}
//state declaration which is supposed to be an object always

const initialState={
    video:10,
    mp3:5,
}

//reducer 

function reducer(state=initialState,action){

    switch(action){
     case VideoAdded:
        return {
            ...state,
            video:state.video+1,

        
        }
     default:
        return state;
    }

}

const store=createStore(reducer)
console.log(store.getState())

//dispatching action
store.dispatch(GetVideo())

store.subscribe(()=>console.log(store.getState))