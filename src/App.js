import HookCounter from "./components/HookCounter";
import HookCountertwo from "./components/HookCounter2";
import UseStateWithObject from "./components/UseStateObject";
import EffectCount from "./components/UseEffect1";
import MouseCoordinate from "./components/MouseHook";
import DisplayHook from "./components/Displayhook";
import AutoCount from "./components/AutocountHook";
import DataFetch from "./components/DataFetchHook";
function App() {
  return (
    <div className="App">
    <DataFetch/>
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
