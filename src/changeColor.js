//

import React,{Component} from "react";

class ChangeColor extends Component{
constructor(){
    super()
    this.state= {
    Color: "RED",
    }
};
// state changer
ChangeColor(){
this.setState({
    Color: " GREEN"
})
}


render(){
 return (
 <div>

 <h3>the color is {this.state.Color}</h3>
<button onClick={() =>this.ChangeColor() }>Change</button>

</div>
 )


}
}
export default ChangeColor;