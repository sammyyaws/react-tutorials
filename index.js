const redux=require("redux");
const createStore=redux.createStore;
const bindActionCreators=redux.bindActionCreators;
const combineReducers=redux.combineReducers;
const VideoAdded="VideoAdded";
const AudionAdded="AudioAdded"

//action creators

//audio action createor
function GetAudio(){
    return{
        type:AudioAdded,
    }
}
//video action creator

function GetVideo(){

return    {
    type:VideoAdded,
}}
//initialStates
const AudinitialState={
    audio:10,
    mp3:8

}

const VidinitialState={
    video:10,
    mp4:5,
}


//reducer for AudioAdded
function audReducer(state=AudinitialState,action){
switch (action.type){
    case AudioAdded:
        return{
            ...state,
            audio:state.audio+state.mp3
        }
    default:
    return state;

}
}




//reducer for the VideoAdded action

function vidReducer(state=VidinitialState,action){

    switch(action.type){
     case VideoAdded:
        return {
            ...state,
            video:state.video+state.mp4,

        
        }
     default:
        return state;
    }

}

// Combining the reducer
const rootReducer=combineReducers({
    vid:VidReducer,
    aud:audReducer

})
 //create the store
const store=createStore(rootReducer)
console.log(store.getState())



const unsubscribe=store.subscribe(()=>console.log(store.getState()))

//dispatching action
/* store.dispatch(GetVideo())
store.dispatch(GetVideo())
store.dispatch(GetVideo()) */

//using the bindActionCreator helper funcrion being use to dispatch the action

const actions=bindActionCreators({GetVideo,GetAudio},store.dispatch)
actions.GetVideo();
actions.GetVideo();
actions.GetAudio();
actions.GetAudio();
actions.GetAudio();
//unsubscribe
unsubscribe();