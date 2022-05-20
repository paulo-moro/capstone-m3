import { useState } from "react"
import { Link } from "react-router-dom"


export const NavOptions = ({children, location}) =>{
  const [navOpt, setNavOpt] = useState(false)
  
  const handleNavOpt = ()=>{
    setNavOpt(!navOpt)
   
  }
 
  return(
    location === "video"?
    <li onClick={handleNavOpt} className="navChoice--container">
      {navOpt && <ul className="navOpt">
        <Link to="/devs">
          Quem somos
        </Link>
        <Link to="/aboutus">
          Sobre Ecoleta
        </Link>
        <li>
        </li>        
      </ul>}
      {children}
    </li>
    :location === "login"?
      <li>
        {navOpt && <ul>
          <Link to="/devs">
          Quem somos
        </Link>
        <Link to="/aboutus">
          Sobre Ecoleta
        </Link>
          <Link to="/videos">
            Video
          </Link>
        </ul>}
        {children}
      </li>
    :location === "home" &&
      <li>
        {navOpt && <ul>
          <Link to="/devs">
          Quem somos
        </Link>
        <Link to="/aboutus">
          Sobre Ecoleta
        </Link>
        </ul>}
        {children}
      </li>
  )
}