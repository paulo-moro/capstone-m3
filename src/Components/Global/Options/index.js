import { useState } from "react"
import { ContainerLista } from "./style"

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
          teste
        </li>
      </ul>}
      {children}
    </li>
    :location === "login"?
      <li>
        {navOpt && <ContainerLista>
          <li>
            Quem somos
          </li>
          <li>
            Sobre Ecoleta
          </li>
          <li>
            Curiosidades
          </li>
        </ContainerLista>}
        {children}
      </li>
    :location === "home" &&
      <li>
        {navOpt && <ul >
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