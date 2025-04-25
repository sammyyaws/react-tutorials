import React, { Component } from 'react';
import ChiComponent from './childComponent';

 class PComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       content:" i am the best"
    }
    this.greetParent=this.greetParent.bind(this);
  };
  greetParent(){
    this.setState({
      content:"i can never fail parent"
    })
  }
  
  
  
    render() {
    return (
      <div>
     {this.state.content} 
     <ChiComponent greet={this.greetParent} />
     </div>
    ) };
};

export default PComponent;
