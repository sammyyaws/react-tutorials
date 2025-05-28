import { useState,createContext } from "react";
import type{ Uservalue,AuthUser,provider } from "../../Export.types";



export const userContext=createContext<Uservalue| null>(null);



//provider component
 export const UserContextProvider=({children}:provider)=>{
const [user,setUser]=useState<AuthUser |null>(null)

return <userContext.Provider value={{user,setUser}}>{children}</userContext.Provider>
}