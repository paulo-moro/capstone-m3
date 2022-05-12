import coletor from '../../Images/coletor.jpg'
import leaf from '../../Images/leaf.png'
import { useHeader } from "../../Providers/Header"
import Button from '../Button'
import SearchBox from "../SearchBox"
import { StyledHeader } from "./style"

const Header = () => {
    const { headerType } = useHeader()

    return (
        <StyledHeader>
            <section>
                <h1>ECO<span>leta</span> <img src={leaf} alt="" /></h1>

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