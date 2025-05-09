import React from 'react'

function UseCallbackbut1({num,increase,Children}) {
  console.log(Children)
  return (
    <div>
        {num}
    <button onClick={increase}>Add 5</button>
      
    </div>
  )
}

export default React.memo(UseCallbackbut1)
