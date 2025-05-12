import Home from "./components/Home"
import Products from "./components/Products"
import {Routes,Route} from 'react-router-dom'
import {Navbar} from "./components/Navbar"
import Result from "./components/Result"
import Nomatch from "./components/Nomatch"
import Top from "./components/Top"
import Latest from "./components/Latest"
import Dynamic from "./components/Dynamic"
import DynaRoute1 from "./components/DynaRoute1"
function App() {
  

  return (
    
    <div  className="App">
   <Navbar/>
     <Routes> 
      <Route path="/" element={<Home/>}/>

        <Route path="/Products" element={<Products/>}>
        <Route index element={<Latest/>}/>
          <Route path="Top" element={<Top/>}/>
           <Route path="Latest" element={<Latest/>}/>
        </Route>

        <Route path="/results" element={<Result/>}/>
        <Route path="*" element={<Nomatch/>}/>

        <Route path="dynamic" element={<Dynamic/>} />
          <Route path="dynamic/:ItemId" element={<DynaRoute1/>} />
     </Routes>
     
    </div>
  )
}

export default App
