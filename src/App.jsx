import Home from "./comonents/Home"
import Products from "./comonents/Products"
import {Routes,Route} from 'react-router-dom'
import {Navbar} from "./comonents/Navbar"
function App() {
  

  return (
    
    <>
   <Navbar/>
     <Routes> 
      <Route path="/" element={<Home/>}/>
        <Route path="/Products" element={<Products/>}/>
     </Routes>
     
    </>
  )
}

export default App
