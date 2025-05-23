//object typing 

type PersonType={
    name:{
        First:string;
        Last:string;
    }
}
function Person(props:PersonType) {
    const {name}=props
  return (
    <div>
      The your first name is  <h2 >{name.First}</h2> and your last name is <h2>{name.Last}</h2>
    </div>
  )
}

export default Person
