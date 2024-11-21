
import './App.css';
import ChangeColor from './changeColor.js';
import  Greet from './greet.js';
import Welcome from './welcome.js';
import Counter from './Counter.js'
import EventBind from './EventBind.js';
import PComponent from './parentComponent.js';
import MapList from './MapList.js';

function App() {
  return (
    <div className="App">
<PComponent/>
   {/*<Greet greet="Good Afternoon"><p>Which time are we in now </p></Greet>
    <Greet greet="Good Evening"/>
  <Welcome name="Billion"/>
  <ChangeColor/>
  <Counter/>*/}
 <MapList/>


   </div>
   
  );
}

export default App;
