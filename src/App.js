import React from "react"


import HookCounter from "./components/HookCounter";
import HookCountertwo from "./components/HookCounter2";
import UseStateWithObject from "./components/UseStateObject";
import EffectCount from "./components/UseEffect1";
import MouseCoordinate from "./components/MouseHook";
import DisplayHook from "./components/Displayhook";
import AutoCount from "./components/AutocountHook";
import DataFetch from "./components/DataFetchHook";
import PassTheme from "./components/PassTheme";
import UseReduceCounter from "./components/useReduceCounter";








export const ThemeContext=React.createContext()
function App() {

  return (
    <div className="App">
<UseReduceCounter/>





   {/*  <ThemeContext.Provider value="DarkTheme">
<PassTheme/>
    </ThemeContext.Provider>
   */}
  {/*  <AutoCount/>
    <DisplayHook/> */}
    {/* <EffectCount/> */}
{/* <UseStateWithObject/> */}
    {/* <HookCountertwo/> */}
{/*      <HookCounter/> */}
    </div>
  );
}

export default App;
