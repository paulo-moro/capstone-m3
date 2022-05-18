import { Link } from 'react-router-dom'
import coletor from '../../../Assets/Images/coletor.jpg'
import leaf from '../../../Assets/Images/leaf.png'
import { useHeader } from "../../../Providers/Header"
import { useModal } from '../../../Providers/Modal'
import Button from '../Button'
import { StyledHeader } from "./style"
import {CgProfile} from "react-icons/cg"
import { useAuth } from '../../../Providers/IsAuth'
import { useHistory } from 'react-router-dom'

const Header = () => {
  const { headerType } = useHeader()
  const {auth} = useAuth()
  const {openModal} = useModal()
  const history = useHistory()

  return (
    <StyledHeader>
      <section>
        <h1 onClick={()=>history.push("/")}>ECO<span>leta</span> <img src={leaf} alt="" /></h1>

        {headerType === 'landing' ?
          <nav>
            <ul>
            <Link to='/videos' className='navItem'>
                  Saiba Mais
              </Link>
              <Link to='/devs'  className='navItem'>
                  Quem somos
              </Link>
              <li className='navItem' onClick={openModal}>
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
              <Link to='/devs'  className='navItem'>
                  Quem somos
              </Link>
              <li>
                Sobre o Ecoleta
              </li>
            </ul>
          </nav>                
        :headerType === 'homeCollector' ?
          <nav>        
            <Button whiteButton width='small' padding='9px 15px' fontSize='14px'>Logout</Button>
            <img src={coletor} alt='Foto de Perfil' className="profilePic" />
          </nav>
        :<nav>
          
          <img src={coletor} alt='Foto de Perfil' className="profilePic" />
        </nav>
        }
      </section>
    </StyledHeader>
  )

}

export default Header