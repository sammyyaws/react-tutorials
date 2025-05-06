/* the childe consumer of the theme */
import React,{useContext} from 'react'
import { ThemeContext } from '../App';

function ConsumeTheme (){
 const Theme=useContext(ThemeContext)
    return(
        <div>
            i want {Theme} theme
        </div>
    )
}

export default ConsumeTheme;
