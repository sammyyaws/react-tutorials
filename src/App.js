
import './App.css';
import  Greet from './greet.js';
import Welcome from './welcome.js';
function App() {
  return (
    <div className="App">

    <Greet greet="Good Afternoon"><p>Which time are we in now </p></Greet>
    <Greet greet="Good Evening"/>
  <Welcome name="Billion"/>



    </div>
   
  );
}

export default App;
