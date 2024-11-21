import React from 'react';

function ChiComponent(props) {
  return (
    <div>
    <button onClick={props.greet}>Greet Parent</button>
      
    </div>
  )
};

export default ChiComponent;
