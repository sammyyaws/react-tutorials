import "./styles/style.css"
import Greet from "./components/Greet"
import Person from "./components/Person"
import PersonList from "./components/PersonList"

const PersonName={

 First:"Samuel",
 Last:"Yawson"
}
const namelist=[
  {id:1,
   First:"Samuel",
 Last:"Yawson" 
  },
   {id:2,
   First:"Joel",
 Last:"Turkson" 
  },
 {id:3,
   First:"Gina",
 Last:"Yabate" 
  },


]



function App() {


  return (
    < >
      <Greet name='Samuel' messages={10} isLoggedin={true}/>
      <Person name={PersonName}/>
      <PersonList Persons={namelist}/>
    </>
  )
}

export default App
