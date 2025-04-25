import React from 'react'

const FRchild=React.forwardRef ((props,ref)=>{
    return(
        <input type="test" ref={ref}/>
    )
    })
export default FRchild;