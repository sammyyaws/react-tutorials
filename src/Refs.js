import React, {Component} from 'react'

class Refs extends Component {
constructor(props){
    super(props)
    //create ref
   this.getRef=React.createRef();
      
   //callback refs
   this.callbackRef=null
   this.setcallbackRef=(element)=>{
     this.callbackRef=element
   }

}
componentDidMount(){
    if (this.callbackRef){
        this.callbackRef.focus()
    }
    //focus an input element
   // this.getRef.current.focus()
   // console.log(this.getRef)
}
Handleclick = () => {
alert(this.getRef.current.value);
};
render(){
    return(
<div>
    <input type="text" ref={this.setcallbackRef}/>
    <button onClick={this.Handleclick}>Submit</button>
</div>
)}



} 

export default Refs;