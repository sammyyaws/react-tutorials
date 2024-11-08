
import './App.css';
import  Greet from './greet.js';
import Welcome from './welcome.js';
function App() {
  return (
    <div className="App">

    <Greet greet="Good Afternoon"/>
    <Greet greet="Good Evening"/>
    <Welcome/>



    </div>
   
  );
}

export default App;
