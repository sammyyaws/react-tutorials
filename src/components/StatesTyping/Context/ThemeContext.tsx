import { createContext } from "react";
import { theme } from "./Theme";

export const ThemeContext=createContext(theme)

//typing the provider

type ProviderProps={
    children:React.ReactNode;
}


export const ThemeContextProvider=({children}:ProviderProps)=>{
  
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}