import React,{useState,useCallback} from 'react'
import UseCallbackbut1 from './useCallbackbut1';
import UseCallbackBut2 from './usecCallbackBut2';


function UseCallbackParent() {

const [Num,setNum]=useState(0)
const [Goals,setGoals]=useState(0)


const increaseGoal= useCallback(()=>{
  
    setGoals(prevGoals=>prevGoals+1)
    
    },[Goals])
    
    const increaseNum=useCallback(()=>{
        setNum(prevNum=>prevNum+5)
    },[Num])

  return (
    <div>
 
      <UseCallbackbut1 increase={increaseNum} num={Num}/>
      <UseCallbackBut2 increase={increaseGoal} goals={Goals}/>
    </div>
  )
}

export default React.memo(UseCallbackParent)
