const createSlice=require("@reduxjs/toolkit").createSlice

const initialState={
numOficeCream:20,
}

const iceCreamSlice=createSlice({
name:"iceCream",
initialState,
reducers:{
ordered:(state)=>{
state.numOficeCream--
},
restock:(state,actions)=>{
  state.numOficeCream+=actions.payload  
}

}
})

module.exports=iceCreamSlice.reducer
module.exports.iceCreamActions=iceCreamSlice.actions
