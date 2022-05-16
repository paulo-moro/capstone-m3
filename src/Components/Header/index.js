import { Link } from 'react-router-dom'
import coletor from '../../Images/coletor.jpg'
import leaf from '../../Images/leaf.png'
import { useHeader } from "../../Providers/Header"
import { useModal } from '../../Providers/Modal'
import Button from '../Button'
import { StyledHeader } from "./style"

const Header = () => {
    const { headerType } = useHeader()
    const {openModal} = useModal()

    return (
        <StyledHeader>
            <section>
                <h1><Link to='/'>ECO<span>leta</span> <img src={leaf} alt="" /></Link></h1>

                {headerType === 'landing' ?
                    <nav>
                        <ul>
                            <Link to='/videos' className='navItem'>
                               Saiba Mais
                            </Link> 
                            
                            <Link to='/chat'  className='navItem'>
                                Fale Conosco
                            </Link>
                            <li className='navItem' onClick={openModal}>
                                Faça Parte
                            </li>
                        </ul>
                    </nav>
                    : (headerType === 'homeCollector' ?
                        <nav>
        
                            <Button whiteButton width='small' padding='9px 15px' fontSize='14px'>Logout</Button>
                            <img src={coletor} alt='Foto de Perfil' className="profilePic" />
                        </nav>

                        :
                        <nav>
                            <Button whiteButton width='small' padding='9px 15px' fontSize='14px'>Logout</Button>
                            <img src={coletor} alt='Foto de Perfil' className="profilePic" />
                        </nav>
                    )

                }
            </section>
        </StyledHeader>
    )
}

export default Header