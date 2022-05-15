import { useState } from "react"


export const NavOptions = ({children, location}) =>{
  const [navOpt, setNavOpt] = useState(false)
  
  const handleNavOpt = ()=>{
    setNavOpt(!navOpt)
   
  }
 
  return(
    location === "video"?
    <li onClick={handleNavOpt} className="navChoice--container">
      {navOpt && <ul className="navOpt">
        <li>
          Quem somos
        </li>
        <li>
          Sobre Ecoleta
        </li>
        <li>
        </li>        
      </ul>}
      {children}
    </li>
    :location === "login"?
      <li>
        {navOpt && <ul>
          <li>
            Quem somos
          </li>
          <li>
            Sobre Ecoleta
          </li>
          <li>
            Curiosidades
          </li>
        </ul>}
        {children}
      </li>
    :location === "home" &&
      <li>
        {navOpt && <ul>
          <li>
            Quem somos
          </li>
          <li>
            Sobre Ecoleta
          </li>
        </ul>}
        {children}
      </li>
  )
}