import React from 'react'
import DevCard from '../../Components/DevPage-Components/DevCard'
import gian from '../../Assets/Images/gian.jpg'
import marcelo from '../../Assets/Images/marcelo.png'
import andrea from '../../Assets/Images/andrea.jpg'
import paulo from '../../Assets/Images/paulo.jpg'
import luis from '../../Assets/Images/luis.jpg'
import { StyledMain } from './style'

const Devs = () => {
    return (
        <StyledMain>
            <h2 className='team'>Nosso time:</h2>
            <ul>
            <DevCard fig={gian} name={'Giancarlo Rossi'} links={['https://www.linkedin.com/in/giankaz/', 'https://github.com/giankaz']} role='Product Owner' />
            <DevCard fig={paulo} name={'Paulo Moro'} links={['https://www.linkedin.com/in/paulo-henrique-moro-dos-santos/', 'https://github.com/paulo-moro']} role='Scrum Master' />
            <DevCard fig={luis} name={'Luis H. Mota'} links={['https://www.linkedin.com/in/luis-henrique-mota-75a549193', 'https://github.com/luishenriquemota']} role='Tech Leader' />
            <DevCard fig={andrea} name={'Andrea Melo'} links={['https://www.linkedin.com/in/melodea', 'https://github.com/deamelo']} role='Quality Assurance' />
            <DevCard fig={marcelo} name={'Marcelo Gameiro'} links={['https://www.linkedin.com/in/mgameiros/', 'https://github.com/mgameiros']} role='Quality Assurance' />
            </ul>
        </StyledMain>
    )
}

export default Devs