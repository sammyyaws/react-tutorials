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
    return (
      <div>
        <h5>{this.state.Count}</h5>
        <button onClick={() =>{this.increaseLike()}}>Like</button>
      </div>
    )
  }
}

export default Counter
