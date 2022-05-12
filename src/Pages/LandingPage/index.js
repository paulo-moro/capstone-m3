import { useEffect } from "react"
import { useHeader } from "../../Providers/Header"

const LandingPage = () => {
    const {changeHeader} = useHeader()
    
    useEffect(() => {
        changeHeader('landing')
     }, [])


    return(
        <>
            <div>LandingPage</div>
            
        </>
    )
}

export default LandingPage