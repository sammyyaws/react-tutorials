import React, { Children } from 'react'

function UseCallbackBut2({goals,increase,Children}) {
console.log(Children)

  return (
    <div>
    {goals}
      <button onClick={increase}>Add 5</button>
    </div>
  )
}

export default React.memo(UseCallbackBut2)
