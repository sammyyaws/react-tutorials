//binding
import React, { Component } from 'react'
 class EventBind extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      Message:"Bind Me",
   }
 }
 
  
  
    render() {
    return (
      <div>
      <div>{this.state.Message}</div>
        <button >BIND </button>
      </div>
    )
  }
}

export default EventBind;
