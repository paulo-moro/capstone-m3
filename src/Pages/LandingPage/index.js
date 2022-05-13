import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Footer from "../../Components/Footer"
import FormLogin from '../../Components/FormLogin'
import RawModal from "../../Components/RegisterModal"
import car from '../../Images/car.svg'
import flower from '../../Images/flower.svg'
import ride from '../../Images/ride.svg'
import { useHeader } from "../../Providers/Header"
import { StyledMain } from "./style"

const LandingPage = () => {
    const { changeHeader } = useHeader()
    const [displayFrame, setDisplayFrame] = useState('ride')

    useEffect(() => {
        changeHeader('landing')

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
                        <img src={ride} alt='Homem andando de bicicleta' />
                        <div className="display__paragraph">
                            <p className="p1">Você na linha de frente</p>
                            <p className="p2">de um mundo</p>
                            <p className="p3">mais ecológico</p>
                        </div>
                    </motion.div>
                }
                {displayFrame === 'flower' &&
                    <motion.div className="display" initial={{ opacity: 0,  marginLeft: '-500px' }}
                        animate={{ opacity: '100%', marginLeft: 0 }}
                        transition={{ duration: 2.5 }}>
                        <img src={flower} alt='Mulher cuidando de plantas' />
                        <div className="display__paragraph">
                            <p className="p1">Ativamente ajudando</p>
                            <p className="p2">sua cidade se tornar</p>
                            <p className="p3">um lugar melhor</p>
                        </div>
                    </motion.div>
                }
                {displayFrame === 'car' &&
                    <motion.div className="display" initial={{ opacity: 0,  marginLeft: '-500px'}}
                        animate={{ opacity: '100%', marginLeft: 0 }}
                        transition={{ duration: 2.5 }}>
                        <img src={car} alt='Homem andando de bicicleta' />
                        <div className="display__paragraph">
                            <p className="p1">Aumentando sua renda,</p>
                            <p className="p2">enquanto colabora por</p>
                            <p className="p3">um mundo mais ECO</p>
                        </div>
                    </motion.div>
                }
                <FormLogin />
            </StyledMain>
            <RawModal/>
            <Footer/>
        </>
    )
}

export default LandingPage