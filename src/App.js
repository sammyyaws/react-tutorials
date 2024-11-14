
import './App.css';
import ChangeColor from './changeColor.js';
import  Greet from './greet.js';
import Welcome from './welcome.js';
import Counter from './Counter.js'
import EventBind from './EventBind.js';
import parentsComponent from './parentComponent.js';


function App() {
  return (
    <div className="App">
<parentsComponent/>
   {/*<Greet greet="Good Afternoon"><p>Which time are we in now </p></Greet>
    <Greet greet="Good Evening"/>
  <Welcome name="Billion"/>
  <ChangeColor/>
  <Counter/>*/}
 


   </div>
   
  );
}

export default App;
