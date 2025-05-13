import React,{ useState, createContext,useContext } from "react";

const AuthContext=createContext(null)

/* This is the context provider that shares all the functions to every child element it wrapped around
 */
export const AuthProvider=({children})=>{
 const [user,setUSer]=useState(null)

 const login=(user)=>{
  setUSer(user)
 }
 const logout=()=>{
    setUSer(null)
 }


    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )

}
export const useAuth=()=>{
 return useContext(AuthContext)
}