import React, {Component} from 'react'

export class Form extends  Component {
    constructor(props){
     super(props)
    this.state= {
   username: ''
    }
    }
    // accesses the change in username state value and sets the state to the events value
    handleChange= (event) =>{
    this.setState({
        username:event.target.value
    })
    }
    
    render(){
        return(
     <form>
     <div>
       <label> Username</label> <input type="text" value = {this.state.username} onChange={this.handleChange}/>
     </div>
     </form>
        )
    }
  


}

export default Form;