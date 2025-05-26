type PersonsProps={
    Persons:{
        id:number;
        First:string;
        Last:string;

    }[]
}
function PersonList(props:PersonsProps) {
   const {Persons}=props
  return (
    <div>
    {
        Persons.map(person=>(
            <li key={person.id}>I am <h1>{person.First}</h1> <h2>{person.Last}</h2></li>
        ))
    }
    </div>
  )
}

export default PersonList
