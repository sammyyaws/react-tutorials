import "./styles/style.css"
import Greet from "./components/Greet"
import Person from "./components/Person"

const PersonName={

 First:"Samuel",
 Last:"Yawson"
}
function App() {


  return (
    < >
      <Greet name='Samuel' messages={10} isLoggedin={true}/>
      <Person name={PersonName}/>
    </>
  )
}

export default App
