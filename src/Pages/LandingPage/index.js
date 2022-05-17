import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import FormLogin from '../../Components/LandingPage-Components/FormLogin'
import ImgFlag from "../../Components/LandingPage-Components/ImgFlag"
import RawModal from "../../Components/LandingPage-Components/RegisterModal"
import car from '../../Assets/Images/car.svg'
import flower from '../../Assets/Images/flower.svg'
import ride from '../../Assets/Images/ride.svg'
import { useHeader } from "../../Providers/Header"
import { useModal } from "../../Providers/Modal"
import { StyledMain } from "./style"

const LandingPage = () => {
    const { changeHeader } = useHeader()
    const {closeModal} = useModal()
    const [displayFrame, setDisplayFrame] = useState('ride')
    
    useEffect(() => {
        changeHeader('landing')
        
        closeModal()
        const loopCond = ['flower', 'car', 'ride']
        let counter = 0

        setInterval(() => {
            setDisplayFrame(loopCond[counter])
            counter++
            if (counter === 3) {
                counter = 0
            }
        }, 8000) 
    }, [])


    return (
        <>
            <StyledMain>
                {displayFrame === 'ride' &&
                    <motion.div className="display" initial={{ opacity: 0, marginLeft: '-500px' }}
                        animate={{ opacity: '100%', marginLeft: 0 }}
                        transition={{ duration: 2.5}}>
                        <ImgFlag p1={'Você na linha de frente'} p2={'de um mundo'} p3={'mais ecológico'} imgSrc={ride} alt={'Homem andando de bicicleta'}/>
                    </motion.div>
                }
                {displayFrame === 'flower' &&
                    <motion.div className="display" initial={{ opacity: 0,  marginLeft: '-500px' }}
                        animate={{ opacity: '100%', marginLeft: 0 }}
                        transition={{ duration: 2.5 }}>
                        <ImgFlag p1={'Ativamente ajudando'} p2={'sua cidade se tornar'} p3={'um lugar melhor'} imgSrc={flower} alt={'Mulher cuidando de plantas'}/>
                    </motion.div>
                }
                {displayFrame === 'car' &&
                    <motion.div className="display" initial={{ opacity: 0,  marginLeft: '-500px'}}
                        animate={{ opacity: '100%', marginLeft: 0 }}
                        transition={{ duration: 2.5 }}>
                        <ImgFlag p1={'Aumentando sua renda,'} p2={'enquanto colabora por'} p3={'um mundo mais ECO'} imgSrc={car} alt={'Carro életrico'}/>
                    </motion.div>
                }
                <FormLogin />
            </StyledMain>
            <RawModal/>
        </>
    )
}

export default LandingPage