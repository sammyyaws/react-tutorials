import Home from "./comonents/Home"
import Products from "./comonents/Products"
import {Routes,Route} from 'react-router-dom'
import {Navbar} from "./comonents/Navbar"
import Result from "./comonents/Result"
function App() {
  

  return (
    
    <div  className="App">
   <Navbar/>
     <Routes> 
      <Route path="/" element={<Home/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/results" element={<Result/>}/>
     </Routes>
     
    </div>
  )
}

export default App
