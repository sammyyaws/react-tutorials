
import './App.css';
import ChangeColor from './changeColor.js';
import  Greet from './greet.js';
import Welcome from './welcome.js';

function App() {
  return (
    <div className="App">

    <Greet greet="Good Afternoon"><p>Which time are we in now </p></Greet>
    <Greet greet="Good Evening"/>
  <Welcome name="Billion"/>
  <ChangeColor/>



    </div>
   
  );
}

export default App;
