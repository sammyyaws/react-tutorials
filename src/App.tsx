import "./styles/style.css"
/* import Greet from "./components/Greet"
import Person from "./components/Person"
import PersonList from "./components/PersonList" */

// Second batch commenting
/* import Head from "./components/Head"
import Status from "./components/Status"
import Eye from "./components/Eye"
import Button from "./components/Button"
import Input from "./components/Input"
import Container from "./components/Container"
 */

/* import User from "./components/StatesTyping/User"
import Reducer from "./components/StatesTyping/Reducer"
import { ThemeContextProvider } from "./components/StatesTyping/Context/ThemeContext"
import About from "./components/StatesTyping/Context/About"
import { UserContextProvider } from "./components/StatesTyping/Context/ContextUser"
import UserCon from "./components/StatesTyping/Context/UserCon" */
/* import List from "./components/Generic typing/List"
 */
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
import RestrictProps from "./components/Restrictions/RestrictProps"
import ButtonWrap from "./components/ButtonWrap"

function App() {


  return (
    < >


<RestrictProps  value={10}  isPositive={true}/>


<ButtonWrap variant="primary" onClick={()=>{console.log("hello world")}}>
PLease click
</ButtonWrap>





{/* <List items={[
  {name:"jacob"},
  {name:"ama"}
]} 
onClick={(item)=>console.log(item)}   renderItem={(item) => <span>{item.name}</span>}/>

<List    renderItem={(item) => <span>{item}</span>}  items={[30,49]} onClick={(item)=>console.log(item)}/>
 */}
{/* <User />
<Reducer/>
<ThemeContextProvider>
<About/>
</ThemeContextProvider>

<UserContextProvider>
  <UserCon/>
</UserContextProvider>
 */}


{/*  <Status status="loading"/>
  <Head>This is a child string</Head> 
<Eye><Head>i am the main container of the eye container</Head></Eye> */}
     {/*  <Greet name='Samuel' messages={10} isLoggedin={true}/>
      <Person name={PersonName}/>
      <PersonList Persons={namelist}/> */}{/* 
      <Button handleClick={(event,id)=>(console.log("This is an event prop"),event,id)}/>
        <Input value="" handleChange={(event)=>console.log(event)}/>
        <Container style={{backgroundColor:"blue",color:"greenyellow", padding:"5px,8px"}}/> */}
    </>
  )
}

export default App
