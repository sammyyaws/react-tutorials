
import './App.css';
import ChangeColor from './changeColor.js';
import  Greet from './greet.js';
import Welcome from './welcome.js';
import Counter from './Counter.js'
import EventBind from './EventBind.js';
import PComponent from './parentComponent.js';
import MapList from './MapList.js';
import Conditional from './Conditional.js';
import Form from './Form.js';
import  LifecycleMethods  from './LifecycleMethods.js';
import Refs from './Refs.js';
import ForwardingRefs from './ForwardingRefs.js'
function App() {
  // var Test="Faithful"
  return (
    <div className="App testback" >
  
{/*<Refs/>*/}
<ForwardingRefs/>

  {/*<Form/>*/}

   { /*<LifecycleMethods/>*/}
{/*<Fragment/>*/}
   {/* <Greet greet="Good Afternoon"><p>Which time are we in now </p></Greet>
  <Greet greet="Good Evening" children="Kofi"/>
  <Welcome name="Billion"/>
  <ChangeColor/>
  <PComponent/>
   <MapList/>
  <Counter/>*/}
 
  {/* <Counter Subs={Test}/>
<Conditional/> */}





   </div>
   
  );
}

export default App;
