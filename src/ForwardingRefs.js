//parent ref
import React, { Component } from 'react'
import FRchild from './FRchild'

class ForwardingRefs extends  Component {
constructor(props){
    super(props)
    this.inputRef=React.createRef
}
checkClicks
    render(){
        return(
            <div>
            <FRchild/>
            <button onClick={this.checkClick}>Submit</button>
            </div>
        )
    }



}
export default ForwardingRefs