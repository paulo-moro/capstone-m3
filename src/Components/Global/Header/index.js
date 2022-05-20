
import { Link, useHistory } from 'react-router-dom'
import coletor from '../../../Assets/Images/coletor.jpg'
import leaf from '../../../Assets/Images/leaf.png'
import { useHeader } from "../../../Providers/Header"
import { useModal } from '../../../Providers/Modal'
import { useAuth } from '../../../Providers/IsAuth'
import Button from '../Button'
import { StyledHeader } from "./style"


const Header = () => {
  const { headerType } = useHeader()
  const {auth,handleAuth} = useAuth()
  const {openModal} = useModal()

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
            <Link to='/videos' className='navItem'>
                  Saiba Mais
              </Link>
              <Link to='/devs'  className='navItem'>
                  Quem somos
              </Link>
              <Link to="/aboutus">
                Sobre o Ecoleta
              </Link>
            </ul>
          </nav>
        :headerType === "video"?
          <nav className='header--nav'>
            <ul>
              <li>
                  <Link className='header_link' to="/"> {auth?"Home":"Login"}</Link> 
              </li>
              <Link to='/devs'  className='navItem'>
                  Quem somos
              </Link>
              <Link to="/aboutus">
                Sobre o Ecoleta
              </Link>
            </ul>
          </nav>                
        :headerType === 'homeCollector' ?
          <nav>        
            <Button whiteButton width='small' padding='9px 15px' fontSize='14px' onClick={()=>handleLogout()}>Logout</Button>
            <img src={coletor} alt='Foto de Perfil' className="profilePic" />
          </nav>
        :<nav>
          <Button whiteButton width='small' padding='9px 15px' fontSize='14px' onClick={()=>handleLogout()} >Logout</Button>
          <img src={coletor} alt='Foto de Perfil' className="profilePic" />
        </nav>
        }
      </section>
    </StyledHeader>
  )

}

export default Header