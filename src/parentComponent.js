import React, { Component } from 'react'
import childComponent from './childComponent'

 class parentComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       ParentName:"Samuel",

    }
    this.greetParent=this.greetParent.bind(this)
  }

  greetParent(){
alert(`HEllO {this.state.ParentName}`)
  }
    render() {
    return (
      <div>
        <h3>i am the parent of you bitch</h3>
        
      </div>
    )
  }
}

export default parentComponent
