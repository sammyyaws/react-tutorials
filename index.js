const redux=require("redux");
const createStore=redux.createStore;
const bindActionCreators=redux.bindActionCreators;

const VideoAdded="VideoAdded";


//action creator

function GetVideo(){

return    {
    type:VideoAdded,
}}
//state declaration which is supposed to be an object always

const initialState={
    video:10,
    mp3:5,
}

//reducer 

function reducer(state=initialState,action){

    switch(action.type){
     case VideoAdded:
        return {
            ...state,
            video:state.video+1,

        
        }
     default:
        return state;
    }

}
 //create the store
const store=createStore(reducer)
console.log(store.getState())



const unsubscribe=store.subscribe(()=>console.log(store.getState()))

//dispatching action
/* store.dispatch(GetVideo())
store.dispatch(GetVideo())
store.dispatch(GetVideo()) */

//using the bindActionCreator helper funcrion being use to dispatch the action

const actions=bindActionCreators({GetVideo},store.dispatch)
actions.GetVideo();
actions.GetVideo();
//unsubscribe
unsubscribe();