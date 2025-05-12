import Home from "./components/Home"
import Products from "./components/Products"
import {Routes,Route} from 'react-router-dom'
import {Navbar} from "./components/Navbar"
import Result from "./components/Result"
import Nomatch from "./components/Nomatch"
import Top from "./components/Top"
import Latest from "./components/Latest"
function App() {
  

  return (
    
    <div  className="App">
   <Navbar/>
     <Routes> 
      <Route path="/" element={<Home/>}/>

        <Route path="/Products" element={<Products/>}>
          <Route path="Top" element={<Top/>}/>
           <Route path="Latest" element={<Latest/>}/>
        </Route>
        
        <Route path="/results" element={<Result/>}/>
        <Route path="*" element={<Nomatch/>}/>
     </Routes>
     
    </div>
  )
}

export default App
