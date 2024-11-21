//looping through arrays using the map
import React from 'react'

 function MapList() {
    const houses=["freeman","bartels","parker"
    ]
  return (
    <div>
    {houses.map(house => <h3>{house}</h3>)}
      
    </div>
  )
};
export default MapList;
