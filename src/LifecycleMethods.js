import  React,{Component} from 'react';

export class LifecycleMethods  extends Component{

//constructor method
constructor (props){
    super (props)
}
// getDerivedStateFromProps
static getDerivedStateFromProps(){

}
// componentDidMount methods
componentDidMount (){
/*last method to be excuted after all the methods are 
executed and the component has been rendered
NOTE:if the component has child component,the child component's
componentDidMount method is rendered first before the parents componentDidMount is executed
*/

}
//
render(){
return(
    <div><h1>Life Cycle Methods</h1></div>
)
}



};

export default LifecycleMethods;