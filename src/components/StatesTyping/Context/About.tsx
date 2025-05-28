import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"



function About() {
    const Theme=useContext(ThemeContext)
  return (
    <div style={{color:Theme.secondary.main}}>
      This is the about page, im a programmer 
      and one of the very best
    </div>
  )
}

export default About
