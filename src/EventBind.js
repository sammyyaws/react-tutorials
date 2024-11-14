//binding
import React, { Component } from 'react'
 class EventBind extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      Message:"Bind Me",
   }
   //binding in the constructor
   
   //this.ClickHandler=this.ClickHandler.bind(this)
 }
  ClickHandler(){
    this.setState({
        Message:"UNbind me when you are done"
    })
  }
 
  
  
    render() {
    return (
      <div>
      <div>{this.state.Message}</div>
        <button onClick={this.ClickHandler}>BIND </button>
      </div>
    )
  }
}

export default EventBind;
