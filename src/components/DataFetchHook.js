import React,{useState,useEffect} from "react"
import axios from "axios"
function DataFetch (){
    const [comments,setComment]=useState([])
useEffect(()=>{
 axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
 .then(response=>{setComment(response.data)})
 .catch(error=>{console.log(error)})
},[])
    return(
        <div>
            <ul>
                {comments.map(comment=>(
                    <li key ={comment.id}>{comment.body}</li>))}
            </ul>
        </div>
    )
}
export default DataFetch;