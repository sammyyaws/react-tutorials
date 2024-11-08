import React, {Component} from 'react';

class Welcome extends Component {
 render(){
    return (
    <div><h1> WELCOME</h1>
   {this.props.name}
</div>
    )
 }

};
export default Welcome;