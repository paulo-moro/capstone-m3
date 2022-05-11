import { StyledHeader } from "./style"
import leaf from '../../Images/leaf.png'

const Header = () => {
    return (
        <StyledHeader>
            <section>
            <h1>ECO<span>leta</span> <img src={leaf} alt="" /></h1>
        
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
            
            </section>

        </StyledHeader>
    )
}

export default Header