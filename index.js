const store=require("./app/store")
const cakeActions=require("./app/features/cake/cakeSlice").cakeActions
const iceCreamActions=require("./app/features/icecream/icecreamSlice").iceCreamActions

console.log("initial state:",store.getState())
const    unsubscribe=store.subscribe(()=>{
    console.log("updated state:",store.getState())
})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())

store.dispatch(cakeActions.restock(5))
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.restock(40))

unsubscribe()  