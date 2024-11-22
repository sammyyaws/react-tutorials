//looping through arrays using the map
import React from 'react'
import Person from './Person';
 function MapList() {
    const persons=[
        {   
            name:"Junior",
            age:20,
            cwa:80},
        {
         name:"kofi",
         age:21,
         cwa:69,   
        },
        {
         name:"Kokoli",
         age:24,
         cwa:69, 
        }
        ]
  return (
    <div>
   {persons.map(per =><Person key={per.name} getPerson={per}></Person>)}
    </div> 
  )
};
export default MapList;
