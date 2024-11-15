import React, { Component } from 'react';
import ChiComponent from './childComponent';

 class PComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  
  
    render() {
    return (
      <div>
     i am a goat
     <ChiComponent/>
     </div>
    ) };
};

export default PComponent;
