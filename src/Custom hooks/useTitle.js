import {useEffect} from 'react'

function useTitle(count) {
useEffect(()=>{
document.title=`Home ${count}`
},[count])
}

export default useTitle
