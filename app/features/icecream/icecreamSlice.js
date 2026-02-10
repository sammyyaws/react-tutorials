const createSlice=require("@reduxjs/toolkit").createSlice
const cakeActions=require("../cake/cakeSlice").cakeActions
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

},
extraReducers: (builder) => {
  builder.addCase(cakeActions.ordered, (state) => {
    state.numOficeCream--
  })
}
})

module.exports=iceCreamSlice.reducer
module.exports.iceCreamActions=iceCreamSlice.actions
