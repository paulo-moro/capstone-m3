import { Link } from 'react-router-dom'
import coletor from '../../Images/coletor.jpg'
import leaf from '../../Images/leaf.png'
import { useHeader } from "../../Providers/Header"
import { useModal } from '../../Providers/Modal'
import Button from '../Button'
import { StyledHeader } from "./style"
import {CgProfile} from "react-icons/cg"
import { useAuth } from '../../Providers/IsAuth'
import {useHistory} from "react-router-dom"

const Header = () => {
  const { headerType } = useHeader()
  const {auth,handleAuth} = useAuth()
  const history = useHistory()
  const handleLogout = () =>{
    localStorage.clear()
    history.push("/")
    handleAuth()
  }
  
  return (
    <StyledHeader>
      <section>
        <Link to="/"><h1>ECO<span>leta</span> <img src={leaf} alt="" /></h1></Link>

        {headerType === 'landing' ?
          <nav>
            <ul>
              <li>
                  Sobre Nós
              </li>
              <li>
                  Como Atuamos
              </li>
              <li>
                  Faça Parte
              </li>
            </ul>
          </nav>
        :headerType === "video"?
          <nav className='header--nav'>
            <ul>
              <li>
                  <Link className='header_link' to="/"><CgProfile/> {auth?"Home":"Login"}</Link> 
              </li>
              <li>
                Quem somos 
              </li>
              <li>
                Sobre o Ecoleta
              </li>
            </ul>
          </nav>                
        :headerType === 'homeCollector' ?
          <nav>        
            <Button whiteButton width='small' padding='9px 15px' fontSize='14px' onClick={()=>handleLogout()}>Logout</Button>
            <img src={coletor} alt='Foto de Perfil' className="profilePic" />
          </nav>
        :<nav>
          <Button whiteButton width='small' padding='9px 15px' fontSize='14px' >Logout</Button>
          <img src={coletor} alt='Foto de Perfil' className="profilePic" />
        </nav>
        }
      </section>
    </StyledHeader>
  )

}

export default Header