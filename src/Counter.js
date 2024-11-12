import React, { Component } from 'react'

 class Counter extends Component {
constructor(){
  super()
  this.state={
    Count:0,
  }
};
increaseLike(){
this.setState({
Count:this.state.Count +1
},)
}


  render() {
    //destructuring
    
    const {Count}=this.state
    return (
      <div>
        <h5>{Count}</h5>
        <button onClick={() =>{this.increaseLike()}}>Like</button>
      </div>
    )
  }
}

export default Counter
