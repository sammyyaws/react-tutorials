import "./styles/style.css"
/* import Greet from "./components/Greet"
import Person from "./components/Person"
import PersonList from "./components/PersonList" */
import Head from "./components/Head"
import Status from "./components/Status"
import Eye from "./components/Eye"
import Button from "./components/Button"
/* const PersonName={

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


] */



function App() {


  return (
    < >
 <Status status="loading"/>
  <Head>This is a child string</Head> 
<Eye><Head>i am the main container of the eye container</Head></Eye>
     {/*  <Greet name='Samuel' messages={10} isLoggedin={true}/>
      <Person name={PersonName}/>
      <PersonList Persons={namelist}/> */}
      <Button handleClick={(event)=>(console.log("This is an event prop"),event)}/>
    </>
  )
}

export default App
