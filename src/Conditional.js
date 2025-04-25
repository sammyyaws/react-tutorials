// conditional rendering in react js

import React, { Component } from 'react'

export class Conditional extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isAwake:true,
      }
    }
    
  render() {
    // using the ternary operator
 return (
    this.state.isAwake ?
    <div> We are awake</div>:
    <div>Naa we are asleep</div>
 )
 





// if else rendering

   /*  
    if (this.state.isAwake)
        return (<h3>I am awake</h3>)
    else 
    return(<h3>I am asleep</h3>);
 */

//    return (
//     <div> 
//      this.state.isAwake ? 
//     <div>We are awake </div> : <div>Naa we asleep</div>
        
//       </div>
//     )
  }
}

export default Conditional
